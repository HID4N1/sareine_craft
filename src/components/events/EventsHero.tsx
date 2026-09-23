import { Button } from "@/components/ui/Button";
import type { EventsPageHero } from "@/data/events";

import {
  EventImageButton,
  getImageByRole,
} from "./eventsShared";

export function EventsHero({
  hero,
  onOpen,
}: {
  hero: EventsPageHero;
  onOpen: (index: number) => void;
}) {
  const primaryImage = getImageByRole(hero.images, "primary") ?? hero.images[0];
  const detailImage = getImageByRole(hero.images, "detail") ?? hero.images[1];

  return (
    <section className="relative isolate overflow-hidden bg-ivory">
      <div className="grid min-h-[calc(100svh-92px)] lg:min-h-[clamp(42.5rem,78svh,47.5rem)] lg:grid-cols-[minmax(0,40%)_minmax(0,42%)_minmax(14rem,18%)]">
        <div className="relative flex min-h-[34rem] flex-col justify-between bg-plum-900 px-[var(--page-padding)] py-[clamp(3.5rem,6vw,6.25rem)] text-ivory lg:min-h-0">
          <div>
            <p className="type-label text-gold-300">{hero.eyebrow}</p>
            <h1 className="mt-6 max-w-[10.5ch] font-display text-[clamp(3.4rem,5vw,6.5rem)] font-medium leading-[0.88] text-ivory">
              {hero.title}
            </h1>
            <p className="mt-8 max-w-[34rem] text-[1.08rem] leading-8 text-ivory/76">
              {hero.description}
            </p>
            <Button className="mt-9" href="#naissance" size="lg">
              {hero.primaryCta}
            </Button>
          </div>
          <p className="mt-12 max-w-[28rem] border-t border-gold-300/35 pt-5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.24em] text-gold-300/85">
            {hero.footerLine}
          </p>
        </div>

        {primaryImage ? (
          <EventImageButton
            className="min-h-[31rem] lg:min-h-0"
            image={primaryImage}
            onOpen={() => onOpen(0)}
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        ) : null}

        <aside className="relative flex min-h-[27rem] flex-col justify-between border-l border-gold-300/25 bg-ivory px-[var(--page-padding)] py-10 lg:px-8 lg:py-12">
          <div>
            <span
              aria-hidden="true"
              className="mb-7 block h-px w-20 bg-primary"
            />
            <p className="max-w-[13rem] font-display text-[clamp(1.75rem,2.4vw,2.7rem)] leading-[0.96] text-secondary">
              {hero.statement}
            </p>
          </div>
          {detailImage ? (
            <EventImageButton
              className="mt-10 aspect-[4/5] w-full"
              image={detailImage}
              onOpen={() => onOpen(hero.images.indexOf(detailImage))}
              sizes="(min-width: 1024px) 18vw, 84vw"
            />
          ) : null}
        </aside>
      </div>
    </section>
  );
}
