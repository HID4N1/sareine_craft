import type { Metadata } from "next";

import { EventsExperience } from "@/components/events/EventsExperience";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  eventPageCategories,
  eventsFinalCta,
  eventsPageHero,
  eventsServiceSection,
  siteData,
} from "@/data";

export const metadata: Metadata = {
  title: "Événements sur mesure | Sareine Craft",
  description:
    "Naissances, baby showers, anniversaires, graduations et célébrations privées imaginés et organisés par Sareine Craft.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Événements sur mesure | Sareine Craft",
    description:
      "Naissances, baby showers, anniversaires, graduations et célébrations privées imaginés et organisés par Sareine Craft.",
    type: "website",
    url: "/events",
  },
};

function getWhatsAppHref(value: string | null) {
  if (!value) {
    return null;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const digits = value.replace(/\D/g, "");

  return digits ? `https://wa.me/${digits}` : null;
}

function CompleteServiceSection() {
  return (
    <Section surface="white" aria-labelledby="events-service-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="type-label text-primary">
              {eventsServiceSection.eyebrow}
            </p>
            <h2 className="type-h1 mt-4 max-w-2xl" id="events-service-title">
              {eventsServiceSection.title}
            </h2>
            <p className="type-body-lg mt-6 max-w-xl text-charcoal/76">
              {eventsServiceSection.description}
            </p>
          </div>

          <div>
            <ol className="grid gap-0 border-t border-sand">
              {eventsServiceSection.steps.map((step) => (
                <li
                  className="grid gap-4 border-b border-sand py-6 sm:grid-cols-[4rem_minmax(0,1fr)]"
                  key={step.number}
                >
                  <span className="font-display text-4xl leading-none text-primary">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-bold text-secondary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/70">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-l border-primary/60 pl-5">
              {eventsServiceSection.capabilities.map((capability) => (
                <span
                  className="font-sans text-sm font-semibold text-secondary"
                  key={capability}
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FinalCtaSection() {
  const whatsappHref = getWhatsAppHref(siteData.contact.whatsapp);

  return (
    <Section
      aria-labelledby="events-final-cta-title"
      className="relative overflow-hidden"
      surface="plum"
    >
      <Container className="relative z-10 text-center">
        <p className="type-label text-gold-300">{eventsFinalCta.eyebrow}</p>
        <h2
          className="type-h1 mx-auto mt-4 max-w-3xl text-ivory"
          id="events-final-cta-title"
        >
          {eventsFinalCta.title}
        </h2>
        <p className="type-body-lg mx-auto mt-6 max-w-2xl text-ivory/76">
          {eventsFinalCta.description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            {eventsFinalCta.primaryCta}
          </Button>
          {whatsappHref ? (
            <Button
              href={whatsappHref}
              rel="noreferrer"
              size="lg"
              target="_blank"
              variant="secondary"
            >
              {eventsFinalCta.secondaryCta}
            </Button>
          ) : null}
        </div>
      </Container>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-10 h-px w-[min(34rem,74vw)] -translate-x-1/2 bg-gold-300/40"
      />
    </Section>
  );
}

export default function EventsPage() {
  return (
    <>
      <EventsExperience hero={eventsPageHero} categories={eventPageCategories} />
      <CompleteServiceSection />
      <FinalCtaSection />
    </>
  );
}
