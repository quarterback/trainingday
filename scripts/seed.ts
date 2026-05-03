import { config } from "dotenv";
config({ path: ".env.local" });
config(); // fall back to .env

import { runSeed } from "../lib/seed-runner";

async function main() {
  const r = await runSeed();
  console.log(
    `frameworks: +${r.frameworks.inserted} / ~${r.frameworks.updated} | ` +
      `stories: +${r.stories.inserted} / ~${r.stories.updated} | ` +
      `translations: +${r.translations.inserted} / ~${r.translations.updated}`,
  );
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
