import type { Metadata } from "next";

import { EventCategoriesSection } from "@/components/home/EventCategoriesSection/EventCategoriesSection";
import { Hero } from "@/components/home/Hero/Hero";
import { ProcessSection } from "@/components/home/ProcessSection/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection/ServicesSection";
import { CraftHighlightSection } from "@/components/home/CraftHighlightSection/CraftHighlightSection";
import { ProjectContactSection } from "@/components/home/ProjectContactSection/ProjectContactSection";
import { getLocalizedHomeData } from "@/data/localized";
import {
  defaultLocale,
  isLocale,
  ogLocales,
  type Locale,
} from "@/i18n/config";

type LocalizedHomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

const localizedMetadata: Record<
  Locale,
  {
    title: string;
    description: string;
    openGraphDescription: string;
  }
> = {
  fr: {
    title: "Sareine Craft & Events | Créations artisanales et événements",
    description:
      "Bougies artisanales, créations personnalisées et événements imaginés avec soin à Casablanca pour célébrer chaque moment à votre façon.",
    openGraphDescription:
      "Découvrez l’univers Sareine : créations artisanales, décorations et événements sur mesure à Casablanca.",
  },
  en: {
    title: "Sareine Craft & Events | Handmade creations and events",
    description:
      "Handmade candles, personalized creations, and carefully designed events in Casablanca to celebrate every moment your way.",
    openGraphDescription:
      "Discover Sareine: handmade creations, decor, and bespoke events in Casablanca.",
  },
  ar: {
    title: "Sareine Craft & Events | إبداعات يدوية وفعاليات",
    description:
      "شموع يدوية، إبداعات مخصصة، وفعاليات مصممة بعناية في الدار البيضاء للاحتفال بكل لحظة بطريقتكم.",
    openGraphDescription:
      "اكتشفوا عالم Sareine: إبداعات يدوية، ديكور، وفعاليات مصممة حسب الطلب في الدار البيضاء.",
  },
};

export async function generateMetadata({
  params,
}: LocalizedHomeProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const home = getLocalizedHomeData(locale);
  const copy = localizedMetadata[locale];
  const canonical = `/${locale}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: copy.title,
      description: copy.openGraphDescription,
      url: canonical,
      type: "website",
      locale: ogLocales[locale],
      siteName: "Sareine Craft & Events",
      images: [
        {
          url: home.hero.images.primary.src,
          alt: home.hero.images.primary.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.openGraphDescription,
      images: [home.hero.images.primary.src],
    },
  };
}

export default async function LocalizedHome({ params }: LocalizedHomeProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const home = getLocalizedHomeData(locale);

  return (
    <>
      <Hero hero={home.hero} />
      <ServicesSection services={home.services} />
      <EventCategoriesSection events={home.eventCategories} />
      <ProcessSection process={home.process} />
      <CraftHighlightSection craft={home.craftHighlight} />
      <ProjectContactSection project={home.projectContact} />
    </>
  );
}
