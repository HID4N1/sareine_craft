import { Container } from "@/components/ui/Container";

import {
  ChapterCopy,
  ChapterNumber,
  EventImageButton,
  type ChapterProps,
} from "./eventsShared";

export function EditorialGridChapter({
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
        className="absolute inset-x-[var(--page-padding)] top-0 h-px bg-linear-to-r from-transparent via-gold-300/70 to-transparent"
      />
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,36%)_minmax(0,64%)] lg:items-center">
        <div className="scroll-rise-soft relative">
          <ChapterNumber className="-ml-3 mb-[-1.25rem]">
            {category.order}
          </ChapterNumber>
          <ChapterCopy category={category} inquiryHref={inquiryHref} />
        </div>
        <div className="scroll-rise-soft grid min-h-[34rem] gap-5 sm:grid-cols-[minmax(0,1.35fr)_minmax(12rem,0.75fr)] lg:min-h-[46rem]">
          {category.images[0] ? (
            <EventImageButton
              className="min-h-[27rem] shadow-[0_30px_86px_rgba(36,16,25,0.12)]"
              image={category.images[0]}
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          ) : null}
          <div className="grid gap-5 sm:py-10">
            {category.images.slice(1, 3).map((image, index) => {
              const actualIndex = index + 1;

              return (
                <EventImageButton
                  className="min-h-[16rem]"
                  image={image}
                  key={image.src}
                  onOpen={() => onOpen(category.id, actualIndex)}
                  sizes="(min-width: 1024px) 20vw, 50vw"
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
