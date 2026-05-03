import { Suspense } from "react";
import AdminClient from "../_components/AdminClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <AdminClient />
    </Suspense>
  );
}
