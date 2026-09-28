import { CraftCreationsSection } from "@/components/craft/CraftCreationsSection/CraftCreationsSection";
import { CraftHeroSection } from "@/components/craft/CraftHeroSection/CraftHeroSection";
import { CraftStorySection } from "@/components/craft/CraftStorySection/CraftStorySection";
import { getLocalizedCraftData } from "@/data/localized";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export { metadata } from "../../(public)/craft/page";

type LocalizedCraftProps = {
  params: Promise<{
    locale: string;
  }>;
};

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
