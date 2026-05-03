"use client";

import { useState } from "react";
import type { EntryType } from "@/lib/types";
import type { Book, Framework, Story, Translation } from "@/lib/schema";

type AnyRow = Framework | Story | Translation | Book;
type Mode = "create" | "edit";

const inputCls =
  "w-full rounded border border-neutral-300 bg-white px-2 py-1 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none";
const labelCls = "text-xs font-semibold uppercase tracking-wider text-neutral-500";
const fieldWrap = "flex flex-col gap-1";

function csvToArray(s: string): string[] | null {
  const arr = s
    .split(",")
    .map((x) => x.trim())
    .filter((x) => x.length > 0);
  return arr.length === 0 ? null : arr;
}

function arrayToCsv(a: string[] | null | undefined): string {
  return (a ?? []).join(", ");
}

export function EditForm({
  mode,
  type,
  initial,
  onSaved,
  onCancel,
  onDelete,
  defaultType,
  onTypeChange,
}: {
  mode: Mode;
  type: EntryType;
  initial?: AnyRow;
  onSaved: (row: AnyRow) => void;
  onCancel: () => void;
  onDelete?: () => void;
  defaultType?: EntryType;
  onTypeChange?: (t: EntryType) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const f = (initial ?? {}) as Partial<Framework & Story & Translation & Book>;
  const [state, setState] = useState({
    name: f.name ?? "",
    category: f.category ?? "",
    oneLiner: f.oneLiner ?? "",
    whenToUse: f.whenToUse ?? "",
    vocabulary: arrayToCsv(f.vocabulary as string[] | null | undefined),
    howToDropIn: f.howToDropIn ?? "",
    commonPhrasing: f.commonPhrasing ?? "",
    notes: f.notes ?? "",
    source: f.source ?? "",
    title: f.title ?? "",
    twoMinuteVersion: f.twoMinuteVersion ?? "",
    thirtySecondVersion: f.thirtySecondVersion ?? "",
    fiveMinuteVersion: f.fiveMinuteVersion ?? "",
    frameworksExemplified: arrayToCsv(f.frameworksExemplified as string[] | null | undefined),
    thinkersInDialogue: arrayToCsv(f.thinkersInDialogue as string[] | null | undefined),
    questionsItAnswers: arrayToCsv(f.questionsItAnswers as string[] | null | undefined),
    referenceSentence: f.referenceSentence ?? "",
    yourTerm: f.yourTerm ?? "",
    standardTerms: arrayToCsv(f.standardTerms as string[] | null | undefined),
    explanation: f.explanation ?? "",
    whenToUseYours: f.whenToUseYours ?? "",
    whenToUseTheirs: f.whenToUseTheirs ?? "",
    author: f.author ?? "",
    howToReference: f.howToReference ?? "",
    whenToInvoke: f.whenToInvoke ?? "",
    pairsWith: arrayToCsv(f.pairsWith as string[] | null | undefined),
    isbn13: f.isbn13 ?? "",
    publishedDate: f.publishedDate ?? "",
    tags: arrayToCsv(f.tags as string[] | null | undefined),
  });

  function set<K extends keyof typeof state>(key: K, v: (typeof state)[K]) {
    setState((s) => ({ ...s, [key]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const id = (initial as { id?: number } | undefined)?.id;
      const path =
        type === "framework"
          ? "/api/frameworks"
          : type === "story"
          ? "/api/stories"
          : type === "translation"
          ? "/api/translations"
          : "/api/books";
      const url = mode === "edit" && id ? `${path}/${id}` : path;
      const method = mode === "edit" ? "PATCH" : "POST";

      let payload: Record<string, unknown>;
      if (type === "framework") {
        payload = {
          name: state.name.trim(),
          category: state.category.trim(),
          oneLiner: state.oneLiner.trim(),
          whenToUse: state.whenToUse.trim() || null,
          vocabulary: csvToArray(state.vocabulary ?? ""),
          howToDropIn: state.howToDropIn.trim() || null,
          commonPhrasing: state.commonPhrasing.trim() || null,
          notes: state.notes.trim() || null,
          source: state.source.trim() || null,
          tags: csvToArray(state.tags ?? ""),
        };
      } else if (type === "story") {
        payload = {
          title: state.title.trim(),
          twoMinuteVersion: state.twoMinuteVersion.trim(),
          thirtySecondVersion: state.thirtySecondVersion.trim() || null,
          fiveMinuteVersion: state.fiveMinuteVersion.trim() || null,
          frameworksExemplified: csvToArray(state.frameworksExemplified ?? ""),
          thinkersInDialogue: csvToArray(state.thinkersInDialogue ?? ""),
          questionsItAnswers: csvToArray(state.questionsItAnswers ?? ""),
          referenceSentence: state.referenceSentence.trim() || null,
          notes: state.notes.trim() || null,
          tags: csvToArray(state.tags ?? ""),
        };
      } else if (type === "translation") {
        payload = {
          yourTerm: state.yourTerm.trim(),
          standardTerms: csvToArray(state.standardTerms ?? "") ?? [],
          explanation: state.explanation.trim() || null,
          whenToUseYours: state.whenToUseYours.trim() || null,
          whenToUseTheirs: state.whenToUseTheirs.trim() || null,
          tags: csvToArray(state.tags ?? ""),
        };
      } else {
        payload = {
          title: state.title.trim(),
          author: state.author.trim(),
          category: state.category.trim() || "uncategorized",
          oneLiner: state.oneLiner.trim() || null,
          howToReference: state.howToReference.trim() || null,
          whenToInvoke: state.whenToInvoke.trim() || null,
          pairsWith: csvToArray(state.pairsWith ?? ""),
          notes: state.notes.trim() || null,
          tags: csvToArray(state.tags ?? ""),
          isbn13: state.isbn13.trim() || null,
          publishedDate: state.publishedDate.trim() || null,
        };
      }

      const res = await fetch(url, {
        method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Request failed (${res.status})`);
      }
      const row = (await res.json()) as AnyRow;
      onSaved(row);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    if (!onDelete) return;
    if (!confirm("Delete this entry?")) return;
    const id = (initial as { id?: number } | undefined)?.id;
    if (!id) return;
    setBusy(true);
    try {
      const path =
        type === "framework"
          ? "/api/frameworks"
          : type === "story"
          ? "/api/stories"
          : type === "translation"
          ? "/api/translations"
          : "/api/books";
      const res = await fetch(`${path}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed.");
      onDelete();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      {mode === "create" && onTypeChange && (
        <div className={fieldWrap}>
          <span className={labelCls}>Entry type</span>
          <div className="flex gap-2">
            {(["framework", "story", "translation", "book"] as EntryType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => onTypeChange(t)}
                className={`rounded border px-3 py-1 text-xs capitalize ${
                  (defaultType ?? type) === t
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {type === "framework" && (
        <>
          <label className={fieldWrap}>
            <span className={labelCls}>Name *</span>
            <input className={inputCls} value={state.name} onChange={(e) => set("name", e.target.value)} required />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Category *</span>
            <input
              className={inputCls}
              value={state.category}
              onChange={(e) => set("category", e.target.value)}
              required
              placeholder="interview / strategy / change_management / public_sector / …"
            />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>One-liner *</span>
            <input className={inputCls} value={state.oneLiner} onChange={(e) => set("oneLiner", e.target.value)} required />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>When to use</span>
            <textarea className={inputCls} rows={2} value={state.whenToUse} onChange={(e) => set("whenToUse", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Vocabulary (comma-separated)</span>
            <input className={inputCls} value={state.vocabulary ?? ""} onChange={(e) => set("vocabulary", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>How to drop in</span>
            <textarea className={inputCls} rows={2} value={state.howToDropIn} onChange={(e) => set("howToDropIn", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Common phrasing</span>
            <textarea className={inputCls} rows={2} value={state.commonPhrasing} onChange={(e) => set("commonPhrasing", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Notes</span>
            <textarea className={inputCls} rows={4} value={state.notes} onChange={(e) => set("notes", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Source</span>
            <input className={inputCls} value={state.source} onChange={(e) => set("source", e.target.value)} />
          </label>
        </>
      )}

      {type === "story" && (
        <>
          <label className={fieldWrap}>
            <span className={labelCls}>Title *</span>
            <input className={inputCls} value={state.title} onChange={(e) => set("title", e.target.value)} required />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Reference sentence</span>
            <input className={inputCls} value={state.referenceSentence} onChange={(e) => set("referenceSentence", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>30-second version</span>
            <textarea className={inputCls} rows={2} value={state.thirtySecondVersion} onChange={(e) => set("thirtySecondVersion", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>2-minute version *</span>
            <textarea className={inputCls} rows={6} value={state.twoMinuteVersion} onChange={(e) => set("twoMinuteVersion", e.target.value)} required />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>5-minute version</span>
            <textarea className={inputCls} rows={8} value={state.fiveMinuteVersion} onChange={(e) => set("fiveMinuteVersion", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Frameworks exemplified (comma-separated)</span>
            <input className={inputCls} value={state.frameworksExemplified ?? ""} onChange={(e) => set("frameworksExemplified", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Thinkers in dialogue (comma-separated)</span>
            <input className={inputCls} value={state.thinkersInDialogue ?? ""} onChange={(e) => set("thinkersInDialogue", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Questions it answers (comma-separated)</span>
            <input className={inputCls} value={state.questionsItAnswers ?? ""} onChange={(e) => set("questionsItAnswers", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Notes</span>
            <textarea className={inputCls} rows={3} value={state.notes} onChange={(e) => set("notes", e.target.value)} />
          </label>
        </>
      )}

      {type === "translation" && (
        <>
          <label className={fieldWrap}>
            <span className={labelCls}>Your term *</span>
            <input className={inputCls} value={state.yourTerm} onChange={(e) => set("yourTerm", e.target.value)} required />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Standard terms (comma-separated) *</span>
            <input className={inputCls} value={state.standardTerms ?? ""} onChange={(e) => set("standardTerms", e.target.value)} required />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Explanation</span>
            <textarea className={inputCls} rows={3} value={state.explanation} onChange={(e) => set("explanation", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>When to use yours</span>
            <textarea className={inputCls} rows={2} value={state.whenToUseYours} onChange={(e) => set("whenToUseYours", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>When to use theirs</span>
            <textarea className={inputCls} rows={2} value={state.whenToUseTheirs} onChange={(e) => set("whenToUseTheirs", e.target.value)} />
          </label>
        </>
      )}

      {type === "book" && (
        <>
          <label className={fieldWrap}>
            <span className={labelCls}>Title *</span>
            <input className={inputCls} value={state.title} onChange={(e) => set("title", e.target.value)} required />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Author *</span>
            <input className={inputCls} value={state.author} onChange={(e) => set("author", e.target.value)} required />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Category</span>
            <input
              className={inputCls}
              value={state.category}
              onChange={(e) => set("category", e.target.value)}
              placeholder="uncategorized / strategy / design / fiction / memoir / …"
            />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>One-liner</span>
            <textarea className={inputCls} rows={2} value={state.oneLiner} onChange={(e) => set("oneLiner", e.target.value)} />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>How to reference</span>
            <textarea className={inputCls} rows={2} value={state.howToReference} onChange={(e) => set("howToReference", e.target.value)} placeholder="How you'd cite this in conversation." />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>When to invoke</span>
            <textarea className={inputCls} rows={2} value={state.whenToInvoke} onChange={(e) => set("whenToInvoke", e.target.value)} placeholder="The kind of question this book's argument answers." />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Pairs with (comma-separated)</span>
            <input className={inputCls} value={state.pairsWith ?? ""} onChange={(e) => set("pairsWith", e.target.value)} placeholder="Frameworks or other books that pair with this one." />
          </label>
          <label className={fieldWrap}>
            <span className={labelCls}>Notes</span>
            <textarea className={inputCls} rows={3} value={state.notes} onChange={(e) => set("notes", e.target.value)} />
          </label>
          <div className="flex gap-2">
            <label className={`${fieldWrap} flex-1`}>
              <span className={labelCls}>ISBN-13</span>
              <input className={inputCls} value={state.isbn13} onChange={(e) => set("isbn13", e.target.value)} />
            </label>
            <label className={`${fieldWrap} flex-1`}>
              <span className={labelCls}>Published date</span>
              <input className={inputCls} value={state.publishedDate} onChange={(e) => set("publishedDate", e.target.value)} />
            </label>
          </div>
        </>
      )}

      <label className={fieldWrap}>
        <span className={labelCls}>Tags (comma-separated)</span>
        <input className={inputCls} value={state.tags ?? ""} onChange={(e) => set("tags", e.target.value)} />
      </label>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <div className="flex items-center justify-between gap-2 pt-2">
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={busy}
            className="rounded bg-neutral-900 px-3 py-1 text-sm text-white hover:bg-neutral-700 disabled:opacity-50"
          >
            {busy ? "Saving…" : mode === "edit" ? "Save" : "Create"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="rounded border border-neutral-300 px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            Cancel
          </button>
        </div>
        {mode === "edit" && onDelete && (
          <button
            type="button"
            onClick={handleDelete}
            className="rounded border border-red-300 px-3 py-1 text-sm text-red-700 hover:bg-red-50"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
