import { EventsExperience } from "@/components/events/EventsExperience";
import { getLocalizedEventsData } from "@/data/localized";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export { metadata } from "../../(public)/events/page";

type LocalizedEventsProps = {
  params: Promise<{
    locale: string;
  }>;
};

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
