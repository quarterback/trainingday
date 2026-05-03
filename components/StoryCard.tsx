"use client";

import { useState } from "react";
import type { Story } from "@/lib/schema";
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

export function StoryCard({
  story,
  onChange,
  onDelete,
}: {
  story: Story;
  onChange: (next: Story) => void;
  onDelete: (id: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="rounded-md border border-neutral-300 bg-white p-4">
        <EditForm
          mode="edit"
          type="story"
          initial={story}
          onSaved={(row) => {
            onChange(row as Story);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
          onDelete={() => {
            onDelete(story.id);
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
            <span className="text-base font-semibold text-neutral-900">{story.title}</span>
            <span className="text-xs uppercase tracking-wider text-neutral-500">story</span>
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-neutral-700">{story.twoMinuteVersion}</p>
        </div>
        <span className="text-xs text-neutral-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="space-y-3 border-t border-neutral-200 px-4 py-3">
          <Field label="Reference sentence" value={story.referenceSentence} />
          <Field label="30-second version" value={story.thirtySecondVersion} />
          <Field label="2-minute version" value={story.twoMinuteVersion} />
          <Field label="5-minute version" value={story.fiveMinuteVersion} />
          <Pills label="Frameworks exemplified" items={story.frameworksExemplified} />
          <Pills label="Thinkers in dialogue" items={story.thinkersInDialogue} />
          <Pills label="Questions it answers" items={story.questionsItAnswers} />
          <Field label="Notes" value={story.notes} />
          <Pills label="Tags" items={story.tags} />
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
