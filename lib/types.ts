export type EntryType = "framework" | "story" | "translation" | "book";

export interface SearchResults {
  frameworks: Array<import("./schema").Framework>;
  stories: Array<import("./schema").Story>;
  translations: Array<import("./schema").Translation>;
  books: Array<import("./schema").Book>;
}
