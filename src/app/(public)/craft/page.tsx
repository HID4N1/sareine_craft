import type { Metadata } from "next";

import { CraftCreationsSection } from "@/components/craft/CraftCreationsSection/CraftCreationsSection";
import { CraftHeroSection } from "@/components/craft/CraftHeroSection/CraftHeroSection";
import { CraftStorySection } from "@/components/craft/CraftStorySection/CraftStorySection";
import { craftCollections, craftPageData } from "@/data";

export const metadata: Metadata = {
  title: "Créations artisanales | Sareine Craft",
  description:
    "Découvrez les créations artisanales Sareine Craft, façonnées à la main au Maroc pour vos moments précieux.",
};

export default function CraftPage() {
  return (
    <main>
      <CraftHeroSection data={craftPageData.hero} />

      <CraftCreationsSection
        data={craftPageData.creations}
        collections={craftCollections}
      />

      <CraftStorySection data={craftPageData.story} />
    </main>
  );
}