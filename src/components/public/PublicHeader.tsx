"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { publicNavigation, siteData, socialLinks } from "@/data";
import { Container } from "@/components/ui/Container";
import { ProjectCTA } from "@/components/public/ProjectCTA";

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function isActiveLink(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function isDarkColor(color: string) {
  if (color === "transparent") {
    return false;
  }

  const rgbMatch = color.match(/rgba?\(([^)]+)\)/);
  const srgbMatch = color.match(/color\(srgb\s+([^)]+)\)/);

  const channels = rgbMatch?.[1]
    .split(",")
    .map((value) => value.trim()) ?? srgbMatch?.[1].split(/\s+/);

  if (!channels) {
    return false;
  }

  const usesUnitInterval = Boolean(srgbMatch);
  const [red, green, blue, alpha = "1"] = channels;
  const opacity = Number(alpha);

  if (opacity < 0.2) {
    return false;
  }

  const redChannel = Number(red) * (usesUnitInterval ? 255 : 1);
  const greenChannel = Number(green) * (usesUnitInterval ? 255 : 1);
  const blueChannel = Number(blue) * (usesUnitInterval ? 255 : 1);
  const luminance =
    (0.2126 * redChannel + 0.7152 * greenChannel + 0.0722 * blueChannel) /
    255;

  return luminance < 0.42;
}

function hasDarkBackground(element: Element | null) {
  let current: Element | null = element;

  while (current && current !== document.documentElement) {
    const backgroundColor = window.getComputedStyle(current).backgroundColor;

    if (isDarkColor(backgroundColor)) {
      return true;
    }

    current = current.parentElement;
  }

  return false;
}

type LanguageCode = "fr" | "en" | "ar";

const languages: Array<{ code: LanguageCode; label: string }> = [
  {
    code: "fr",
    label: "FR",
  },
  {
    code: "en",
    label: "EN",
  },
  {
    code: "ar",
    label: "AR",
  },
];

