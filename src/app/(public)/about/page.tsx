import type { Metadata } from "next";

import { AboutExperience } from "@/components/about/AboutExperience/AboutExperience";

export const metadata: Metadata = {
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
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Sareine | Créations artisanales et événements sur mesure",
    description:
      "Des créations faites main et des événements uniques, imaginés avec soin à Casablanca.",
    url: "/about",
    type: "website",
    locale: "fr_MA",
    siteName: "Sareine Craft & Events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sareine | Craft & Events à Casablanca",
    description:
      "Créations artisanales et organisation d’événements sur mesure à Casablanca.",
  },
};

export default function AboutPage() {
  return <AboutExperience />;
}