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
    <section className="scroll-rise relative overflow-hidden bg-plum-900 py-[clamp(4.5rem,8vw,8rem)] text-ivory">
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,52%)_minmax(19rem,34%)] lg:items-center lg:justify-between">
        <div className="scroll-rise-soft">
          <p className="type-label text-gold-300">{cta.eyebrow}</p>
          <h2 className="mt-5 max-w-[11ch] font-display text-[clamp(3.3rem,6vw,6.5rem)] font-medium leading-[0.9] text-ivory">
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
        <div className="scroll-rise-soft relative min-h-[31rem]">
          <span
            aria-hidden="true"
            className="absolute -left-8 top-10 hidden h-px w-24 bg-gold-300/65 lg:block"
          />
          <EventImageButton
            className="absolute inset-y-0 right-0 w-full rounded-t-[999px] border border-gold-300/55 p-2"
            image={cta.image}
            imageClassName="rounded-t-[999px]"
            onOpen={onOpen}
            sizes="(min-width: 1024px) 34vw, 92vw"
          />
        </div>
      </Container>
    </section>
  );
}
