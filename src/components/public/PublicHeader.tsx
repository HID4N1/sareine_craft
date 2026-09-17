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

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="#25D366"
      viewBox="0 0 24 24"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.26C2.15 6.45 6.59 2 12.05 2a9.83 9.83 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89m8.42-18.31A11.82 11.82 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L.07 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.9a11.82 11.82 0 0 0-3.48-8.42" />
    </svg>
  );
}

function getWhatsAppHref(value: string | null) {
  if (!value) {
    return null;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const digits = value.replace(/\D/g, "");

  return digits ? `https://wa.me/${digits}` : null;
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>("fr");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const configuredSocialLinks = socialLinks.filter((social) => social.url);
  const whatsappHref = getWhatsAppHref(siteData.contact.whatsapp);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
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
        className={joinClasses(
          "sticky top-0 z-50 bg-transparent backdrop-blur-md transition-[height,border-color,background-color] duration-200",
          isScrolled
            ? "border-b border-sand/80"
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
                    "group relative py-2 font-sans text-sm font-semibold text-secondary transition-colors duration-200 hover:text-plum-700",
                    isActive ? "text-plum-700" : undefined,
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={joinClasses(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-center bg-primary transition-transform duration-200",
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
                      "min-h-9 px-2 font-sans text-xs font-bold text-secondary transition-colors duration-200 hover:text-primary",
                      isActiveLanguage ? "text-primary" : undefined,
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

            {whatsappHref ? (
              <a
                aria-label="Contacter Sareine sur WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-full transition-[background-color,opacity,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#25D366]/10 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon />
              </a>
            ) : (
              <button
                aria-label="WhatsApp non configuré"
                className="inline-flex size-10 items-center justify-center opacity-45 disabled:cursor-not-allowed"
                disabled
                type="button"
              >
                <WhatsAppIcon />
              </button>
            )}

            <ProjectCTA
              triggerClassName="min-h-10 px-4 text-[0.8125rem]"
              size="sm"
            />
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMobileOpen}
            aria-label="Ouvrir le menu"
            className="relative z-10 inline-flex min-h-11 items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-secondary lg:hidden"
            onClick={openMobileMenu}
            ref={menuButtonRef}
            type="button"
          >
            Menu
            <span aria-hidden="true" className="grid gap-1">
              <span className="block h-px w-6 bg-primary" />
              <span className="block h-px w-6 bg-primary" />
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
