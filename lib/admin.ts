// Admin token gate for the in-app setup/seed/import routes. The admin page
// is just a UI; the protection lives here. Token is read from
// `?token=<...>` (or Authorization: Bearer <...>) and compared against
// process.env.ADMIN_TOKEN. If ADMIN_TOKEN is not set, all admin routes are
// disabled and return a clear error — the user has to set the env var in
// Vercel before any admin action will run.

import { NextResponse } from "next/server";

export type AdminCheck =
  | { ok: true }
  | { ok: false; response: NextResponse };

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function checkAdmin(req: Request): AdminCheck {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) {
    return {
      ok: false,
      response: NextResponse.json(
        {
          error:
            "ADMIN_TOKEN is not set. Add it as an environment variable in Vercel project settings (Production + Preview), redeploy, and try again.",
        },
        { status: 503 },
      ),
    };
  }
  const url = new URL(req.url);
  const tokenFromQuery = url.searchParams.get("token") ?? "";
  const auth = req.headers.get("authorization") ?? "";
  const tokenFromHeader = auth.startsWith("Bearer ") ? auth.slice("Bearer ".length) : "";
  const provided = tokenFromHeader || tokenFromQuery;
  if (!provided || !constantTimeEqual(provided, expected)) {
    return {
      ok: false,
      response: NextResponse.json({ error: "invalid admin token" }, { status: 401 }),
    };
  }
  return { ok: true };
}
