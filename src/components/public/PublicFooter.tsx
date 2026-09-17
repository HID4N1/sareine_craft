import Image from "next/image";
import Link from "next/link";

import {
  footerNavigation,
  legalNavigation,
  siteData,
  socialLinks,
} from "@/data";
import { Container } from "@/components/ui/Container";
import { ProjectCTA } from "@/components/public/ProjectCTA";

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

function getAddressDisplay() {
  const addressParts = [
    siteData.address.street,
    siteData.address.city,
    siteData.address.region,
    siteData.address.country,
  ].filter(Boolean);

  return addressParts.length > 0 ? addressParts.join(", ") : null;
}

function ContactIcon({ type }: { type: "message" | "phone" | "location" }) {
  const paths = {
    message:
      "M5 6.8A4.8 4.8 0 0 1 9.8 2h4.4A4.8 4.8 0 0 1 19 6.8v2.9a4.8 4.8 0 0 1-4.8 4.8H11l-4.1 3.1c-.7.5-1.7 0-1.7-.9v-3.1A4.8 4.8 0 0 1 5 9.7V6.8Z",
    phone:
      "M6.5 3.5 9 3l1.5 4.2-1.7 1.1a10.8 10.8 0 0 0 4.9 4.9l1.1-1.7L19 13l-.5 2.5c-.2 1-1 1.7-2 1.7A13.7 13.7 0 0 1 2.8 3.5c0-1 .7-1.8 1.7-2Z",
    location:
      "M12 19s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Zm0-7.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z",
  };

  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 size-4 shrink-0 text-primary"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.45"
      viewBox="0 0 24 24"
    >
      <path d={paths[type]} />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "instagram") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        viewBox="0 0 24 24"
      >
        <rect height="16" rx="4.2" width="16" x="4" y="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="16.8" cy="7.2" fill="currentColor" r="0.85" />
      </svg>
    );
  }

  if (platform === "tiktok") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M16.2 4c.4 2.5 1.8 4 4.1 4.2v3.1a7.2 7.2 0 0 1-4.1-1.3v5.3c0 3.2-2.2 5.5-5.4 5.5A5 5 0 0 1 5.5 16c0-3 2.3-5.1 5.6-5.1.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-1-.2-1.4 0-2.3.8-2.3 2s.9 2 2.1 2c1.4 0 2.2-.8 2.2-2.5V4h3.2Z" />
      </svg>
    );
  }

  return null;
}

function BotanicalDecoration({ side }: { side: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={[
        "pointer-events-none absolute bottom-10 hidden h-52 w-36 text-gold-500/18 md:block",
        side === "left" ? "-left-10" : "-right-8 scale-x-[-1]",
      ].join(" ")}
      fill="none"
      viewBox="0 0 140 210"
    >
      <path
        d="M74 204C68 164 71 119 88 82c9-20 22-37 40-50"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.1"
      />
      <path
        d="M82 151c-20-8-36-5-50 9 20 7 36 4 50-9ZM89 118c-18-13-35-14-52-4 18 11 35 12 52 4ZM103 78c-12-17-27-23-45-18 13 15 28 21 45 18ZM97 139c15-15 31-20 50-15-15 14-31 19-50 15ZM109 100c16-10 31-12 46-4-15 9-30 11-46 4ZM120 62c11-12 24-17 39-14-11 12-24 16-39 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  );
}

function FooterWave() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-14 w-full text-plum-500 md:h-20"
      preserveAspectRatio="none"
      viewBox="0 0 1440 110"
    >
      <path
        d="M0 32C150 54 250 54 365 35C480 16 555 7 682 34C809 61 905 82 1033 59C1162 36 1260 15 1440 35V110H0V32Z"
        fill="currentColor"
      />
      <path
        d="M0 32C150 54 250 54 365 35C480 16 555 7 682 34C809 61 905 82 1033 59C1162 36 1260 15 1440 35"
        fill="none"
        stroke="var(--sareine-gold-500)"
        strokeOpacity="0.72"
        strokeWidth="1.25"
      />
    </svg>
  );
}

const currentYear = new Date().getFullYear();

