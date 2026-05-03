import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { stories, type NewStory } from "@/lib/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const rows = await db.select().from(stories).orderBy(stories.title);
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<NewStory>;
  if (!body.title || !body.twoMinuteVersion) {
    return NextResponse.json({ error: "title and twoMinuteVersion are required" }, { status: 400 });
  }
  const [row] = await db
    .insert(stories)
    .values({
      title: body.title,
      twoMinuteVersion: body.twoMinuteVersion,
      thirtySecondVersion: body.thirtySecondVersion ?? null,
      fiveMinuteVersion: body.fiveMinuteVersion ?? null,
      frameworksExemplified: body.frameworksExemplified ?? null,
      thinkersInDialogue: body.thinkersInDialogue ?? null,
      questionsItAnswers: body.questionsItAnswers ?? null,
      referenceSentence: body.referenceSentence ?? null,
      notes: body.notes ?? null,
      tags: body.tags ?? null,
    })
    .returning();
  return NextResponse.json(row, { status: 201 });
}
