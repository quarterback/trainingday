import { NextResponse } from "next/server";
import { checkAdmin } from "@/lib/admin";
import { runSetup } from "@/lib/setup-sql";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const auth = checkAdmin(req);
  if (!auth.ok) return auth.response;
  try {
    const result = await runSetup();
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    const message = err instanceof Error ? err.message : "setup failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
