"use client";

import Image from "next/image";
import { useEffect, useRef, type TouchEvent } from "react";

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
      aria-label="Image agrandie"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-plum-900/94 p-4 text-ivory backdrop-blur-sm"
      onClick={onClose}
      onTouchEnd={handleTouchEnd}
      onTouchStart={(event) => {
        touchStartXRef.current = event.changedTouches[0].clientX;
      }}
      role="dialog"
    >
      <div
        className="relative h-[min(84dvh,52rem)] w-full max-w-7xl"
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
          aria-label="Fermer l'image"
          className="absolute right-0 top-0 z-10 min-h-11 bg-ivory px-4 font-sans text-sm font-bold text-secondary"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          Fermer
        </button>
        {imageCount > 1 ? (
          <>
            <button
              aria-label="Image précédente"
              className="absolute left-0 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center bg-ivory font-sans text-xl font-bold text-secondary"
              onClick={onPrevious}
              type="button"
            >
              ←
            </button>
            <button
              aria-label="Image suivante"
              className="absolute right-0 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center bg-ivory font-sans text-xl font-bold text-secondary"
              onClick={onNext}
              type="button"
            >
              →
            </button>
            <p className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 bg-plum-900/78 px-3 py-2 font-sans text-xs font-bold text-ivory">
              {active.index + 1} / {imageCount}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
