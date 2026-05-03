"use client";

import { useState } from "react";
import type { Translation } from "@/lib/types";

function Field({ label, value }: { label: string; value: string | null | undefined }) {
  if (!value) return null;
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</div>
      <p className="whitespace-pre-wrap text-sm text-neutral-800">{value}</p>
    </div>
  );
}

function Pills({ label, items }: { label: string; items: string[] | null | undefined }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</div>
      <div className="mt-1 flex flex-wrap gap-1">
        {items.map((item) => (
          <span key={item} className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TranslationCard({ translation }: { translation: Translation }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md border border-neutral-200 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-baseline justify-between gap-4 px-4 py-3 text-left hover:bg-neutral-50"
      >
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-neutral-900">{translation.yourTerm}</span>
            <span className="text-xs uppercase tracking-wider text-neutral-500">translation</span>
          </div>
          <p className="mt-1 text-sm text-neutral-700">
            ↔ {translation.standardTerms.join(", ")}
          </p>
        </div>
        <span className="text-xs text-neutral-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="space-y-3 border-t border-neutral-200 px-4 py-3">
          <Pills label="Standard terms" items={translation.standardTerms} />
          <Field label="Explanation" value={translation.explanation} />
          <Field label="When to use yours" value={translation.whenToUseYours} />
          <Field label="When to use theirs" value={translation.whenToUseTheirs} />
          <Pills label="Tags" items={translation.tags} />
        </div>
      )}
    </div>
  );
}
