import Image from "next/image";

import { Button } from "@/components/ui/Button";
import type { EventCategory, EventCategoryImage } from "@/data/events";

export type Gallery = {
  id: string;
  images: EventCategoryImage[];
};

export type ActiveLightbox = {
  galleryId: string;
  index: number;
} | null;

export type ChapterProps = {
  category: EventCategory;
  inquiryHref: string;
  onOpen: (galleryId: string, index: number) => void;
};

export function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function getImageByRole(
  images: EventCategoryImage[],
  role: EventCategoryImage["role"],
) {
  return images.find((image) => image.role === role);
}

export function EventImageButton({
  className,
  image,
  imageClassName,
  onOpen,
  priority,
  quality = 78,
  sizes,
}: {
  className: string;
  image: EventCategoryImage;
  imageClassName?: string;
  onOpen: () => void;
  priority?: boolean;
  quality?: number;
  sizes: string;
}) {
  return (
    <button
      aria-label={`Agrandir l'image : ${image.alt}`}
      className={joinClasses(
        "group relative block overflow-hidden bg-sand text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        className,
      )}
      onClick={onOpen}
      type="button"
    >
      <Image
        alt={image.alt}
        className={joinClasses(
          "object-cover transition duration-700 group-hover:scale-[1.025]",
          imageClassName,
        )}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes}
        src={image.src}
        style={{ objectPosition: image.objectPosition ?? "50% 50%" }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-plum-900/5"
      />
    </button>
  );
}

export function ChapterCopy({
  category,
  contrast,
  inquiryHref,
}: {
  category: EventCategory;
  contrast?: "dark" | "light";
  inquiryHref: string;
}) {
  const isDark = contrast === "dark";

  return (
    <div>
      <p
        className={joinClasses(
          "type-label",
          isDark ? "text-gold-300" : "text-primary",
        )}
      >
        {category.eyebrow}
      </p>
      <h2
        className={joinClasses(
          "mt-4 font-display text-[clamp(3rem,5vw,5.9rem)] font-medium leading-[0.9]",
          isDark ? "text-ivory" : "text-secondary",
        )}
        id={`${category.id}-title`}
      >
        {category.title}
      </h2>
      <p
        className={joinClasses(
          "mt-6 max-w-[33rem] text-[1.06rem] leading-8",
          isDark ? "text-ivory/76" : "text-charcoal/76",
        )}
      >
        {category.description}
      </p>
      <Button
        className="mt-8"
        href={inquiryHref}
        rel="noreferrer"
        size="lg"
        target="_blank"
        variant={isDark ? "secondary" : "primary"}
      >
        {category.ctaLabel}
      </Button>
    </div>
  );
}

export function ChapterNumber({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      aria-hidden="true"
      className={joinClasses(
        "font-display text-[clamp(7rem,13vw,14rem)] leading-none text-gold-300/30",
        className,
      )}
    >
      {children}
    </p>
  );
}
