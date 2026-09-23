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
      className="sticky top-20 z-40 border-y border-gold-300/50 bg-ivory/96 shadow-[0_10px_30px_rgba(36,16,25,0.06)] backdrop-blur-md"
    >
      <Container>
        <div className="grid auto-cols-[max-content] grid-flow-col gap-8 overflow-x-auto py-4 [scrollbar-width:none] lg:grid-flow-row lg:grid-cols-5 lg:gap-0 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeId === category.id;

            return (
              <a
                aria-current={isActive ? "true" : undefined}
                className={joinClasses(
                  "group flex min-h-12 items-center gap-3 border-r border-gold-300/30 pr-8 font-sans transition-colors last:border-r-0 lg:justify-center lg:px-5",
                  isActive ? "text-secondary" : "text-charcoal/72",
                )}
                href={`#${category.id}`}
                key={category.id}
                onClick={(event) => handleClick(event, category.id)}
              >
                <span className="font-display text-[1.65rem] leading-none text-primary">
                  {category.order}
                </span>
                <span className="relative text-[0.92rem] font-bold uppercase tracking-[0.08em]">
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
