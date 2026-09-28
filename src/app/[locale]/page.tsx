import { EventCategoriesSection } from "@/components/home/EventCategoriesSection/EventCategoriesSection";
import { Hero } from "@/components/home/Hero/Hero";
import { ProcessSection } from "@/components/home/ProcessSection/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection/ServicesSection";
import { CraftHighlightSection } from "@/components/home/CraftHighlightSection/CraftHighlightSection";
import { ProjectContactSection } from "@/components/home/ProjectContactSection/ProjectContactSection";
import { getLocalizedHomeData } from "@/data/localized";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

type LocalizedHomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

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
