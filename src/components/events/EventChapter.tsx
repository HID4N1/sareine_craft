import { Button } from "@/components/ui/Button";
import type { EventCategoryImage } from "@/data/events";

import {
  EventImageButton,
  getImageByRole,
  joinClasses,
  type ChapterProps,
} from "./eventsShared";

function SectionCopy({
  category,
  inquiryHref,
}: Pick<ChapterProps, "category" | "inquiryHref">) {
  return (
    <div className="relative max-w-[31rem]">
      <p
        aria-hidden="true"
        className="absolute -left-2 -top-14 font-display text-[clamp(5rem,9vw,9rem)] leading-none text-gold-300/18"
      >
        {category.order}
      </p>
      <p className="type-label relative text-primary">{category.eyebrow}</p>
      <h2
        className="relative mt-5 font-display text-[clamp(3rem,5vw,5.65rem)] font-medium leading-[0.93] text-secondary"
        id={`${category.id}-title`}
      >
        {category.title}
      </h2>
      <div className="mt-7 flex items-center gap-3">
        <span className="h-px w-16 bg-primary/55" />
        <span aria-hidden="true" className="font-display text-2xl text-primary">
          ✽
        </span>
        <span className="h-px w-16 bg-primary/55" />
      </div>
      <p className="mt-7 text-[1.06rem] leading-8 text-charcoal/76">
        {category.description}
      </p>
      <p className="mt-5 max-w-[22rem] border-l border-primary/35 pl-4 text-[0.78rem] font-bold uppercase leading-5 tracking-[0.16em] text-charcoal/52">
        Scénographie sur mesure, détails choisis et coordination attentive
      </p>
      <Button
        className="mt-8 shadow-[0_14px_36px_rgba(184,137,74,0.18)] hover:translate-x-0.5"
        href={inquiryHref}
        rel="noreferrer"
        size="lg"
        target="_blank"
        arrow
      >
        {category.ctaLabel}
      </Button>
    </div>
  );
}

function ImageStack({
  categoryId,
  contentFirst,
  images,
  onOpen,
}: {
  categoryId: string;
  contentFirst: boolean;
  images: EventCategoryImage[];
  onOpen: ChapterProps["onOpen"];
}) {
  const primary = getImageByRole(images, "primary") ?? images[0];
  const supporting = images
    .filter((image) => image !== primary)
    .slice(0, 2);

  return (
    <div className="relative pb-0 md:pb-24">
      <div
        aria-hidden="true"
        className={joinClasses(
          "absolute -inset-5 hidden border border-gold-300/28 md:block",
          contentFirst
            ? "translate-x-5 translate-y-5"
            : "-translate-x-5 translate-y-5",
        )}
      />
      <div
        aria-hidden="true"
        className={joinClasses(
          "absolute top-10 hidden h-[78%] w-[34%] bg-plum-500/8 md:block",
          contentFirst ? "-right-6" : "-left-6",
        )}
      />
      {primary ? (
        <EventImageButton
          className="aspect-[1.12/1] w-full shadow-[0_28px_90px_rgba(36,16,25,0.16)] md:aspect-[1.32/1]"
          image={primary}
          onOpen={() => onOpen(categoryId, images.indexOf(primary))}
          quality={84}
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
      ) : null}
      {supporting.length > 0 ? (
        <div
          className={joinClasses(
            "mt-4 grid grid-cols-2 gap-3 md:absolute md:-bottom-1 md:mt-0 md:gap-4",
            contentFirst ? "md:left-[8%] md:right-[7%]" : "md:left-[7%] md:right-[8%]",
          )}
        >
          {supporting.map((image) => (
            <EventImageButton
              className="aspect-[1.42/1] border border-ivory/75 shadow-[0_18px_54px_rgba(36,16,25,0.14)]"
              image={image}
              key={image.src}
              onOpen={() => onOpen(categoryId, images.indexOf(image))}
              quality={78}
              sizes="(min-width: 1024px) 19vw, 45vw"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function EventChapter({
  category,
  inquiryHref,
  onOpen,
}: ChapterProps) {
  const contentFirst = category.layout === "content-left";
  const sectionTone =
    category.theme === "blush"
      ? "bg-[#fff1ee]"
      : contentFirst
        ? "bg-[#fff9f3]"
        : "bg-[#f8efe6]";

  return (
    <section
      aria-labelledby={`${category.id}-title`}
      className={joinClasses(
        "scroll-rise relative overflow-hidden py-[clamp(6rem,9vw,9rem)]",
        sectionTone,
      )}
      id={category.id}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-[var(--page-padding)] top-0 h-px bg-linear-to-r from-transparent via-gold-300/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className={joinClasses(
          "absolute top-0 hidden h-full w-[22%] bg-[linear-gradient(180deg,rgba(223,196,156,0.12)_0%,rgba(223,196,156,0)_70%)] lg:block",
          contentFirst ? "right-0" : "left-0",
        )}
      />
      <div
        className={joinClasses(
          "mx-auto grid w-full max-w-[90rem] items-center gap-[clamp(3rem,6vw,6rem)] px-[var(--page-padding)] lg:grid-cols-[minmax(20rem,0.78fr)_minmax(0,1.22fr)]",
          contentFirst ? "" : "lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]",
        )}
      >
        <div
          className={joinClasses(
            "scroll-rise-soft",
            contentFirst ? "lg:order-1" : "lg:order-2",
          )}
        >
          <SectionCopy category={category} inquiryHref={inquiryHref} />
        </div>
        <div
          className={joinClasses(
            "scroll-rise-soft",
            contentFirst ? "lg:order-2" : "lg:order-1",
          )}
        >
          <ImageStack
            categoryId={category.id}
            contentFirst={contentFirst}
            images={category.images}
            onOpen={onOpen}
          />
        </div>
      </div>
    </section>
  );
}
