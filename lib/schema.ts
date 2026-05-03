import { pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

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

export const books = pgTable(
  "books",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author").notNull(),
    category: text("category").notNull().default("uncategorized"),
    oneLiner: text("one_liner"),
    howToReference: text("how_to_reference"),
    whenToInvoke: text("when_to_invoke"),
    pairsWith: text("pairs_with").array(),
    notes: text("notes"),
    tags: text("tags").array(),
    isbn13: text("isbn13"),
    publishedDate: text("published_date"),
    literalSlug: text("literal_slug"),
    literalId: text("literal_id"),
    source: text("source").notNull().default("manual"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => ({
    titleAuthorIdx: uniqueIndex("books_title_author_idx").on(t.title, t.author),
  }),
);

export type Framework = typeof frameworks.$inferSelect;
export type NewFramework = typeof frameworks.$inferInsert;
export type Story = typeof stories.$inferSelect;
export type NewStory = typeof stories.$inferInsert;
export type Translation = typeof translations.$inferSelect;
export type NewTranslation = typeof translations.$inferInsert;
export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
