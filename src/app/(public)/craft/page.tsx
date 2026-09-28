import type { Metadata } from "next";

import { CraftCreationsSection } from "@/components/craft/CraftCreationsSection/CraftCreationsSection";
import { CraftHeroSection } from "@/components/craft/CraftHeroSection/CraftHeroSection";
import { CraftStorySection } from "@/components/craft/CraftStorySection/CraftStorySection";
import { craftCollections, craftPageData } from "@/data";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Créations artisanales | Sareine Craft",
  description:
    "Découvrez les créations artisanales Sareine Craft, façonnées à la main au Maroc pour vos moments précieux.",
  path: "/craft",
  image: {
    url: craftPageData.hero.image.src,
    alt: craftPageData.hero.image.alt,
  },
  keywords: [
    "créations artisanales Maroc",
    "bougies artisanales",
    "cadeaux personnalisés",
    "Sareine Craft",
    "fait main Maroc",
  ],
});

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
