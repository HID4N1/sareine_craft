import { Container } from "@/components/ui/Container";

import {
  ChapterCopy,
  ChapterNumber,
  EventImageButton,
  type ChapterProps,
} from "./eventsShared";

export function GraduationChapter({
  category,
  inquiryHref,
  onOpen,
}: ChapterProps) {
  return (
    <section
      aria-labelledby={`${category.id}-title`}
      className="relative isolate overflow-hidden bg-plum-900 py-[clamp(4.75rem,8vw,8.25rem)] text-ivory scroll-mt-36"
      id={category.id}
    >
      <svg
        aria-hidden="true"
        className="absolute left-[8%] top-[12%] h-[70%] w-[84%] text-gold-300/35"
        fill="none"
        viewBox="0 0 900 430"
      >
        <path
          d="M28 344C198 164 342 454 510 238C638 74 743 90 874 38"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
      <Container className="relative z-10 grid gap-11 lg:grid-cols-[minmax(22rem,37%)_minmax(0,63%)] lg:items-center">
        <div>
          <ChapterNumber className="text-gold-300/45">
            {category.order}
          </ChapterNumber>
          <ChapterCopy
            category={category}
            contrast="dark"
            inquiryHref={inquiryHref}
          />
        </div>
        <div className="relative h-[39rem] lg:h-[52rem]">
          {category.images[0] ? (
            <EventImageButton
              className="absolute inset-y-0 right-[8%] w-[66%] rounded-t-[999px] shadow-[0_34px_90px_rgba(0,0,0,0.34)]"
              image={category.images[0]}
              imageClassName="rounded-t-[999px]"
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 42vw, 72vw"
            />
          ) : null}
          {category.images[1] ? (
            <EventImageButton
              className="absolute bottom-[7%] left-0 aspect-[4/5] w-[35%] border border-gold-300 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.38)]"
              image={category.images[1]}
              onOpen={() => onOpen(category.id, 1)}
              sizes="(min-width: 1024px) 23vw, 42vw"
            />
          ) : null}
          <p className="absolute right-0 top-[11%] hidden max-w-[11rem] border-l border-gold-300/45 pl-5 font-sans text-[0.68rem] font-bold uppercase leading-6 tracking-[0.22em] text-gold-300/85 lg:block">
            Aujourd&apos;hui un chapitre se termine demain tout commence
          </p>
        </div>
      </Container>
    </section>
  );
}
