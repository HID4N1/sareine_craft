import type { Metadata } from "next";

import { EventsExperience } from "@/components/events/EventsExperience";
import {
  eventInquiryHref,
  eventPageCategories,
  eventsPageHero,
  eventsServiceSection,
} from "@/data/events";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Événements | Sareine Craft & Events",
  description:
    "Naissance, baby shower, anniversaire, graduation et célébrations privées imaginés sur mesure par Sareine Craft.",
  path: "/events",
  image: {
    url: eventsPageHero.image.src,
    alt: eventsPageHero.image.alt,
  },
  keywords: [
    "organisation événements Casablanca",
    "baby shower Casablanca",
    "anniversaire Casablanca",
    "graduation Casablanca",
    "décoration événementielle",
  ],
});

export default function EventsPage() {
  return (
    <EventsExperience
      categories={eventPageCategories}
      hero={eventsPageHero}
      inquiryHref={eventInquiryHref}
      service={eventsServiceSection}
    />
  );
}
