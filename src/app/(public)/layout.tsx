import type { ReactNode } from "react";

import { PublicHeader } from "@/components/public/PublicHeader";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
