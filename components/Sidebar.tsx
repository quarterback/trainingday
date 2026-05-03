"use client";

import type { EntryType } from "@/lib/types";

const TYPES: Array<{ key: "all" | EntryType; label: string }> = [
  { key: "all", label: "All" },
  { key: "framework", label: "Frameworks" },
  { key: "story", label: "Stories" },
  { key: "translation", label: "Translations" },
];

export function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  selectedType,
  onSelectType,
}: {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (c: string | null) => void;
  selectedType: "all" | EntryType;
  onSelectType: (t: "all" | EntryType) => void;
}) {
  return (
    <aside className="flex w-56 shrink-0 flex-col gap-6 border-r border-neutral-200 bg-neutral-50 p-4 text-sm">
      <section>
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Type
        </div>
        <ul className="flex flex-col gap-1">
          {TYPES.map((t) => {
            const active = selectedType === t.key;
            return (
              <li key={t.key}>
                <button
                  onClick={() => onSelectType(t.key)}
                  className={`w-full rounded px-2 py-1 text-left ${
                    active ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {t.label}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Framework category
        </div>
        <ul className="flex flex-col gap-1">
          <li>
            <button
              onClick={() => onSelectCategory(null)}
              className={`w-full rounded px-2 py-1 text-left ${
                selectedCategory === null
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              All categories
            </button>
          </li>
          {categories.map((c) => {
            const active = selectedCategory === c;
            return (
              <li key={c}>
                <button
                  onClick={() => onSelectCategory(c)}
                  className={`w-full rounded px-2 py-1 text-left capitalize ${
                    active ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {c}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </aside>
  );
}
