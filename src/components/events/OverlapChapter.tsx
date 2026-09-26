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
      className="scroll-rise relative overflow-hidden bg-[#fff1ed] py-[clamp(5rem,8vw,8.5rem)] scroll-mt-36"
      id={category.id}
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1/2 w-full bg-linear-to-t from-white/38 to-transparent"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,58%)_minmax(21rem,34%)] lg:items-center">
        <div className="scroll-rise-soft relative h-[35rem] lg:h-[47rem]">
          <ChapterNumber className="absolute -left-3 -top-8 z-10">
            {category.order}
          </ChapterNumber>
          {category.images[0] ? (
            <EventImageButton
              className="absolute inset-y-0 left-0 w-[84%] rounded-t-[999px] shadow-[0_32px_96px_rgba(36,16,25,0.16)]"
              image={category.images[0]}
              imageClassName="rounded-t-[999px]"
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 50vw, 86vw"
            />
          ) : null}
          {category.images[1] ? (
            <EventImageButton
              className="absolute bottom-[7%] right-0 aspect-[4/5] w-[40%] border-[0.55rem] border-[#fff1ed] shadow-[0_24px_70px_rgba(36,16,25,0.2)]"
              image={category.images[1]}
              onOpen={() => onOpen(category.id, 1)}
              sizes="(min-width: 1024px) 20vw, 42vw"
            />
          ) : null}
        </div>
        <div className="scroll-rise-soft">
          <ChapterCopy category={category} inquiryHref={inquiryHref} />
        </div>
      </Container>
    </section>
  );
}
