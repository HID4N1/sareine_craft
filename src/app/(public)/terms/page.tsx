import type { Metadata } from "next";

import { InfoPage } from "@/components/public/InfoPage";
import { getInfoPage } from "@/data/info-pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getInfoPage("fr", "terms");

export const metadata: Metadata = buildPageMetadata({
  title: `${page.title} | Sareine Craft & Events`,
  description: page.description,
  path: "/terms",
});

export default function TermsPage() {
  return <InfoPage {...page} />;
}
