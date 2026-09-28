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

export const metadata: Metadata = {
  title: "Sareine Craft & Events | Créations artisanales et événements",
  description:
    "Bougies artisanales, créations personnalisées et événements imaginés avec soin à Casablanca pour célébrer chaque moment à votre façon.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sareine Craft & Events | Créations artisanales et événements",
    description:
      "Découvrez l’univers Sareine : créations artisanales, décorations et événements sur mesure à Casablanca.",
    url: "/",
    type: "website",
    locale: "fr_MA",
    siteName: "Sareine Craft & Events",
    images: [
      {
        url: homeHero.images.primary.src,
        alt: homeHero.images.primary.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sareine Craft & Events | Créations artisanales et événements",
    description:
      "Créations artisanales, décorations et événements sur mesure à Casablanca.",
    images: [homeHero.images.primary.src],
  },
};

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
