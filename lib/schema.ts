import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const frameworks = pgTable("frameworks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  oneLiner: text("one_liner").notNull(),
  whenToUse: text("when_to_use"),
  vocabulary: text("vocabulary").array(),
  howToDropIn: text("how_to_drop_in"),
  commonPhrasing: text("common_phrasing"),
  notes: text("notes"),
  source: text("source"),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const stories = pgTable("stories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  twoMinuteVersion: text("two_minute_version").notNull(),
  thirtySecondVersion: text("thirty_second_version"),
  fiveMinuteVersion: text("five_minute_version"),
  frameworksExemplified: text("frameworks_exemplified").array(),
  thinkersInDialogue: text("thinkers_in_dialogue").array(),
  questionsItAnswers: text("questions_it_answers").array(),
  referenceSentence: text("reference_sentence"),
  notes: text("notes"),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const translations = pgTable("translations", {
  id: serial("id").primaryKey(),
  yourTerm: text("your_term").notNull(),
  standardTerms: text("standard_terms").array().notNull(),
  explanation: text("explanation"),
  whenToUseYours: text("when_to_use_yours"),
  whenToUseTheirs: text("when_to_use_theirs"),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Framework = typeof frameworks.$inferSelect;
export type NewFramework = typeof frameworks.$inferInsert;
export type Story = typeof stories.$inferSelect;
export type NewStory = typeof stories.$inferInsert;
export type Translation = typeof translations.$inferSelect;
export type NewTranslation = typeof translations.$inferInsert;
