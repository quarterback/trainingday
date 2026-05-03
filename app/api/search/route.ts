import { NextResponse } from "next/server";
import { searchAll } from "@/lib/search";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") ?? "";
  const category = url.searchParams.get("category") ?? undefined;
  const results = await searchAll(q, category);
  return NextResponse.json(results);
}
