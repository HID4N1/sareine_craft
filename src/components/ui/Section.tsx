import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionSurface = "ivory" | "white" | "cream" | "plum";

type SectionProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  surface?: SectionSurface;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const surfaceClasses: Record<SectionSurface, string> = {
  ivory: "bg-ivory text-charcoal",
  white: "bg-white text-charcoal",
  cream: "bg-cream text-charcoal",
  plum: "bg-secondary text-sand [&_h1]:text-ivory [&_h2]:text-ivory [&_h3]:text-ivory",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  surface = "ivory",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={joinClasses(
        "py-[var(--section-space)]",
        surfaceClasses[surface],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
