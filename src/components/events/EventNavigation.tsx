"use client";

import { useEffect, useState, type MouseEvent } from "react";

import { Container } from "@/components/ui/Container";
import type { EventCategory } from "@/data/events";

import { joinClasses } from "./eventsShared";

export function EventNavigation({ categories }: { categories: EventCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");

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
        rootMargin: "-34% 0px -52% 0px",
        threshold: [0.12, 0.28, 0.48],
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

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const top = target.getBoundingClientRect().top + window.scrollY - 132;

    window.scrollTo({
      top,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav
      aria-label="Index des événements"
      className="sticky top-20 z-40 border-y border-gold-300/45 bg-ivory/92 shadow-[0_16px_40px_rgba(36,16,25,0.07)] backdrop-blur-xl"
    >
      <Container>
        <div className="grid auto-cols-[max-content] grid-flow-col gap-3 overflow-x-auto py-3 [scrollbar-width:none] lg:grid-flow-row lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeId === category.id;

            return (
              <a
                aria-current={isActive ? "true" : undefined}
                className={joinClasses(
                  "group flex min-h-14 items-center gap-3 rounded-[4px] border border-transparent px-4 font-sans transition-all duration-300 lg:justify-center",
                  isActive
                    ? "border-gold-300/55 bg-white/70 text-secondary shadow-[0_10px_26px_rgba(36,16,25,0.06)]"
                    : "text-charcoal/62 hover:border-gold-300/35 hover:bg-white/40 hover:text-secondary",
                )}
                href={`#${category.id}`}
                key={category.id}
                onClick={(event) => handleClick(event, category.id)}
              >
                <span className="font-display text-[1.45rem] leading-none text-primary">
                  {category.order}
                </span>
                <span className="relative text-[0.78rem] font-bold uppercase tracking-[0.14em]">
                  {category.title}
                  <span
                    aria-hidden="true"
                    className={joinClasses(
                      "absolute -bottom-2 left-0 h-px w-full origin-left bg-primary transition-transform duration-300",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
