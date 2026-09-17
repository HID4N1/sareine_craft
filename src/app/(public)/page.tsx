import { EventCategoriesSection } from "@/components/home/EventCategoriesSection/EventCategoriesSection";
import { Hero } from "@/components/home/Hero/Hero";
import { ServicesSection } from "@/components/home/ServicesSection/ServicesSection";
import { homeEventCategories, homeHero, homeServices } from "@/data";

export default function Home() {
  return (
    <>
      <Hero hero={homeHero} />
      <ServicesSection services={homeServices} />
      <EventCategoriesSection events={homeEventCategories} />
    </>
  );
}
