import { NextResponse } from "next/server";
import { COOKIE_NAME, COOKIE_OPTIONS, checkPassword, makeCookieValue } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: { password?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const password = (body.password ?? "").toString();
  if (!password || !checkPassword(password)) {
    return NextResponse.json({ error: "invalid_password" }, { status: 401 });
  }

  const value = await makeCookieValue();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, value, COOKIE_OPTIONS);
  return res;
}
