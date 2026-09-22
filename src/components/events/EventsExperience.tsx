"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import type { EventCategory, EventsPageHero } from "@/data/events";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type EventsExperienceProps = {
  hero: EventsPageHero;
  categories: EventCategory[];
};

type LightboxImage = {
  src: string;
  alt: string;
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function getAllImages(hero: EventsPageHero, categories: EventCategory[]) {
  const heroImages = hero.images.map((src, index) => ({
    src,
    alt:
      index === 0
        ? hero.imageAlt
        : `${hero.imageAlt} - aperçu ${index + 1}`,
  }));

  const categoryImages = categories.flatMap((category) =>
    category.images.map((src, index) => ({
      src,
      alt:
        index === 0
          ? category.imageAlt
          : `${category.imageAlt} - image ${index + 1}`,
    })),
  );

  const uniqueImages = new Map<string, LightboxImage>();

  for (const image of [...heroImages, ...categoryImages]) {
    if (!uniqueImages.has(image.src)) {
      uniqueImages.set(image.src, image);
    }
  }

  return Array.from(uniqueImages.values());
}

function useLightbox(images: LightboxImage[]) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  function openImage(src: string) {
    const imageIndex = images.findIndex((image) => image.src === src);
    if (imageIndex >= 0) {
      setActiveIndex(imageIndex);
    }
  }

  function closeImage() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  }

  return {
    activeImage,
    activeIndex,
    closeImage,
    openImage,
    showNext,
    showPrevious,
  };
}

function ImageButton({
  alt,
  className,
  imageClassName,
  onOpen,
  priority = false,
  sizes,
  src,
}: {
  alt: string;
  className: string;
  imageClassName?: string;
  onOpen: (src: string) => void;
  priority?: boolean;
  sizes: string;
  src: string;
}) {
  return (
    <button
      aria-label={`Agrandir l’image : ${alt}`}
      className={joinClasses(
        "group relative block overflow-hidden bg-sand text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        className,
      )}
      onClick={() => onOpen(src)}
      type="button"
    >
      <Image
        alt={alt}
        className={joinClasses(
          "object-cover transition duration-700 group-hover:scale-[1.035]",
          imageClassName,
        )}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-plum-900/5"
      />
    </button>
  );
}

function EventsHero({
  hero,
  onOpen,
}: {
  hero: EventsPageHero;
  onOpen: (src: string) => void;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory pb-16 pt-14 text-charcoal sm:pt-18 lg:pb-24 lg:pt-22">
      <span
        aria-hidden="true"
        className="absolute left-[var(--page-padding)] top-10 hidden h-px w-28 bg-primary/60 md:block"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(30rem,1.08fr)] lg:gap-16">
        <div className="max-w-3xl">
          <p className="type-label text-primary">{hero.eyebrow}</p>
          <h1 className="type-display-xl mt-5 max-w-4xl text-secondary">
            {hero.title}
          </h1>
          <p className="type-body-lg mt-6 max-w-2xl text-charcoal/76">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg">
              {hero.primaryCta}
            </Button>
            <a
              className="inline-flex min-h-12 items-center font-sans text-sm font-bold text-secondary underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
              href="#naissance"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <p className="mt-9 font-[var(--font-script)] text-[2.4rem] leading-none text-primary/80 sm:text-[3rem]">
            {hero.accent}
          </p>
        </div>

        <div className="relative min-h-[31rem] sm:min-h-[38rem] lg:min-h-[44rem]">
          {hero.images[0] ? (
            <ImageButton
              alt={hero.imageAlt}
              className="absolute left-0 top-0 aspect-[4/5] w-[72%] rounded-[8px] shadow-[0_28px_70px_rgba(36,16,25,0.16)]"
              onOpen={onOpen}
              priority
              sizes="(min-width: 1024px) 38vw, 74vw"
              src={hero.images[0]}
            />
          ) : null}
          {hero.images[1] ? (
            <ImageButton
              alt={`${hero.imageAlt} - détail baby shower`}
              className="absolute right-0 top-[14%] aspect-[3/4] w-[42%] rounded-[6px] shadow-[0_22px_55px_rgba(36,16,25,0.16)]"
              onOpen={onOpen}
              sizes="(min-width: 1024px) 18vw, 42vw"
              src={hero.images[1]}
            />
          ) : null}
          {hero.images[2] ? (
            <ImageButton
              alt={`${hero.imageAlt} - célébration privée`}
              className="absolute bottom-0 right-[8%] aspect-[5/4] w-[50%] rounded-[6px] border-[0.55rem] border-ivory shadow-[0_18px_48px_rgba(36,16,25,0.18)]"
              onOpen={onOpen}
              sizes="(min-width: 1024px) 22vw, 50vw"
              src={hero.images[2]}
            />
          ) : null}
          <span
            aria-hidden="true"
            className="absolute bottom-[12%] left-[62%] hidden h-32 w-px bg-primary/70 sm:block"
          />
        </div>
      </Container>
    </section>
  );
}

