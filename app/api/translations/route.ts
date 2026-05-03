import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { translations, type NewTranslation } from "@/lib/schema";

export const runtime = "nodejs";

export async function GET() {
  const rows = await db.select().from(translations).orderBy(translations.yourTerm);
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<NewTranslation>;
  if (!body.yourTerm || !body.standardTerms || body.standardTerms.length === 0) {
    return NextResponse.json({ error: "yourTerm and at least one standardTerm are required" }, { status: 400 });
  }
  const [row] = await db
    .insert(translations)
    .values({
      yourTerm: body.yourTerm,
      standardTerms: body.standardTerms,
      explanation: body.explanation ?? null,
      whenToUseYours: body.whenToUseYours ?? null,
      whenToUseTheirs: body.whenToUseTheirs ?? null,
      tags: body.tags ?? null,
    })
    .returning();
  return NextResponse.json(row, { status: 201 });
}
