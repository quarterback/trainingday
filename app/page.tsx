import { Suspense } from "react";
import HomeClient from "./_components/HomeClient";
import { frameworks } from "@/data/frameworks";
import { stories } from "@/data/stories";
import { translations } from "@/data/translations";
import { books } from "@/data/books";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <HomeClient
        frameworks={frameworks}
        stories={stories}
        translations={translations}
        books={books}
      />
    </Suspense>
  );
}
