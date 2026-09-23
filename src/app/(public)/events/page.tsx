import type { Metadata } from "next";

import { EventsExperience } from "@/components/events/EventsExperience";
import {
  eventInquiryHref,
  eventPageCategories,
  eventsFinalCta,
  eventsPageHero,
  eventsServiceSection,
} from "@/data/events";

export const metadata: Metadata = {
  title: "Événements | Sareine Craft & Events",
  description:
    "Naissance, baby shower, anniversaire, graduation et célébrations privées imaginés sur mesure par Sareine Craft.",
};

export default function EventsPage() {
  return (
    <EventsExperience
      categories={eventPageCategories}
      finalCta={eventsFinalCta}
      hero={eventsPageHero}
      inquiryHref={eventInquiryHref}
      service={eventsServiceSection}
    />
  );
}
