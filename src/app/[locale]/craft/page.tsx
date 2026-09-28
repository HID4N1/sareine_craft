import type { Metadata } from "next";

import { CraftCreationsSection } from "@/components/craft/CraftCreationsSection/CraftCreationsSection";
import { CraftHeroSection } from "@/components/craft/CraftHeroSection/CraftHeroSection";
import { CraftStorySection } from "@/components/craft/CraftStorySection/CraftStorySection";
import { getLocalizedCraftData } from "@/data/localized";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";

type LocalizedCraftProps = {
  params: Promise<{
    locale: string;
  }>;
};

const craftMetadata: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Créations artisanales | Sareine Craft",
    description:
      "Découvrez les créations artisanales Sareine Craft, façonnées à la main au Maroc pour vos moments précieux.",
  },
  en: {
    title: "Handmade creations | Sareine Craft",
    description:
      "Discover Sareine Craft handmade creations, shaped by hand in Morocco for your precious moments.",
  },
  ar: {
    title: "إبداعات يدوية | Sareine Craft",
    description:
      "اكتشفوا إبداعات Sareine Craft المصنوعة يدويا في المغرب للحظاتكم الثمينة.",
  },
};

export async function generateMetadata({
  params,
}: LocalizedCraftProps): Promise<Metadata> {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const craft = getLocalizedCraftData(locale);
  const copy = craftMetadata[locale];

  return buildPageMetadata({
    title: copy.title,
    description: copy.description,
    path: "/craft",
    locale,
    image: {
      url: craft.page.hero.image.src,
      alt: craft.page.hero.image.alt,
    },
  });
}

export default async function LocalizedCraft({ params }: LocalizedCraftProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;
  const craft = getLocalizedCraftData(locale);

  return (
    <main>
      <CraftHeroSection data={craft.page.hero} />
      <CraftCreationsSection
        data={craft.page.creations}
        collections={craft.collections}
      />
      <CraftStorySection data={craft.page.story} />
    </main>
  );
}
