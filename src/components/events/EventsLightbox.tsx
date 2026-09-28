"use client";

import Image from "next/image";
import { useEffect, useRef, type TouchEvent } from "react";

import { useI18n } from "@/i18n/I18nProvider";
import type { ActiveLightbox, Gallery } from "./eventsShared";

export function EventsLightbox({
  active,
  galleries,
  onClose,
  onNext,
  onPrevious,
}: {
  active: ActiveLightbox;
  galleries: Gallery[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const { t } = useI18n();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const gallery = active
    ? galleries.find((item) => item.id === active.galleryId)
    : undefined;
  const image = gallery && active ? gallery.images[active.index] : undefined;
  const imageCount = gallery?.images.length ?? 0;

  useEffect(() => {
    if (!image) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose, onNext, onPrevious]);

  if (!image || !active) {
    return null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const startX = touchStartXRef.current;

    if (startX === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - startX;
    touchStartXRef.current = null;

    if (Math.abs(deltaX) < 48) {
      return;
    }

    if (deltaX > 0) {
      onPrevious();
    } else {
      onNext();
    }
  }

  return (
    <div
      aria-label={t("events.enlargedImage")}
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-plum-900/94 p-4 text-ivory backdrop-blur-md"
      onClick={onClose}
      onTouchEnd={handleTouchEnd}
      onTouchStart={(event) => {
        touchStartXRef.current = event.changedTouches[0].clientX;
      }}
      role="dialog"
    >
      <div
        className="relative h-[min(84dvh,52rem)] w-full max-w-7xl rounded-[6px] border border-gold-300/24 bg-plum-900/35 shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          alt={image.alt}
          className="object-contain"
          fill
          quality={88}
          sizes="100vw"
          src={image.src}
        />
        <button
          aria-label={t("events.closeImage")}
          className="absolute right-3 top-3 z-10 min-h-11 rounded-[4px] border border-gold-300/35 bg-ivory/92 px-4 font-sans text-sm font-bold text-secondary shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:bg-gold-100"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          {t("events.close")}
        </button>
        {imageCount > 1 ? (
          <>
            <button
              aria-label={t("events.previousImage")}
              className="absolute left-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-gold-300/35 bg-ivory/92 font-sans text-xl font-bold text-secondary shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:bg-gold-100"
              onClick={onPrevious}
              type="button"
            >
              ←
            </button>
            <button
              aria-label={t("events.nextImage")}
              className="absolute right-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-gold-300/35 bg-ivory/92 font-sans text-xl font-bold text-secondary shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:bg-gold-100"
              onClick={onNext}
              type="button"
            >
              →
            </button>
            <p className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-gold-300/24 bg-plum-900/78 px-4 py-2 font-sans text-xs font-bold text-ivory backdrop-blur-md">
              {active.index + 1} / {imageCount}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
