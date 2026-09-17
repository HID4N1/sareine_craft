import { Hero } from "@/components/home/Hero/Hero";
import { ServicesSection } from "@/components/home/ServicesSection/ServicesSection";
import { homeHero, homeServices } from "@/data";

export default function Home() {
  return (
    <>
      <Hero hero={homeHero} />
      <ServicesSection services={homeServices} />
    </>
  );
}
