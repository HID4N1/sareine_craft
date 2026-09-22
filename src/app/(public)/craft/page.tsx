import type { Metadata } from "next";

import { CraftCatalog } from "@/components/craft/CraftCatalog";
import { CraftHeroSection } from "@/components/craft/CraftHeroSection/CraftHeroSection";
import { CraftStorySection } from "@/components/craft/CraftStorySection/CraftStorySection";
import { craftPageData } from "@/data";

export const metadata: Metadata = {
  title: "Créations artisanales | Sareine Craft",
  description:
    "Découvrez les créations artisanales Sareine Craft, façonnées à la main au Maroc pour vos moments précieux.",
};

export default function CraftPage() {
  return (
    <main>
      <CraftHeroSection data={craftPageData.hero} />

      <CraftCatalog
        categories={craftPageData.categories}
        creations={craftPageData.creations}
      />

      <CraftStorySection data={craftPageData.story} />
    </main>
  );
}