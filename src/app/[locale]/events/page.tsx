import type { Metadata } from "next";

import { EventsExperience } from "@/components/events/EventsExperience";
import { getLocalizedEventsData } from "@/data/localized";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";

type LocalizedEventsProps = {
  params: Promise<{
    locale: string;
  }>;
};

const eventMetadata: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Événements | Sareine Craft & Events",
    description:
      "Naissance, baby shower, anniversaire, graduation et célébrations privées imaginés sur mesure par Sareine Craft.",
  },
  en: {
    title: "Events | Sareine Craft & Events",
    description:
      "Birth celebrations, baby showers, birthdays, graduations, and private events designed by Sareine Craft.",
  },
  ar: {
    title: "الفعاليات | Sareine Craft & Events",
    description:
      "احتفالات الولادة، البيبي شاور، أعياد الميلاد، التخرج والمناسبات الخاصة بتصميم سارين كرافت.",
  },
};

export async function generateMetadata({
  params,
}: LocalizedEventsProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const events = getLocalizedEventsData(locale);
  const copy = eventMetadata[locale];

  return buildPageMetadata({
    title: copy.title,
    description: copy.description,
    path: "/events",
    locale,
    image: {
      url: events.hero.image.src,
      alt: events.hero.image.alt,
    },
  });
}

export default async function LocalizedEvents({ params }: LocalizedEventsProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const events = getLocalizedEventsData(locale);

  return (
    <EventsExperience
      categories={events.categories}
      hero={events.hero}
      inquiryHref={events.inquiryHref}
      service={events.service}
    />
  );
}
