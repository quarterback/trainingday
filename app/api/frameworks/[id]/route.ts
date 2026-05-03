import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { frameworks } from "@/lib/schema";

export const runtime = "nodejs";

function parseId(raw: string): number | null {
  const id = Number(raw);
  return Number.isFinite(id) && id > 0 ? id : null;
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  if (id === null) return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  const [row] = await db.select().from(frameworks).where(eq(frameworks.id, id));
  if (!row) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json(row);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  if (id === null) return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  const body = await req.json();
  const update: Record<string, unknown> = { updatedAt: new Date() };
  for (const key of [
    "name",
    "category",
    "oneLiner",
    "whenToUse",
    "vocabulary",
    "howToDropIn",
    "commonPhrasing",
    "notes",
    "source",
    "tags",
  ] as const) {
    if (key in body) update[key] = body[key];
  }
  const [row] = await db.update(frameworks).set(update).where(eq(frameworks.id, id)).returning();
  if (!row) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json(row);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const id = parseId(params.id);
  if (id === null) return NextResponse.json({ error: "invalid_id" }, { status: 400 });
  await db.delete(frameworks).where(eq(frameworks.id, id));
  return NextResponse.json({ ok: true });
}
