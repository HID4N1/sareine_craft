import { InfoPage } from "@/components/public/InfoPage";
import { getInfoPage, type InfoPageKey } from "@/data/info-pages";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

type LocalizedInfoProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalizedPrivacy({ params }: LocalizedInfoProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const page: InfoPageKey = "privacy";

  return <InfoPage {...getInfoPage(locale, page)} />;
}
