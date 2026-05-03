import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Lazy-init so importing `db` is side-effect-free. This matters at build time:
// Next.js loads route modules during `next build` for analysis, and a top-level
// throw on missing DATABASE_URL would fail the whole build before any env vars
// are read.

type Drizzle = ReturnType<typeof drizzle<typeof schema>>;

const globalForDb = globalThis as unknown as {
  pgClient?: ReturnType<typeof postgres>;
  drizzleDb?: Drizzle;
};

function init(): Drizzle {
  if (globalForDb.drizzleDb) return globalForDb.drizzleDb;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Set it in Vercel project settings (or .env.local for local dev).",
    );
  }
  const client = globalForDb.pgClient ?? postgres(url, { max: 5, prepare: false });
  globalForDb.pgClient = client;
  const drizzleDb = drizzle(client, { schema });
  globalForDb.drizzleDb = drizzleDb;
  return drizzleDb;
}

// Proxy lets us export a value that looks like the drizzle client but only
// connects on first use.
export const db = new Proxy({} as Drizzle, {
  get(_target, prop, receiver) {
    return Reflect.get(init(), prop, receiver);
  },
}) as Drizzle;

export { schema };
