import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CraftCollectionPage } from "@/components/craft/CraftCollectionPage/CraftCollectionPage";
import { craftCollections } from "@/data";
import { getLocalizedCraftCollection } from "@/data/localized";
import { defaultLocale, isLocale, supportedLocales, type Locale } from "@/i18n/config";

export const dynamicParams = false;

type LocalizedCraftCollectionRouteProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    craftCollections.map((collection) => ({
      locale,
      slug: collection.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: LocalizedCraftCollectionRouteProps): Promise<Metadata> {
  const { locale: routeLocale, slug } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const collection = getLocalizedCraftCollection(slug, locale);

  if (!collection) {
    return {
      title: "Collection introuvable | Sareine Craft",
    };
  }

  return {
    title: `${collection.name} | Sareine Craft`,
    description: collection.shortDescription,
  };
}

export default async function LocalizedCraftCollectionRoute({
  params,
}: LocalizedCraftCollectionRouteProps) {
  const { locale: routeLocale, slug } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const collection = getLocalizedCraftCollection(slug, locale);

  if (!collection) {
    notFound();
  }

  return <CraftCollectionPage collection={collection} />;
}
