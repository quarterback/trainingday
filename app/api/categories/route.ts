import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { books, frameworks } from "@/lib/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const fwRows = await db
    .selectDistinct({ category: frameworks.category })
    .from(frameworks)
    .orderBy(sql`${frameworks.category} asc`);
  const bkRows = await db
    .selectDistinct({ category: books.category })
    .from(books)
    .orderBy(sql`${books.category} asc`);
  const merged = Array.from(
    new Set([...fwRows.map((r) => r.category), ...bkRows.map((r) => r.category)]),
  ).sort();
  return NextResponse.json(merged);
}
