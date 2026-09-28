import type { Metadata } from "next";
import type { ReactNode } from "react";

import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Authentification | Sareine Craft & Events",
  description: "Espace d'authentification Sareine Craft & Events.",
  path: "/login",
  noIndex: true,
});

export default function AuthLayout({ children }: { children: ReactNode }) {
  return children;
}
