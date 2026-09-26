import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { EventsFinalCta as EventsFinalCtaData } from "@/data/events";

import { EventImageButton } from "./eventsShared";

export function EventsFinalCta({
  cta,
  inquiryHref,
  onOpen,
}: {
  cta: EventsFinalCtaData;
  inquiryHref: string;
  onOpen: () => void;
}) {
  return (
    <section className="scroll-rise relative isolate overflow-hidden bg-plum-900 py-[clamp(5rem,8.5vw,9rem)] text-ivory">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(223,196,156,0.17),transparent_30%),linear-gradient(180deg,rgba(255,249,243,0.05),transparent_38%)]"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,52%)_minmax(19rem,34%)] lg:items-center lg:justify-between">
        <div className="scroll-rise-soft">
          <p className="type-label text-gold-300">{cta.eyebrow}</p>
          <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(3.3rem,6vw,6.5rem)] font-medium leading-[0.9] text-ivory">
            {cta.title}
          </h2>
          <p className="mt-7 max-w-[34rem] text-[1.08rem] leading-8 text-ivory/76">
            {cta.description}
          </p>
          <Button
            className="mt-9"
            href={inquiryHref}
            rel="noreferrer"
            size="lg"
            target="_blank"
          >
            {cta.primaryCta}
          </Button>
        </div>
        <div className="scroll-rise-soft relative min-h-[32rem]">
          <span
            aria-hidden="true"
            className="absolute -left-10 top-12 hidden h-px w-28 bg-gold-300/65 lg:block"
          />
          <EventImageButton
            className="absolute inset-y-0 right-0 w-full rounded-t-[999px] border border-gold-300/55 shadow-[0_34px_96px_rgba(0,0,0,0.28)]"
            image={cta.image}
            imageClassName="rounded-t-[999px]"
            onOpen={onOpen}
            sizes="(min-width: 1024px) 34vw, 92vw"
          />
          <p className="absolute -bottom-5 left-6 border border-gold-300/45 bg-plum-900/80 px-5 py-4 text-[0.68rem] font-bold uppercase leading-5 tracking-[0.2em] text-gold-300 backdrop-blur-md">
            Sur mesure
          </p>
        </div>
      </Container>
    </section>
  );
}