function CategoryNavigation({ categories }: { categories: EventCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -52% 0px",
        threshold: [0.1, 0.24, 0.45],
      },
    );

    for (const category of categories) {
      const section = document.getElementById(category.id);
      if (section) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, [categories]);

  function handleAnchorClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    event.preventDefault();
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const offset = 126;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav
      aria-label="Univers événementiels"
      className="sticky top-20 z-40 border-y border-sand/80 bg-ivory/94 backdrop-blur-md"
      ref={navRef}
    >
      <Container>
        <div className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeId === category.id;

            return (
              <a
                aria-current={isActive ? "true" : undefined}
                className={joinClasses(
                  "shrink-0 border-b px-3 py-2 font-sans text-[0.78rem] font-bold uppercase tracking-[0.16em] transition-colors",
                  isActive
                    ? "border-primary text-secondary"
                    : "border-transparent text-charcoal/64 hover:text-secondary",
                )}
                href={`#${category.id}`}
                key={category.id}
                onClick={(event) => handleAnchorClick(event, category.id)}
              >
                {category.navigationLabel}
              </a>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}

function EmptyGraduationPlaceholder() {
  return (
    <div className="relative grid aspect-[4/5] min-h-[24rem] place-items-center overflow-hidden rounded-[8px] border border-gold-300/55 bg-plum-800 p-8 text-center text-ivory">
      <span
        aria-hidden="true"
        className="absolute inset-4 rounded-[5px] border border-gold-300/35"
      />
      <div className="relative z-10">
        <p className="type-label text-gold-300">04 · Graduation</p>
        <p className="mt-8 font-display text-[3.5rem] leading-none text-ivory">
          Bravo
        </p>
        <p className="mt-5 max-w-xs font-sans text-sm leading-7 text-ivory/76">
          De nouvelles réalisations arrivent bientôt
        </p>
      </div>
    </div>
  );
}

