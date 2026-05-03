import { sql } from "drizzle-orm";
import { db } from "./db";
import { books } from "./schema";

const LITERAL_API = "https://literal.club/graphql/";
const PAGE_SIZE = 100;

interface LiteralAuthor {
  name: string;
}

interface LiteralBook {
  id: string;
  title: string;
  slug?: string | null;
  isbn13?: string | null;
  publishedDate?: string | null;
  description?: string | null;
  authors?: LiteralAuthor[] | null;
}

export interface LiteralImportReport {
  fetched: number;
  inserted: number;
  skipped: number;
}

async function gql<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(LITERAL_API, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const json = (await res.json()) as { data?: T; errors?: Array<{ message: string }> };
  if (json.errors && json.errors.length > 0) {
    throw new Error(`Literal API error: ${json.errors.map((e) => e.message).join("; ")}`);
  }
  if (!json.data) throw new Error("Literal API returned no data.");
  return json.data;
}

async function getProfileId(handle: string): Promise<string> {
  const data = await gql<{ profile: { id: string } | null }>(
    `query($handle: String!) {
       profile: profileByHandle(handle: $handle) { id }
     }`,
    { handle },
  );
  if (!data.profile) throw new Error(`No Literal profile for handle "${handle}".`);
  return data.profile.id;
}

async function getAllFinishedBooks(profileId: string): Promise<LiteralBook[]> {
  const all: LiteralBook[] = [];
  let offset = 0;
  while (true) {
    const data = await gql<{ booksByReadingStateAndProfile: LiteralBook[] }>(
      `query($id: String!, $limit: Int!, $offset: Int!) {
         booksByReadingStateAndProfile(
           profileId: $id
           readingStatus: FINISHED
           limit: $limit
           offset: $offset
         ) {
           id
           title
           slug
           isbn13
           publishedDate
           description
           authors { name }
         }
       }`,
      { id: profileId, limit: PAGE_SIZE, offset },
    );
    const batch = data.booksByReadingStateAndProfile ?? [];
    all.push(...batch);
    if (batch.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }
  return all;
}

function authorsToString(authors: LiteralAuthor[] | null | undefined): string {
  if (!authors || authors.length === 0) return "Unknown";
  return authors.map((a) => a.name).join(", ");
}

function truncate(s: string | null | undefined, max = 240): string | null {
  if (!s) return null;
  const trimmed = s.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;
  return trimmed.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

export async function importLiteralBooks(handle: string): Promise<LiteralImportReport> {
  const profileId = await getProfileId(handle);
  const literalBooks = await getAllFinishedBooks(profileId);

  let inserted = 0;
  let skipped = 0;
  for (const b of literalBooks) {
    const author = authorsToString(b.authors);
    const oneLiner = truncate(b.description);
    const result = await db
      .insert(books)
      .values({
        title: b.title,
        author,
        category: "uncategorized",
        oneLiner,
        notes: null,
        isbn13: b.isbn13 ?? null,
        publishedDate: b.publishedDate ?? null,
        literalSlug: b.slug ?? null,
        literalId: b.id,
        source: "literal",
      })
      .onConflictDoNothing({ target: [books.title, books.author] })
      .returning({ id: books.id });
    if (result.length > 0) inserted++;
    else skipped++;
  }

  // Backfill literal metadata on rows that already existed without it, so the
  // link-out works for entries from earlier imports. Preserves any non-null
  // existing values.
  for (const b of literalBooks) {
    const author = authorsToString(b.authors);
    await db.execute(sql`
      UPDATE books
         SET literal_slug   = COALESCE(literal_slug,   ${b.slug ?? null}),
             literal_id     = COALESCE(literal_id,     ${b.id}),
             isbn13         = COALESCE(isbn13,         ${b.isbn13 ?? null}),
             published_date = COALESCE(published_date, ${b.publishedDate ?? null})
       WHERE title = ${b.title} AND author = ${author}
    `);
  }

  return { fetched: literalBooks.length, inserted, skipped };
}
