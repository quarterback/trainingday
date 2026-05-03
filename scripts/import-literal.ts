import { config } from "dotenv";
config({ path: ".env.local" });
config(); // fall back to .env

import { importLiteralBooks } from "../lib/literal";

const HANDLE = process.env.LITERAL_HANDLE ?? "ron";

async function main() {
  console.log(`Importing FINISHED shelf for "${HANDLE}"…`);
  const r = await importLiteralBooks(HANDLE);
  console.log(
    `fetched ${r.fetched}, inserted ${r.inserted}, skipped ${r.skipped} already-present.`,
  );
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
