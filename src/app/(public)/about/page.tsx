import type { Metadata } from "next";

import { AboutExperience } from "@/components/about/AboutExperience/AboutExperience";
import { aboutPageData } from "@/data/about";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "À propos | Créations artisanales et événements à Casablanca",
  description:
    "Découvrez Sareine, spécialiste des créations artisanales faites main et de l’organisation d’événements sur mesure à Casablanca : anniversaires, baby showers, célébrations privées et décoration.",
  keywords: [
    "Sareine Casablanca",
    "organisation événements Casablanca",
    "événements sur mesure Casablanca",
    "décoration événementielle Casablanca",
    "créations artisanales Maroc",
    "bougies artisanales Casablanca",
    "baby shower Casablanca",
    "anniversaire Casablanca",
    "événement privé Casablanca",
  ],
  path: "/about",
  image: {
    url: aboutPageData.pillars.items[0].images[0].src,
    alt: aboutPageData.pillars.items[0].images[0].alt,
  },
});

export default function AboutPage() {
  return <AboutExperience />;
}
