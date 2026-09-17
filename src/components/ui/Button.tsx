import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "sm" | "md" | "lg";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
};

type ButtonAsButton = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    type?: never;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 border font-sans font-semibold leading-none transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-55";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-primary bg-primary text-primary-foreground hover:border-gold-700 hover:bg-gold-700 hover:text-ivory",
  secondary:
    "border-primary bg-ivory text-secondary hover:bg-gold-100 hover:text-plum-700",
  text:
    "border-transparent bg-transparent px-0 text-secondary underline-offset-4 hover:text-primary hover:underline focus-visible:outline-offset-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function isLinkButton(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const arrow = props.arrow ?? false;

  const classes = joinClasses(
    baseClasses,
    variantClasses[variant],
    variant === "text" ? "rounded-none" : "rounded-[4px]",
    variant === "text" ? undefined : sizeClasses[size],
    props.className,
  );

  const content = (
    <>
      <span>{props.children}</span>
      {arrow ? <span aria-hidden="true">-&gt;</span> : null}
    </>
  );

  if (isLinkButton(props)) {
    const {
      children: _children,
      className: _className,
      variant: _variant,
      size: _size,
      arrow: _arrow,
      href,
      ...anchorProps
    } = props;
    void [_children, _className, _variant, _size, _arrow];

    return (
      <Link className={classes} href={href} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    size: _size,
    arrow: _arrow,
    ...buttonProps
  } = props;
  void [_children, _className, _variant, _size, _arrow];

  return (
    <button className={classes} type="button" {...buttonProps}>
      {content}
    </button>
  );
}
