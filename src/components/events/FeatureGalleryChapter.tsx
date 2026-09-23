import { Container } from "@/components/ui/Container";

import {
  ChapterCopy,
  ChapterNumber,
  EventImageButton,
  type ChapterProps,
} from "./eventsShared";

export function FeatureGalleryChapter({
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
      <Container className="grid gap-10 lg:grid-cols-[minmax(20rem,36%)_minmax(0,64%)] lg:items-center">
        <div className="scroll-rise-soft relative">
          <ChapterNumber className="-ml-3 mb-[-1.25rem]">
            {category.order}
          </ChapterNumber>
          <ChapterCopy category={category} inquiryHref={inquiryHref} />
        </div>
        <div className="scroll-rise-soft relative h-[36rem] lg:h-[47rem]">
          {category.images[0] ? (
            <EventImageButton
              className="absolute inset-y-0 right-0 w-[76%] shadow-[0_28px_86px_rgba(36,16,25,0.13)]"
              image={category.images[0]}
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 42vw, 76vw"
            />
          ) : null}
          {category.images[1] ? (
            <EventImageButton
              className="absolute left-0 top-[8%] aspect-[4/5] w-[32%] border-[0.5rem] border-ivory shadow-[0_20px_58px_rgba(36,16,25,0.18)]"
              image={category.images[1]}
              onOpen={() => onOpen(category.id, 1)}
              sizes="(min-width: 1024px) 18vw, 34vw"
            />
          ) : null}
          {category.images[2] ? (
            <EventImageButton
              className="absolute bottom-[7%] left-[9%] aspect-[3/2] w-[39%] border-[0.5rem] border-ivory shadow-[0_24px_62px_rgba(36,16,25,0.2)]"
              image={category.images[2]}
              onOpen={() => onOpen(category.id, 2)}
              sizes="(min-width: 1024px) 24vw, 44vw"
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
