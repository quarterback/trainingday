import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { stories } from "@/lib/schema";

export const runtime = "nodejs";

function parseId(raw: string): number | null {
  const id = Number(raw);
  return Number.isFinite(id) && id > 0 ? id : null;
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  if (id === null) return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  const [row] = await db.select().from(stories).where(eq(stories.id, id));
  if (!row) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json(row);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  if (id === null) return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  const body = await req.json();
  const update: Record<string, unknown> = { updatedAt: new Date() };
  for (const key of [
    "title",
    "twoMinuteVersion",
    "thirtySecondVersion",
    "fiveMinuteVersion",
    "frameworksExemplified",
    "thinkersInDialogue",
    "questionsItAnswers",
    "referenceSentence",
    "notes",
    "tags",
  ] as const) {
    if (key in body) update[key] = body[key];
  }
  const [row] = await db.update(stories).set(update).where(eq(stories.id, id)).returning();
  if (!row) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json(row);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  if (id === null) return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  await db.delete(stories).where(eq(stories.id, id));
  return NextResponse.json({ ok: true });
}
