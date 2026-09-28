"use client";

import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/I18nProvider";
import type { EventsPageHero } from "@/data/events";

export function EventsHero({
  hero,
  onOpen,
}: {
  hero: EventsPageHero;
  onOpen: (index: number) => void;
}) {
  const { t } = useI18n();

  return (
    <section className="relative isolate min-h-[40rem] overflow-hidden bg-plum-900 text-ivory lg:min-h-[clamp(36rem,64svh,40rem)]">
      <button
        aria-label={t("events.zoomImage", { image: hero.image.alt })}
        className="absolute inset-0 z-0 cursor-zoom-in text-left"
        onClick={() => onOpen(0)}
        type="button"
      >
        <Image
          alt={hero.image.alt}
          className="object-cover"
          fill
          priority
          quality={86}
          sizes="100vw"
          src={hero.image.src}
          style={{ objectPosition: hero.image.objectPosition ?? "50% 50%" }}
        />
      </button>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(36,16,25,0.94)_0%,rgba(46,14,33,0.86)_42%,rgba(53,16,37,0.62)_72%,rgba(36,16,25,0.38)_100%)] sm:bg-[linear-gradient(90deg,rgba(36,16,25,0.94)_0%,rgba(46,14,33,0.82)_38%,rgba(53,16,37,0.38)_68%,rgba(36,16,25,0.08)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%] bg-[linear-gradient(0deg,rgba(36,16,25,0.9)_0%,rgba(36,16,25,0.46)_48%,rgba(36,16,25,0)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[40rem] w-full max-w-[90rem] flex-col justify-between px-[var(--page-padding)] py-10 lg:min-h-[clamp(36rem,64svh,40rem)]">
        <div className="max-w-[38rem]">
          <p className="type-label w-fit border-l-2 border-gold-300 pl-3 text-gold-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-[11ch] font-display text-[clamp(3.35rem,6vw,5.6rem)] font-medium leading-[0.92] !text-white [text-shadow:0_3px_24px_rgba(20,7,13,0.32)]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-[32rem] text-[clamp(1rem,1.2vw,1.12rem)] leading-7 text-[#f8ede5] sm:leading-8">
            {hero.description}
          </p>
          <Button
            className="mt-6 border-gold-300 bg-gold-300 text-plum-900 shadow-[0_14px_38px_rgba(20,7,13,0.3)] hover:border-ivory hover:bg-ivory hover:text-plum-700"
            href="#baby-shower"
            size="lg"
            arrow
          >
            {hero.primaryCta}
          </Button>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-gold-300/38 pt-5 lg:grid-cols-4 lg:gap-x-0">
          {hero.values.map((value) => (
            <li
              className="flex items-center gap-3 border-gold-300/24 lg:border-l lg:px-7 lg:first:border-l-0 lg:first:pl-0"
              key={value.label}
            >
              <span
                aria-hidden="true"
                className="grid size-8 shrink-0 place-items-center font-display text-[1.7rem] leading-none text-gold-300 sm:size-10 sm:text-[2rem]"
              >
                {value.icon}
              </span>
              <span className="max-w-[12rem] text-[0.78rem] font-semibold leading-[1.45] text-[#fffaf5] sm:text-[0.88rem]">
                {value.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
