import type { Metadata } from "next";

import { EventCategoriesSection } from "@/components/home/EventCategoriesSection/EventCategoriesSection";
import { Hero } from "@/components/home/Hero/Hero";
import { ProcessSection } from "@/components/home/ProcessSection/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection/ServicesSection";
import {
  homeCraftHighlight,
  homeEventCategories,
  homeHero,
  homeProcess,
  homeProjectContact,
  homeServices,
} from "@/data";
import { CraftHighlightSection } from "@/components/home/CraftHighlightSection/CraftHighlightSection";
import { ProjectContactSection } from "@/components/home/ProjectContactSection/ProjectContactSection";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Sareine Craft & Events | Créations artisanales et événements",
  description:
    "Bougies artisanales, créations personnalisées et événements imaginés avec soin à Casablanca pour célébrer chaque moment à votre façon.",
  path: "/",
  image: {
    url: homeHero.images.primary.src,
    alt: homeHero.images.primary.alt,
  },
  keywords: [
    "Sareine Craft",
    "créations artisanales Casablanca",
    "événements Casablanca",
    "bougies artisanales Maroc",
    "décoration événementielle Casablanca",
  ],
});

export default function Home() {
  return (
    <>
      <Hero hero={homeHero} />
      <ServicesSection services={homeServices} />
      <EventCategoriesSection events={homeEventCategories} />
      <ProcessSection process={homeProcess} />
      <CraftHighlightSection craft={homeCraftHighlight} />
      <ProjectContactSection project={homeProjectContact} />
    </>
  );
}