function CategoryGallery({
  category,
  index,
  onOpen,
}: {
  category: EventCategory;
  index: number;
  onOpen: (src: string) => void;
}) {
  const hasImages = category.images.length > 0;
  const isReverse = index % 2 === 1;
  const isPlum = category.theme === "plum";

  return (
    <Section
      aria-labelledby={`${category.id}-title`}
      className={joinClasses(
        "scroll-mt-32 overflow-hidden",
        category.theme === "soft" ? "bg-cream" : undefined,
      )}
      id={category.id}
      surface={isPlum ? "plum" : "ivory"}
    >
      <Container
        className={joinClasses(
          "grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16",
          isReverse ? "lg:[&>*:first-child]:order-2" : undefined,
        )}
      >
        <div>
          <p
            className={joinClasses(
              "type-label",
              isPlum ? "text-gold-300" : "text-primary",
            )}
          >
            {category.eyebrow}
          </p>
          <h2
            className={joinClasses(
              "type-h1 mt-4 max-w-3xl",
              isPlum ? "text-ivory" : "text-secondary",
            )}
            id={`${category.id}-title`}
          >
            {category.title}
          </h2>
          <p
            className={joinClasses(
              "type-body-lg mt-6 max-w-xl",
              isPlum ? "text-ivory/76" : "text-charcoal/76",
            )}
          >
            {category.description}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {category.details.map((detail) => (
              <li
                className={joinClasses(
                  "border-l pl-4 font-sans text-sm font-semibold",
                  isPlum
                    ? "border-gold-300/55 text-ivory/82"
                    : "border-primary/60 text-secondary",
                )}
                key={detail}
              >
                {detail}
              </li>
            ))}
          </ul>
          <Button
            className="mt-9"
            href="/contact"
            variant={isPlum ? "secondary" : "primary"}
          >
            {category.ctaLabel}
          </Button>
        </div>

        {hasImages ? (
          <div
            className={joinClasses(
              "grid gap-3 sm:grid-cols-6",
              category.images.length <= 2 ? "items-end" : undefined,
            )}
          >
            {category.images.slice(0, 6).map((src, imageIndex) => {
              const isFeatured = imageIndex === 0;
              const classes =
                category.images.length <= 2
                  ? isFeatured
                    ? "sm:col-span-4 aspect-[4/5] rounded-[8px]"
                    : "sm:col-span-2 aspect-[3/4] rounded-[6px] sm:-ml-8 sm:mb-10"
                  : isFeatured
                    ? "sm:col-span-4 sm:row-span-2 aspect-[4/5] rounded-[8px]"
                    : imageIndex === 1
                      ? "sm:col-span-2 aspect-[3/4] rounded-[6px]"
                      : imageIndex === 2
                        ? "sm:col-span-2 aspect-[4/3] rounded-[6px]"
                        : "sm:col-span-3 aspect-[4/3] rounded-[6px]";

              return (
                <ImageButton
                  alt={
                    imageIndex === 0
                      ? category.imageAlt
                      : `${category.imageAlt} - image ${imageIndex + 1}`
                  }
                  className={classes}
                  key={src}
                  onOpen={onOpen}
                  sizes={
                    isFeatured
                      ? "(min-width: 1024px) 34vw, 92vw"
                      : "(min-width: 1024px) 18vw, (min-width: 640px) 42vw, 92vw"
                  }
                  src={src}
                />
              );
            })}
          </div>
        ) : (
          <EmptyGraduationPlaceholder />
        )}
      </Container>
    </Section>
  );
}

function Lightbox({
  activeImage,
  activeIndex,
  imageCount,
  onClose,
  onNext,
  onPrevious,
}: {
  activeImage: LightboxImage | null;
  activeIndex: number | null;
  imageCount: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeImage) {
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
  }, [activeImage, onClose, onNext, onPrevious]);

  if (!activeImage) {
    return null;
  }

  return (
    <div
      aria-label="Image agrandie"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-plum-900/92 p-4 text-ivory backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="relative h-[min(82dvh,48rem)] w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          alt={activeImage.alt}
          className="object-contain"
          fill
          sizes="100vw"
          src={activeImage.src}
        />
        <button
          aria-label="Fermer l’image"
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
              className="absolute left-0 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center bg-ivory font-sans text-xl font-bold text-secondary"
              onClick={onPrevious}
              type="button"
            >
              ←
            </button>
            <button
              aria-label="Image suivante"
              className="absolute right-0 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center bg-ivory font-sans text-xl font-bold text-secondary"
              onClick={onNext}
              type="button"
            >
              →
            </button>
            <p className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 bg-plum-900/78 px-3 py-2 font-sans text-xs font-bold text-ivory">
              {(activeIndex ?? 0) + 1} / {imageCount}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export function EventsExperience({ hero, categories }: EventsExperienceProps) {
  const images = useMemo(() => getAllImages(hero, categories), [hero, categories]);
  const {
    activeImage,
    activeIndex,
    closeImage,
    openImage,
    showNext,
    showPrevious,
  } = useLightbox(images);

  return (
    <>
      <EventsHero hero={hero} onOpen={openImage} />
      <CategoryNavigation categories={categories} />
      {categories.map((category, index) => (
        <CategoryGallery
          category={category}
          index={index}
          key={category.id}
          onOpen={openImage}
        />
      ))}
      <Lightbox
        activeImage={activeImage}
        activeIndex={activeIndex}
        imageCount={images.length}
        onClose={closeImage}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </>
  );
}
