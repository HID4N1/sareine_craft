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
      className="relative overflow-hidden bg-ivory py-[clamp(4.25rem,7vw,7.5rem)] scroll-mt-36"
      id={category.id}
    >
      <Container className="grid gap-10 lg:grid-cols-[minmax(20rem,36%)_minmax(0,64%)] lg:items-center">
        <div>
          <ChapterNumber className="-ml-3 mb-[-1.25rem]">
            {category.order}
          </ChapterNumber>
          <ChapterCopy category={category} inquiryHref={inquiryHref} />
        </div>
        <div className="grid min-h-[34rem] gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,0.42fr)] lg:min-h-[45rem]">
          {category.images[0] ? (
            <EventImageButton
              className="min-h-[30rem] shadow-[0_28px_80px_rgba(36,16,25,0.16)]"
              image={category.images[0]}
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          ) : null}
          {category.images[1] ? (
            <EventImageButton
              className="min-h-[22rem] self-end"
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
