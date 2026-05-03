"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "@/components/SearchBar";
import { Sidebar } from "@/components/Sidebar";
import { FrameworkCard } from "@/components/FrameworkCard";
import { StoryCard } from "@/components/StoryCard";
import { TranslationCard } from "@/components/TranslationCard";
import { NewEntryButton } from "@/components/NewEntryButton";
import type { EntryType, SearchResults } from "@/lib/types";
import type { Framework, Story, Translation } from "@/lib/schema";

export default function Home() {
  const router = useRouter();
  const params = useSearchParams();

  const [q, setQ] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState<string | null>(params.get("category"));
  const [type, setType] = useState<"all" | EntryType>(
    (params.get("type") as "all" | EntryType) ?? "all",
  );
  const [categories, setCategories] = useState<string[]>([]);
  const [results, setResults] = useState<SearchResults>({
    frameworks: [],
    stories: [],
    translations: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Persist filters to URL.
  useEffect(() => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (category) sp.set("category", category);
    if (type !== "all") sp.set("type", type);
    const next = sp.toString();
    router.replace(next ? `/?${next}` : "/", { scroll: false });
  }, [q, category, type, router]);

  // Load categories once.
  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const sp = new URLSearchParams();
      if (q) sp.set("q", q);
      if (category) sp.set("category", category);
      const res = await fetch(`/api/search?${sp.toString()}`);
      if (!res.ok) throw new Error("search failed");
      setResults((await res.json()) as SearchResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : "search failed");
    } finally {
      setLoading(false);
    }
  }, [q, category]);

  useEffect(() => {
    load();
  }, [load]);

  function refreshCategories() {
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }

  function onCreated(row: Framework | Story | Translation, t: EntryType) {
    setResults((r) => {
      if (t === "framework") return { ...r, frameworks: [...r.frameworks, row as Framework] };
      if (t === "story") return { ...r, stories: [...r.stories, row as Story] };
      return { ...r, translations: [...r.translations, row as Translation] };
    });
    if (t === "framework") refreshCategories();
  }

  function updateFramework(next: Framework) {
    setResults((r) => ({
      ...r,
      frameworks: r.frameworks.map((f) => (f.id === next.id ? next : f)),
    }));
    refreshCategories();
  }
  function deleteFramework(id: number) {
    setResults((r) => ({ ...r, frameworks: r.frameworks.filter((f) => f.id !== id) }));
    refreshCategories();
  }
  function updateStory(next: Story) {
    setResults((r) => ({ ...r, stories: r.stories.map((s) => (s.id === next.id ? next : s)) }));
  }
  function deleteStory(id: number) {
    setResults((r) => ({ ...r, stories: r.stories.filter((s) => s.id !== id) }));
  }
  function updateTranslation(next: Translation) {
    setResults((r) => ({
      ...r,
      translations: r.translations.map((t) => (t.id === next.id ? next : t)),
    }));
  }
  function deleteTranslation(id: number) {
    setResults((r) => ({ ...r, translations: r.translations.filter((t) => t.id !== id) }));
  }

  const showFrameworks = type === "all" || type === "framework";
  const showStories = type === "all" || type === "story";
  const showTranslations = type === "all" || type === "translation";

  // If a framework category is active, hide stories/translations to keep the
  // browse view focused.
  const filterToFrameworks = !!category;

  const totalCount =
    (showFrameworks ? results.frameworks.length : 0) +
    (showStories && !filterToFrameworks ? results.stories.length : 0) +
    (showTranslations && !filterToFrameworks ? results.translations.length : 0);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        categories={categories}
        selectedCategory={category}
        onSelectCategory={setCategory}
        selectedType={type}
        onSelectType={setType}
      />
      <main className="flex-1 px-6 py-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <header className="flex items-center justify-between gap-4">
            <h1 className="text-lg font-semibold">Training Day</h1>
            <div className="flex items-center gap-2">
              <Link
                href="/quiz"
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100"
              >
                Quiz me
              </Link>
              <NewEntryButton onCreated={onCreated} />
            </div>
          </header>

          <SearchBar value={q} onChange={setQ} />

          <div className="text-xs text-neutral-500">
            {loading
              ? "Searching…"
              : error
              ? `Error: ${error}`
              : `${totalCount} result${totalCount === 1 ? "" : "s"}`}
          </div>

          <div className="flex flex-col gap-2">
            {showFrameworks &&
              results.frameworks.map((f) => (
                <FrameworkCard
                  key={`f-${f.id}`}
                  framework={f}
                  onChange={updateFramework}
                  onDelete={deleteFramework}
                />
              ))}
            {showStories &&
              !filterToFrameworks &&
              results.stories.map((s) => (
                <StoryCard key={`s-${s.id}`} story={s} onChange={updateStory} onDelete={deleteStory} />
              ))}
            {showTranslations &&
              !filterToFrameworks &&
              results.translations.map((t) => (
                <TranslationCard
                  key={`t-${t.id}`}
                  translation={t}
                  onChange={updateTranslation}
                  onDelete={deleteTranslation}
                />
              ))}
            {!loading && totalCount === 0 && (
              <div className="rounded-md border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-500">
                No results. Try a different term, or create a new entry.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
