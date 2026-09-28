import { AboutExperience } from "@/components/about/AboutExperience/AboutExperience";
import { getLocalizedAboutData } from "@/data/localized";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export { metadata } from "../../(public)/about/page";

type LocalizedAboutProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalizedAbout({ params }: LocalizedAboutProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;

  return <AboutExperience data={getLocalizedAboutData(locale)} />;
}
