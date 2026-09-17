import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerWidth = "default" | "readable" | "wide";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  width?: ContainerWidth;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const widthClasses: Record<ContainerWidth, string> = {
  default: "max-w-[var(--container-max)]",
  readable: "max-w-[var(--container-readable)]",
  wide: "max-w-none",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  width = "default",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={joinClasses(
        "mx-auto w-full px-[var(--page-padding)]",
        widthClasses[width],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
