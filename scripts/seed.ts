import { config } from "dotenv";
config({ path: ".env.local" });
config(); // fall back to .env

import { eq } from "drizzle-orm";
import { db } from "../lib/db";
import { frameworks, stories, translations } from "../lib/schema";
import { seedFrameworks } from "../seed/frameworks";
import { seedStories } from "../seed/stories";
import { seedTranslations } from "../seed/translations";

// Idempotent: upsert by natural key (name / title / yourTerm). Re-running the
// script updates content in place rather than creating duplicates.
async function upsertFrameworks() {
  for (const f of seedFrameworks) {
    const [existing] = await db
      .select({ id: frameworks.id })
      .from(frameworks)
      .where(eq(frameworks.name, f.name));
    if (existing) {
      await db.update(frameworks).set({ ...f, updatedAt: new Date() }).where(eq(frameworks.id, existing.id));
      console.log(`updated framework: ${f.name}`);
    } else {
      await db.insert(frameworks).values(f);
      console.log(`inserted framework: ${f.name}`);
    }
  }
}

async function upsertStories() {
  for (const s of seedStories) {
    const [existing] = await db
      .select({ id: stories.id })
      .from(stories)
      .where(eq(stories.title, s.title));
    if (existing) {
      await db.update(stories).set({ ...s, updatedAt: new Date() }).where(eq(stories.id, existing.id));
      console.log(`updated story: ${s.title}`);
    } else {
      await db.insert(stories).values(s);
      console.log(`inserted story: ${s.title}`);
    }
  }
}

async function upsertTranslations() {
  for (const t of seedTranslations) {
    const [existing] = await db
      .select({ id: translations.id })
      .from(translations)
      .where(eq(translations.yourTerm, t.yourTerm));
    if (existing) {
      await db.update(translations).set({ ...t, updatedAt: new Date() }).where(eq(translations.id, existing.id));
      console.log(`updated translation: ${t.yourTerm}`);
    } else {
      await db.insert(translations).values(t);
      console.log(`inserted translation: ${t.yourTerm}`);
    }
  }
}

async function main() {
  await upsertFrameworks();
  await upsertStories();
  await upsertTranslations();
  console.log("seed complete.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
