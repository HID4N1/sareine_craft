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
        "group relative block overflow-hidden rounded-[6px] bg-sand text-left transition-[box-shadow,transform,filter] duration-500 hover:-translate-y-1 hover:saturate-[1.04] hover:shadow-[0_34px_96px_rgba(36,16,25,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
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
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,249,243,0.08)_0%,rgba(36,16,25,0.02)_48%,rgba(36,16,25,0.22)_100%)] ring-1 ring-inset ring-plum-900/10"
      />
      <span className="pointer-events-none absolute bottom-4 right-4 translate-y-2 rounded-[3px] border border-gold-300/45 bg-plum-900/62 px-3 py-2 text-[0.64rem] font-bold uppercase leading-none tracking-[0.16em] text-ivory opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        Voir
      </span>
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
          "mt-5 max-w-[10ch] font-display text-[clamp(3rem,5vw,5.9rem)] font-medium leading-[0.9]",
          isDark ? "text-ivory" : "text-secondary",
        )}
        id={`${category.id}-title`}
      >
        {category.title}
      </h2>
      <p
        className={joinClasses(
          "mt-7 max-w-[35rem] text-[1.06rem] leading-8",
          isDark ? "text-ivory/76" : "text-charcoal/76",
        )}
      >
        {category.description}
      </p>
      <div
        className={joinClasses(
          "mt-7 flex max-w-[24rem] items-center gap-4 border-y py-4",
          isDark ? "border-gold-300/24" : "border-gold-300/45",
        )}
      >
        <span
          className={joinClasses(
            "font-display text-[2rem] leading-none",
            isDark ? "text-gold-300" : "text-primary",
          )}
        >
          {category.order}
        </span>
        <span
          className={joinClasses(
            "text-[0.72rem] font-bold uppercase leading-5 tracking-[0.18em]",
            isDark ? "text-ivory/68" : "text-charcoal/58",
          )}
        >
          Scénographie, détails personnalisés et coordination
        </span>
      </div>
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
