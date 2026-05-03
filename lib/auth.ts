// Edge-compatible auth helpers. Uses Web Crypto so the same code runs in
// Next.js middleware (Edge runtime) and Node API routes.

export const COOKIE_NAME = "td_auth";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET is not set.");
  return s;
}

function toHex(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let out = "";
  for (let i = 0; i < bytes.length; i++) out += bytes[i].toString(16).padStart(2, "0");
  return out;
}

async function hmacHex(payload: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  return toHex(sig);
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function makeCookieValue(): Promise<string> {
  const issuedAt = Date.now().toString();
  const sig = await hmacHex(issuedAt);
  return `${issuedAt}.${sig}`;
}

export async function verifyCookieValue(value: string | undefined | null): Promise<boolean> {
  if (!value) return false;
  const [issuedAt, sig] = value.split(".");
  if (!issuedAt || !sig) return false;
  const expected = await hmacHex(issuedAt);
  if (!constantTimeEqual(sig, expected)) return false;
  const issued = Number(issuedAt);
  if (!Number.isFinite(issued)) return false;
  const ageSeconds = (Date.now() - issued) / 1000;
  return ageSeconds >= 0 && ageSeconds <= MAX_AGE_SECONDS;
}

export function checkPassword(input: string): boolean {
  const expected = process.env.APP_PASSWORD;
  if (!expected) throw new Error("APP_PASSWORD is not set.");
  return constantTimeEqual(input, expected);
}

export const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: MAX_AGE_SECONDS,
};
