import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { frameworks } from "@/lib/schema";

export const runtime = "nodejs";

export async function GET() {
  const rows = await db
    .selectDistinct({ category: frameworks.category })
    .from(frameworks)
    .orderBy(sql`${frameworks.category} asc`);
  return NextResponse.json(rows.map((r) => r.category));
}