export function PublicFooter() {
  const whatsappHref = getWhatsAppHref(siteData.contact.whatsapp);
  const addressDisplay = getAddressDisplay();
  const footerSocialLinks = socialLinks.filter((social) =>
    ["instagram", "tiktok"].includes(social.platform),
  );

  const contactLinks = [
    siteData.contact.whatsapp && whatsappHref
      ? {
          label: "WhatsApp",
          value: siteData.contact.whatsapp,
          href: whatsappHref,
          icon: "message" as const,
          external: true,
        }
      : null,
    siteData.contact.phone
      ? {
          label: "Téléphone",
          value: siteData.contact.phone,
          href: `tel:${siteData.contact.phone.replace(/\s/g, "")}`,
          icon: "phone" as const,
          external: false,
        }
      : null,
    siteData.contact.email
      ? {
          label: "Email",
          value: siteData.contact.email,
          href: `mailto:${siteData.contact.email}`,
          icon: "message" as const,
          external: false,
        }
      : null,
  ].filter(Boolean);

  return (
    <footer className="mt-auto bg-plum-500 text-secondary">
      <section className="relative overflow-hidden bg-background pb-24 pt-20 md:pb-28 md:pt-24 lg:pb-30">
        <BotanicalDecoration side="left" />
        <BotanicalDecoration side="right" />

        <Container className="relative z-10">
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-[minmax(15rem,1.28fr)_minmax(8rem,0.62fr)_minmax(12rem,0.88fr)_minmax(13rem,0.82fr)] lg:items-start">
            <div className="max-w-sm">
              <Link
                aria-label="Sareine Craft & Events - Accueil"
                className="inline-flex max-w-[12.5rem]"
                href="/"
              >
                <Image
                  alt={siteData.name}
                  className="h-auto w-full"
                  height={214}
                  src={siteData.brand.logoHorizontal}
                  width={512}
                />
              </Link>

              <p className="mt-6 font-display text-[1.75rem] leading-[1.08] text-secondary sm:text-[2rem]">
                {siteData.footerDescription}
              </p>
              <p className="mt-5 font-display text-[1.35rem] italic leading-tight text-primary">
                {siteData.footerEditorialLine}
              </p>
            </div>

            <nav
              aria-label="Navigation du pied de page"
              className="border-t border-sand/80 pt-7 md:border-t-0 md:pt-0"
            >
              <p className="type-label text-secondary">Explorer</p>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-10 bg-primary"
              />
              <ul className="mt-5 grid gap-2.5">
                {footerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="font-sans text-sm font-semibold text-secondary underline decoration-primary/0 underline-offset-4 transition-colors duration-200 hover:text-primary hover:decoration-primary focus-visible:text-primary focus-visible:decoration-primary"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-sand/80 pt-7 md:border-t-0 md:pt-0">
              <p className="type-label text-secondary">Nous retrouver</p>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-10 bg-primary"
              />

              {contactLinks.length > 0 || addressDisplay ? (
                <div className="mt-5 grid gap-3.5 font-sans text-sm text-charcoal/76">
                  {contactLinks.map((item) =>
                    item ? (
                      <a
                        className="group flex gap-3 transition-colors duration-200 hover:text-secondary focus-visible:text-secondary"
                        href={item.href}
                        key={item.label}
                        rel={item.external ? "noreferrer" : undefined}
                        target={item.external ? "_blank" : undefined}
                      >
                        <ContactIcon type={item.icon} />
                        <span className="grid gap-0.5">
                          <span className="text-xs font-bold uppercase text-secondary">
                            {item.label}
                          </span>
                          <span className="break-words underline decoration-primary/0 underline-offset-4 transition-colors duration-200 group-hover:text-primary group-hover:decoration-primary">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    ) : null,
                  )}
                  {addressDisplay ? (
                    <p className="flex gap-3">
                      <ContactIcon type="location" />
                      <span className="grid gap-0.5">
                        <span className="text-xs font-bold uppercase text-secondary">
                          Localisation
                        </span>
                        <span>{addressDisplay}</span>
                      </span>
                    </p>
                  ) : null}
                </div>
              ) : null}

              {footerSocialLinks.length > 0 ? (
                <nav
                  aria-label="Réseaux sociaux"
                  className="mt-6 border-t border-sand pt-5"
                >
                  <p className="font-sans text-xs font-bold uppercase text-secondary">
                    Suivez-nous
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2.5">
                    {footerSocialLinks.map((social) => {
                      const socialIcon = <SocialIcon platform={social.platform} />;
                      const socialClasses =
                        "inline-flex size-11 items-center justify-center rounded-full border border-primary/35 bg-background text-primary transition-colors duration-200 hover:border-primary hover:bg-ivory hover:text-secondary focus-visible:text-secondary";

                      return (
                        <li key={social.platform}>
                          {social.url ? (
                            <a
                              aria-label={`Suivre Sareine sur ${social.label}`}
                              className={socialClasses}
                              href={social.url}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {socialIcon}
                            </a>
                          ) : (
                            <span
                              aria-label={`${social.label} bientôt disponible`}
                              className={socialClasses}
                              role="img"
                            >
                              {socialIcon}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              ) : null}
            </div>

            <section
              aria-labelledby="footer-project"
              className="border-t border-sand/80 pt-7 md:border-t-0 md:pt-0"
            >
              <p className="type-label text-secondary" id="footer-project">
                Un projet ?
              </p>
              <span
                aria-hidden="true"
                className="mt-3 block h-px w-10 bg-primary"
              />
              <p className="mt-5 max-w-[16rem] font-display text-[1.55rem] leading-[1.08] text-secondary">
                {siteData.footerProjectText}
              </p>
              <ProjectCTA
                align="left"
                className="mt-6 inline-block"
                label="Nous contacter"
                panelClassName="max-w-[calc(100vw-2.5rem)]"
                triggerClassName="min-h-11 px-5 text-sm"
                size="md"
              />
            </section>
          </div>
        </Container>

        <FooterWave />
      </section>

      <section className="bg-plum-500 py-12 text-ivory md:py-14">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_minmax(18rem,1fr)_1fr] md:items-center">
            <div className="font-sans text-sm text-ivory/76">
              <p>
                © {currentYear} {siteData.shortName}
              </p>
              <p className="mt-1">Tous droits réservés</p>
            </div>

            <p className="flex items-center gap-4 font-display text-[1.45rem] italic leading-tight text-gold-300 md:justify-center md:text-center">
              <span className="hidden h-px w-9 bg-gold-300/60 sm:block" />
              <span>{siteData.footerSignature}</span>
              <span className="hidden h-px w-9 bg-gold-300/60 sm:block" />
            </p>

            <nav aria-label="Navigation légale">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-ivory/76 md:justify-end">
                {legalNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="underline decoration-gold-300/0 underline-offset-4 transition-colors duration-200 hover:text-gold-300 hover:decoration-gold-300 focus-visible:text-gold-300 focus-visible:decoration-gold-300"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </section>
    </footer>
  );
}
