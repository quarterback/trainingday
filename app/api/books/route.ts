import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { books, type NewBook } from "@/lib/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const rows = await db.select().from(books).orderBy(books.title);
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<NewBook>;
  if (!body.title || !body.author) {
    return NextResponse.json({ error: "title and author are required" }, { status: 400 });
  }
  const [row] = await db
    .insert(books)
    .values({
      title: body.title,
      author: body.author,
      category: body.category ?? "uncategorized",
      oneLiner: body.oneLiner ?? null,
      howToReference: body.howToReference ?? null,
      whenToInvoke: body.whenToInvoke ?? null,
      pairsWith: body.pairsWith ?? null,
      notes: body.notes ?? null,
      tags: body.tags ?? null,
      isbn13: body.isbn13 ?? null,
      publishedDate: body.publishedDate ?? null,
      literalSlug: body.literalSlug ?? null,
      literalId: body.literalId ?? null,
      source: body.source ?? "manual",
    })
    .returning();
  return NextResponse.json(row, { status: 201 });
}
