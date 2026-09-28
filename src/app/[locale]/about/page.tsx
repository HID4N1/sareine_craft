import type { Metadata } from "next";

import { AboutExperience } from "@/components/about/AboutExperience/AboutExperience";
import { getLocalizedAboutData } from "@/data/localized";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";

type LocalizedAboutProps = {
  params: Promise<{
    locale: string;
  }>;
};

const aboutMetadata: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "À propos | Créations artisanales et événements à Casablanca",
    description:
      "Découvrez Sareine, spécialiste des créations artisanales faites main et de l’organisation d’événements sur mesure à Casablanca.",
  },
  en: {
    title: "About | Handmade creations and events in Casablanca",
    description:
      "Discover Sareine, a handmade creations and bespoke event studio in Casablanca.",
  },
  ar: {
    title: "من نحن | إبداعات يدوية وفعاليات في الدار البيضاء",
    description:
      "تعرفوا على Sareine، استوديو للإبداعات اليدوية وتنظيم الفعاليات حسب الطلب في الدار البيضاء.",
  },
};

export async function generateMetadata({
  params,
}: LocalizedAboutProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const about = getLocalizedAboutData(locale);
  const copy = aboutMetadata[locale];

  return buildPageMetadata({
    title: copy.title,
    description: copy.description,
    path: "/about",
    locale,
    image: {
      url: about.pillars.items[0].images[0].src,
      alt: about.pillars.items[0].images[0].alt,
    },
  });
}

export default async function LocalizedAbout({ params }: LocalizedAboutProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;

  return <AboutExperience data={getLocalizedAboutData(locale)} />;
}
