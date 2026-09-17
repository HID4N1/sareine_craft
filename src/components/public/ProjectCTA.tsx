"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { Button, type ButtonProps } from "@/components/ui/Button";

type ProjectCTAProps = {
  className?: string;
  triggerClassName?: string;
  panelClassName?: string;
  label?: string;
  align?: "left" | "right";
  size?: Extract<ButtonProps["size"], "sm" | "md" | "lg">;
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function ProjectCTA({
  className,
  triggerClassName,
  panelClassName,
  label = "Contacter nous",
  align = "right",
  size = "sm",
}: ProjectCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (ctaRef.current && !ctaRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={joinClasses("relative", className)} ref={ctaRef}>
      <Button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className={triggerClassName}
        onClick={() => setIsOpen((current) => !current)}
        size={size}
        type="button"
      >
        {label}
      </Button>

      <div
        className={joinClasses(
          "absolute top-[calc(100%+0.875rem)] z-20 w-72 rounded-[6px] border border-sand bg-surface p-5 text-secondary shadow-[0_18px_50px_rgba(36,16,25,0.12)] transition duration-200",
          align === "right" ? "right-0" : "left-0",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
          panelClassName,
        )}
        id={panelId}
      >
        <p className="font-display text-2xl leading-tight text-secondary">
          Quel projet imaginez-vous ?
        </p>
        <div className="mt-4 grid gap-2">
          <Link
            className="group flex items-center justify-between border-t border-sand/80 py-3 font-sans text-sm font-semibold transition-colors duration-200 hover:text-primary focus-visible:text-primary"
            href="/craft"
            onClick={() => setIsOpen(false)}
          >
            Une création Craft
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              -&gt;
            </span>
          </Link>
          <Link
            className="group flex items-center justify-between border-t border-sand/80 py-3 font-sans text-sm font-semibold transition-colors duration-200 hover:text-primary focus-visible:text-primary"
            href="/events"
            onClick={() => setIsOpen(false)}
          >
            Un événement
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              -&gt;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
