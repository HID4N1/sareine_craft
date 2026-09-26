"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import type {
  EventCategory,
  EventsPageHero,
  EventsServiceSection,
} from "@/data/events";

import { EventChapter } from "./EventChapter";
import { EventsHero } from "./EventsHero";
import { EventsLightbox } from "./EventsLightbox";
import { ServiceProcess } from "./ServiceProcess";
import type { ActiveLightbox, Gallery } from "./eventsShared";

type EventsExperienceProps = {
  hero: EventsPageHero;
  categories: EventCategory[];
  service: EventsServiceSection;
  inquiryHref: string;
};

export function EventsExperience({
  categories,
  hero,
  inquiryHref,
  service,
}: EventsExperienceProps) {
  const [activeLightbox, setActiveLightbox] = useState<ActiveLightbox>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const galleries = useMemo<Gallery[]>(
    () => [
      {
        id: "hero",
        images: [hero.image],
      },
      ...categories.map((category) => ({
        id: category.id,
        images: category.images,
      })),
    ],
    [categories, hero.image],
  );

  const openLightbox = useCallback((galleryId: string, index: number) => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement | null;
    setActiveLightbox({ galleryId, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveLightbox(null);
    lastFocusedElementRef.current?.focus();
  }, []);

  const showPrevious = useCallback(() => {
    setActiveLightbox((current) => {
      if (!current) {
        return current;
      }

      const gallery = galleries.find((item) => item.id === current.galleryId);
      const count = gallery?.images.length ?? 0;

      if (count < 1) {
        return current;
      }

      return {
        galleryId: current.galleryId,
        index: (current.index - 1 + count) % count,
      };
    });
  }, [galleries]);

  const showNext = useCallback(() => {
    setActiveLightbox((current) => {
      if (!current) {
        return current;
      }

      const gallery = galleries.find((item) => item.id === current.galleryId);
      const count = gallery?.images.length ?? 0;

      if (count < 1) {
        return current;
      }

      return {
        galleryId: current.galleryId,
        index: (current.index + 1) % count,
      };
    });
  }, [galleries]);

  return (
    <>
      <EventsHero hero={hero} onOpen={(index) => openLightbox("hero", index)} />
      {categories.map((category) => (
        <EventChapter
          category={category}
          inquiryHref={inquiryHref}
          key={category.id}
          onOpen={openLightbox}
        />
      ))}
      <ServiceProcess service={service} />
      <EventsLightbox
        active={activeLightbox}
        galleries={galleries}
        onClose={closeLightbox}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </>
  );
}
