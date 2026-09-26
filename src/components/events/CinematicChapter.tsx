import { Container } from "@/components/ui/Container";

import {
  ChapterCopy,
  ChapterNumber,
  EventImageButton,
  type ChapterProps,
} from "./eventsShared";

export function CinematicChapter({
  category,
  inquiryHref,
  onOpen,
}: ChapterProps) {
  return (
    <section
      aria-labelledby={`${category.id}-title`}
      className="scroll-rise relative overflow-hidden bg-ivory py-[clamp(5rem,8vw,8.5rem)] scroll-mt-36"
      id={category.id}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#fbf4ec] to-transparent"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[minmax(20rem,35%)_minmax(0,65%)] lg:items-center">
        <div className="scroll-rise-soft">
          <ChapterNumber className="-ml-3 mb-[-1.25rem]">
            {category.order}
          </ChapterNumber>
          <ChapterCopy category={category} inquiryHref={inquiryHref} />
        </div>
        <div className="scroll-rise-soft grid min-h-[35rem] gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,0.44fr)] lg:min-h-[46rem]">
          {category.images[0] ? (
            <EventImageButton
              className="min-h-[30rem] shadow-[0_30px_90px_rgba(36,16,25,0.16)]"
              image={category.images[0]}
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          ) : null}
          {category.images[1] ? (
            <EventImageButton
              className="min-h-[22rem] self-end border-[0.45rem] border-ivory shadow-[0_22px_64px_rgba(36,16,25,0.16)]"
              image={category.images[1]}
              onOpen={() => onOpen(category.id, 1)}
              sizes="(min-width: 1024px) 20vw, 50vw"
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
