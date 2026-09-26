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
      className="scroll-rise relative isolate overflow-hidden bg-plum-900 py-[clamp(5.25rem,8.5vw,9rem)] text-ivory scroll-mt-36"
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
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(223,196,156,0.18),transparent_28%),linear-gradient(90deg,rgba(255,249,243,0.04)_1px,transparent_1px)] bg-[size:auto,5.5rem_5.5rem]"
      />
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[minmax(22rem,36%)_minmax(0,64%)] lg:items-center">
        <div className="scroll-rise-soft">
          <ChapterNumber className="text-gold-300/45">
            {category.order}
          </ChapterNumber>
          <ChapterCopy
            category={category}
            contrast="dark"
            inquiryHref={inquiryHref}
          />
        </div>
        <div className="scroll-rise-soft relative h-[39rem] lg:h-[52rem]">
          {category.images[0] ? (
            <EventImageButton
              className="absolute inset-y-0 right-[8%] w-[66%] rounded-t-[999px] border border-gold-300/35 shadow-[0_34px_96px_rgba(0,0,0,0.36)]"
              image={category.images[0]}
              imageClassName="rounded-t-[999px]"
              onOpen={() => onOpen(category.id, 0)}
              sizes="(min-width: 1024px) 42vw, 72vw"
            />
          ) : null}
          {category.images[1] ? (
            <EventImageButton
              className="absolute bottom-[7%] left-0 aspect-[4/5] w-[35%] border-[0.45rem] border-plum-900 shadow-[0_28px_80px_rgba(0,0,0,0.38)] ring-1 ring-gold-300/45"
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
