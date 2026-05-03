import { NextResponse } from "next/server";
import { checkAdmin } from "@/lib/admin";
import { runSeed } from "@/lib/seed-runner";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: Request) {
  const auth = checkAdmin(req);
  if (!auth.ok) return auth.response;
  try {
    const result = await runSeed();
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    const message = err instanceof Error ? err.message : "seed failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
