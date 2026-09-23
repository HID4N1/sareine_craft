import { Container } from "@/components/ui/Container";

import {
  ChapterCopy,
  ChapterNumber,
  EventImageButton,
  type ChapterProps,
} from "./eventsShared";

export function OverlapChapter({
  category,
  inquiryHref,
  onOpen,
}: ChapterProps) {
  return (
    <section
      aria-labelledby={`${category.id}-title`}
      className="relative overflow-hidden bg-[#fff3ef] py-[clamp(4.25rem,7vw,7.5rem)] scroll-mt-36"
      id={category.id}
    >
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,58%)_minmax(21rem,34%)] lg:items-center">
        <div className="relative min-h-[34rem] lg:min-h-[45rem]">
          <ChapterNumber className="absolute -left-3 -top-8 z-10">
            {category.order}
          </ChapterNumber>
          {category.images[0] ? (
            <EventImageButton
              className="absolute inset-y-0 left-0 w-[86%] shadow-[0_30px_90px_rgba(36,16,25,0.15)]"
              image={category.images[0]}
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 50vw, 86vw"
            />
          ) : null}
          {category.images[1] ? (
            <EventImageButton
              className="absolute bottom-[7%] right-0 aspect-[4/5] w-[38%] border-[0.55rem] border-[#fff3ef] shadow-[0_22px_64px_rgba(36,16,25,0.2)]"
              image={category.images[1]}
              onOpen={() => onOpen(category.id, 1)}
              sizes="(min-width: 1024px) 20vw, 42vw"
            />
          ) : null}
        </div>
        <ChapterCopy category={category} inquiryHref={inquiryHref} />
      </Container>
    </section>
  );
}
