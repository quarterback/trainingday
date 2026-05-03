export type EntryType = "framework" | "story" | "translation";

export interface SearchResults {
  frameworks: Array<import("./schema").Framework>;
  stories: Array<import("./schema").Story>;
  translations: Array<import("./schema").Translation>;
}
