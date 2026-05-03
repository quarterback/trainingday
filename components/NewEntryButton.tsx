"use client";

import { useState } from "react";
import type { EntryType } from "@/lib/types";
import type { Framework, Story, Translation } from "@/lib/schema";
import { EditForm } from "./EditForm";

export function NewEntryButton({
  onCreated,
}: {
  onCreated: (row: Framework | Story | Translation, type: EntryType) => void;
}) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<EntryType>("framework");

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-neutral-900 px-3 py-1.5 text-sm text-white hover:bg-neutral-700"
      >
        New entry
      </button>
    );
  }

  return (
    <div className="rounded-md border border-neutral-300 bg-white p-4">
      <EditForm
        mode="create"
        type={type}
        defaultType={type}
        onTypeChange={setType}
        onSaved={(row) => {
          onCreated(row, type);
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}
