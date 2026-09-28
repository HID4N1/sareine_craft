import type { Metadata } from "next";

import { InfoPage } from "@/components/public/InfoPage";
import { getInfoPage, type InfoPageKey } from "@/data/info-pages";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";

type LocalizedInfoProps = {
  params: Promise<{
    locale: string;
  }>;
};

const page: InfoPageKey = "terms";

export async function generateMetadata({
  params,
}: LocalizedInfoProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const data = getInfoPage(locale, page);

  return buildPageMetadata({
    title: `${data.title} | Sareine Craft & Events`,
    description: data.description,
    path: "/terms",
    locale,
  });
}

export default async function LocalizedTerms({ params }: LocalizedInfoProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;

  return <InfoPage {...getInfoPage(locale, page)} />;
}
