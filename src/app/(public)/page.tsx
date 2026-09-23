import { EventCategoriesSection } from "@/components/home/EventCategoriesSection/EventCategoriesSection";
import { Hero } from "@/components/home/Hero/Hero";
import { ProcessSection } from "@/components/home/ProcessSection/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection/ServicesSection";
import {
  homeCraftHighlight,
  homeEventCategories,
  homeHero,
  homeProcess,
  homeProjectContact,
  homeRealisations,
  homeServices,
} from "@/data";
import { CraftHighlightSection } from "@/components/home/CraftHighlightSection/CraftHighlightSection";
import { RealisationsSection } from "@/components/home/RealisationsSection/RealisationsSection";
import { ProjectContactSection } from "@/components/home/ProjectContactSection/ProjectContactSection";

export default function Home() {
  return (
    <>
      <Hero hero={homeHero} />
      <ServicesSection services={homeServices} />
      <EventCategoriesSection events={homeEventCategories} />
      <ProcessSection process={homeProcess} />
      <CraftHighlightSection craft={homeCraftHighlight} />
      {/* <RealisationsSection realisations={homeRealisations} /> */}
      <ProjectContactSection project={homeProjectContact} />
    </>
  );
}
