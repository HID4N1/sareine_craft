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
      className="scroll-rise relative overflow-hidden bg-ivory py-[clamp(4.25rem,7vw,7.5rem)] scroll-mt-36"
      id={category.id}
    >
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)] lg:items-center">
        <div className="scroll-rise-soft relative">
          <ChapterNumber className="-ml-3 mb-[-1.25rem]">
            {category.order}
          </ChapterNumber>
          <ChapterCopy category={category} inquiryHref={inquiryHref} />
        </div>
        <div className="scroll-rise-soft grid min-h-[34rem] gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(12rem,0.72fr)] lg:min-h-[44rem]">
          {category.images[0] ? (
            <EventImageButton
              className="min-h-[26rem]"
              image={category.images[0]}
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          ) : null}
          <div className="grid gap-4">
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
