import { NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { books, frameworks, stories, translations } from "@/lib/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type") ?? "framework";
  const category = url.searchParams.get("category") ?? undefined;

  if (type === "framework") {
    const rows = await db
      .select()
      .from(frameworks)
      .where(category && category !== "all" ? eq(frameworks.category, category) : sql`true`)
      .orderBy(sql`random()`)
      .limit(1);
    return NextResponse.json({ type, entry: rows[0] ?? null });
  }
  if (type === "story") {
    const rows = await db.select().from(stories).orderBy(sql`random()`).limit(1);
    return NextResponse.json({ type, entry: rows[0] ?? null });
  }
  if (type === "translation") {
    const rows = await db.select().from(translations).orderBy(sql`random()`).limit(1);
    return NextResponse.json({ type, entry: rows[0] ?? null });
  }
  if (type === "book") {
    const rows = await db
      .select()
      .from(books)
      .where(category && category !== "all" ? eq(books.category, category) : sql`true`)
      .orderBy(sql`random()`)
      .limit(1);
    return NextResponse.json({ type, entry: rows[0] ?? null });
  }
  return NextResponse.json({ error: "invalid_type" }, { status: 400 });
}
