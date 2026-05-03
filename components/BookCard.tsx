"use client";

import { useState } from "react";
import type { Book } from "@/lib/schema";
import { EditForm } from "./EditForm";

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

export function BookCard({
  book,
  onChange,
  onDelete,
}: {
  book: Book;
  onChange: (next: Book) => void;
  onDelete: (id: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="rounded-md border border-neutral-300 bg-white p-4">
        <EditForm
          mode="edit"
          type="book"
          initial={book}
          onSaved={(row) => {
            onChange(row as Book);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
          onDelete={() => {
            onDelete(book.id);
            setEditing(false);
          }}
        />
      </div>
    );
  }

  return (
    <div className="rounded-md border border-neutral-200 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-baseline justify-between gap-4 px-4 py-3 text-left hover:bg-neutral-50"
      >
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-neutral-900">{book.title}</span>
            <span className="text-xs uppercase tracking-wider text-neutral-500">
              {book.category}
            </span>
            {book.source === "literal" && (
              <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-700">
                literal
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-neutral-700">
            {book.author}
            {book.oneLiner ? ` — ${book.oneLiner}` : ""}
          </p>
        </div>
        <span className="text-xs text-neutral-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="space-y-3 border-t border-neutral-200 px-4 py-3">
          <Field label="One-liner" value={book.oneLiner} />
          <Field label="How to reference" value={book.howToReference} />
          <Field label="When to invoke" value={book.whenToInvoke} />
          <Pills label="Pairs with" items={book.pairsWith} />
          <Field label="Notes" value={book.notes} />
          <Pills label="Tags" items={book.tags} />
          {(book.isbn13 || book.publishedDate || book.literalSlug) && (
            <div className="text-xs text-neutral-500">
              {book.publishedDate && <span>{book.publishedDate}</span>}
              {book.publishedDate && book.isbn13 && <span> · </span>}
              {book.isbn13 && <span>ISBN {book.isbn13}</span>}
              {book.literalSlug && (
                <>
                  {(book.publishedDate || book.isbn13) && <span> · </span>}
                  <a
                    href={`https://literal.club/book/${book.literalSlug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-neutral-700"
                  >
                    Literal
                  </a>
                </>
              )}
            </div>
          )}
          <div className="pt-2">
            <button
              onClick={() => setEditing(true)}
              className="rounded border border-neutral-300 px-3 py-1 text-xs text-neutral-700 hover:bg-neutral-100"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
