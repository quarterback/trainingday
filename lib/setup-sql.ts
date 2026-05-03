import { sql } from "drizzle-orm";
import { db } from "./db";

// Idempotent schema setup. Runs CREATE TABLE IF NOT EXISTS for the four
// content tables so first-time setup can be triggered from the deployed
// admin page (no local terminal required). Mirrors lib/schema.ts — keep
// these in sync. If you change the schema, add an ALTER TABLE here too,
// or fall back to `npm run db:push` from a local checkout.

export async function runSetup(): Promise<{ statements: number }> {
  const statements: ReturnType<typeof sql>[] = [
    sql`
      CREATE TABLE IF NOT EXISTS frameworks (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        one_liner TEXT NOT NULL,
        when_to_use TEXT,
        vocabulary TEXT[],
        how_to_drop_in TEXT,
        common_phrasing TEXT,
        notes TEXT,
        source TEXT,
        tags TEXT[],
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `,
    sql`
      CREATE TABLE IF NOT EXISTS stories (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        two_minute_version TEXT NOT NULL,
        thirty_second_version TEXT,
        five_minute_version TEXT,
        frameworks_exemplified TEXT[],
        thinkers_in_dialogue TEXT[],
        questions_it_answers TEXT[],
        reference_sentence TEXT,
        notes TEXT,
        tags TEXT[],
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `,
    sql`
      CREATE TABLE IF NOT EXISTS translations (
        id SERIAL PRIMARY KEY,
        your_term TEXT NOT NULL,
        standard_terms TEXT[] NOT NULL,
        explanation TEXT,
        when_to_use_yours TEXT,
        when_to_use_theirs TEXT,
        tags TEXT[],
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `,
    sql`
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        category TEXT NOT NULL DEFAULT 'uncategorized',
        one_liner TEXT,
        how_to_reference TEXT,
        when_to_invoke TEXT,
        pairs_with TEXT[],
        notes TEXT,
        tags TEXT[],
        isbn13 TEXT,
        published_date TEXT,
        literal_slug TEXT,
        literal_id TEXT,
        source TEXT NOT NULL DEFAULT 'manual',
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `,
    sql`
      CREATE UNIQUE INDEX IF NOT EXISTS books_title_author_idx
        ON books(title, author)
    `,
  ];

  for (const stmt of statements) {
    await db.execute(stmt);
  }
  return { statements: statements.length };
}