export function PublicHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderOnDark, setIsHeaderOnDark] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>("fr");
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const configuredSocialLinks = socialLinks.filter((social) => social.url);

  useEffect(() => {
    let animationFrame = 0;

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);

      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const header = headerRef.current;
        const headerRect = header?.getBoundingClientRect();

        if (!header || !headerRect) {
          setIsHeaderOnDark(false);
          return;
        }

        const sampleY = Math.min(
          window.innerHeight - 1,
          headerRect.top + headerRect.height / 2,
        );
        const samplePoints = [0.2, 0.5, 0.8].map((ratio) =>
          Math.min(window.innerWidth - 1, window.innerWidth * ratio),
        );

        const isOverDarkContent = samplePoints.some((sampleX) => {
          const sampledElements = document.elementsFromPoint(sampleX, sampleY);
          const sampledContent = sampledElements.find(
            (element) => !header.contains(element),
          );

          return hasDarkBackground(sampledContent ?? null);
        });

        setIsHeaderOnDark(isOverDarkContent);
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsMobileOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isMobileOpen) {
      return;
    }

    const triggerButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      triggerButton?.focus();
    };
  }, [isMobileOpen]);

  function closeMobileMenu() {
    setIsMobileOpen(false);
  }

  function openMobileMenu() {
    setIsMobileOpen(true);
  }

  function handleMobileBackdropClick() {
    closeMobileMenu();
  }

  return (
    <>
      <header
        ref={headerRef}
        className={joinClasses(
          "sticky top-0 z-50 bg-transparent backdrop-blur-md transition-[height,border-color,background-color] duration-200",
          isScrolled
            ? isHeaderOnDark
              ? "border-b border-gold-300/25"
              : "border-b border-sand/80"
            : "border-b border-transparent",
        )}
      >
        <Container
          className={joinClasses(
            "flex items-center justify-between transition-[min-height] duration-200",
            isScrolled ? "min-h-20" : "min-h-[92px]",
          )}
        >
          <Link
            aria-label="Sareine Craft & Events - Accueil"
            className="shrink-0"
            href="/"
          >
            <Image
              priority
              alt={siteData.name}
              className={joinClasses(
                "h-auto w-[126px] transition-[width] duration-200 md:w-[138px]",
                isScrolled ? "md:w-[124px]" : undefined,
              )}
              height={214}
              src={siteData.brand.logoHorizontal}
              width={512}
            />
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-11 lg:flex"
          >
            {publicNavigation.map((item) => {
              const isActive = isActiveLink(item.href, pathname);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={joinClasses(
                    "group relative py-2 font-sans text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? isHeaderOnDark
                        ? "text-gold-300"
                        : "text-plum-700"
                      : isHeaderOnDark
                        ? "text-ivory/90 hover:text-gold-300"
                        : "text-secondary hover:text-plum-700",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={joinClasses(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-center transition-transform duration-200",
                      isHeaderOnDark ? "bg-gold-300" : "bg-primary",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="relative hidden items-center gap-3 lg:flex">
            <div
              aria-label="Choisir la langue"
              className="flex items-center gap-1 border-l border-sand pl-4"
              role="group"
            >
              {languages.map((language) => {
                const isActiveLanguage = activeLanguage === language.code;

                return (
                  <button
                    aria-pressed={isActiveLanguage}
                    className={joinClasses(
                      "min-h-9 px-2 font-sans text-xs font-bold transition-colors duration-200",
                      isActiveLanguage
                        ? isHeaderOnDark
                          ? "text-gold-300"
                          : "text-primary"
                        : isHeaderOnDark
                          ? "text-ivory/82 hover:text-gold-300"
                          : "text-secondary hover:text-primary",
                    )}
                    key={language.code}
                    onClick={() => setActiveLanguage(language.code)}
                    type="button"
                  >
                    {language.label}
                  </button>
                );
              })}
            </div>


            <ProjectCTA
              triggerClassName="min-h-10 px-4 text-[0.8125rem]"
              size="sm"
            />
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMobileOpen}
            aria-label="Ouvrir le menu"
            className={joinClasses(
              "relative z-10 inline-flex min-h-11 items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200 lg:hidden",
              isHeaderOnDark ? "text-ivory" : "text-secondary",
            )}
            onClick={openMobileMenu}
            ref={menuButtonRef}
            type="button"
          >
            Menu
            <span aria-hidden="true" className="grid gap-1">
              <span
                className={joinClasses(
                  "block h-px w-6 transition-colors duration-200",
                  isHeaderOnDark ? "bg-gold-300" : "bg-primary",
                )}
              />
              <span
                className={joinClasses(
                  "block h-px w-6 transition-colors duration-200",
                  isHeaderOnDark ? "bg-gold-300" : "bg-primary",
                )}
              />
            </span>
          </button>
        </Container>
      </header>

      {isMobileOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-plum-900/20 px-[var(--page-padding)] pt-24 text-ivory backdrop-blur-[2px] transition duration-300 lg:hidden"
          id="mobile-navigation"
          onClick={handleMobileBackdropClick}
          role="dialog"
        >
          <div
            className="mx-auto flex max-h-[calc(100dvh-7rem)] w-full max-w-md flex-col overflow-y-auto rounded-[10px] border border-gold-300/25 bg-plum-900/90 px-6 py-6 shadow-[0_24px_70px_rgba(36,16,25,0.28)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Link
                aria-label="Sareine Craft & Events - Accueil"
                href="/"
                onClick={closeMobileMenu}
              >
                <Image
                  alt={siteData.name}
                  className="h-auto w-[138px]"
                  height={214}
                  src={siteData.brand.logoHorizontal}
                  width={512}
                />
              </Link>

              <button
                aria-label="Fermer le menu"
                className="min-h-11 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-gold-300 transition-colors duration-200 hover:text-ivory"
                onClick={closeMobileMenu}
                ref={closeButtonRef}
                type="button"
              >
                Fermer
              </button>
            </div>

            <nav aria-label="Navigation mobile" className="mt-10 grid gap-4">
              {publicNavigation.map((item) => {
                const isActive = isActiveLink(item.href, pathname);

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={joinClasses(
                      "font-display text-[clamp(1.75rem,9vw,2.25rem)] leading-none text-ivory transition-colors duration-200 hover:text-gold-300",
                      isActive ? "text-gold-300" : undefined,
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-10">
              <div
                aria-label="Choisir la langue"
                className="mb-6 flex items-center gap-2"
                role="group"
              >
                {languages.map((language) => {
                  const isActiveLanguage = activeLanguage === language.code;

                  return (
                    <button
                      aria-pressed={isActiveLanguage}
                      className={joinClasses(
                        "min-h-9 min-w-11 border border-gold-300/35 px-3 font-sans text-xs font-bold text-ivory transition-colors duration-200 hover:border-gold-300 hover:text-gold-300",
                        isActiveLanguage
                          ? "border-gold-300 bg-gold-300 text-plum-900"
                          : undefined,
                      )}
                      key={language.code}
                      onClick={() => setActiveLanguage(language.code)}
                      type="button"
                    >
                      {language.label}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-gold-300/35 pt-6">
                <p className="type-label text-gold-300">
                  Quel projet imaginez-vous ?
                </p>
                <div className="mt-4 grid gap-3">
                  <Link
                    className="group flex items-center justify-between font-sans text-base font-semibold text-ivory transition-colors duration-200 hover:text-gold-300"
                    href="/craft"
                    onClick={closeMobileMenu}
                  >
                    Votre projet Craft
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                  <Link
                    className="group flex items-center justify-between font-sans text-base font-semibold text-ivory transition-colors duration-200 hover:text-gold-300"
                    href="/events"
                    onClick={closeMobileMenu}
                  >
                    Votre événement
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </div>

              {configuredSocialLinks.length > 0 ? (
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm font-semibold text-gold-300">
                  {configuredSocialLinks.map((social) => (
                    <a
                      href={social.url ?? undefined}
                      key={social.platform}
                      onClick={closeMobileMenu}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
