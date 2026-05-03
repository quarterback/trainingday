import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { frameworks, type NewFramework } from "@/lib/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const rows = await db.select().from(frameworks).orderBy(frameworks.name);
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<NewFramework>;
  if (!body.name || !body.category || !body.oneLiner) {
    return NextResponse.json({ error: "name, category, and oneLiner are required" }, { status: 400 });
  }
  const [row] = await db
    .insert(frameworks)
    .values({
      name: body.name,
      category: body.category,
      oneLiner: body.oneLiner,
      whenToUse: body.whenToUse ?? null,
      vocabulary: body.vocabulary ?? null,
      howToDropIn: body.howToDropIn ?? null,
      commonPhrasing: body.commonPhrasing ?? null,
      notes: body.notes ?? null,
      source: body.source ?? null,
      tags: body.tags ?? null,
    })
    .returning();
  return NextResponse.json(row, { status: 201 });
}
