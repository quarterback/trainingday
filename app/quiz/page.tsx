import { Suspense } from "react";
import QuizClient from "../_components/QuizClient";
import { frameworks } from "@/data/frameworks";
import { stories } from "@/data/stories";
import { translations } from "@/data/translations";
import { books } from "@/data/books";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <QuizClient
        frameworks={frameworks}
        stories={stories}
        translations={translations}
        books={books}
      />
    </Suspense>
  );
}
