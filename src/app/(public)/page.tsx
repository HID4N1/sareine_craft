import { EventCategoriesSection } from "@/components/home/EventCategoriesSection/EventCategoriesSection";
import { Hero } from "@/components/home/Hero/Hero";
import { ProcessSection } from "@/components/home/ProcessSection/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection/ServicesSection";
import { homeEventCategories, homeHero, homeProcess, homeServices } from "@/data";

export default function Home() {
  return (
    <>
      <Hero hero={homeHero} />
      <ServicesSection services={homeServices} />
      <EventCategoriesSection events={homeEventCategories} />
      <ProcessSection process={homeProcess} />
      {/* craft section */}
    </>
  );
}
