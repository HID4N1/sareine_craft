import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionHeaderProps<T extends ElementType> = {
  as?: T;
  eyebrow?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "title">;

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionHeader<T extends ElementType = "header">({
  as,
  eyebrow,
  title,
  children,
  className,
  align = "left",
  ...props
}: SectionHeaderProps<T>) {
  const Component = as ?? "header";

  return (
    <Component
      className={joinClasses(
        "max-w-[var(--container-readable)]",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="type-label mb-4 text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="type-h2 text-secondary">{title}</h2>
      {children ? (
        <div className="type-body-lg mt-5 text-foreground">{children}</div>
      ) : null}
    </Component>
  );
}
