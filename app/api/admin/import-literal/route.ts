import { NextResponse } from "next/server";
import { checkAdmin } from "@/lib/admin";
import { importLiteralBooks } from "@/lib/literal";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: Request) {
  const auth = checkAdmin(req);
  if (!auth.ok) return auth.response;

  const url = new URL(req.url);
  const handle = url.searchParams.get("handle") ?? process.env.LITERAL_HANDLE ?? "ron";

  try {
    const result = await importLiteralBooks(handle);
    return NextResponse.json({ ok: true, handle, ...result });
  } catch (err) {
    const message = err instanceof Error ? err.message : "import failed";
    return NextResponse.json({ error: message, handle }, { status: 500 });
  }
}
