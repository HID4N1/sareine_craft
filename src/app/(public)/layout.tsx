import type { ReactNode } from "react";
import { headers } from "next/headers";

import { PublicFooter } from "@/components/public/PublicFooter";
import { PublicHeader } from "@/components/public/PublicHeader";
import { FloatingWhatsApp } from "@/components/public/FloatingWhatsApp";
import { siteData } from "@/data/site";
import { I18nProvider } from "@/i18n/I18nProvider";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getAbsoluteUrl } from "@/lib/site-url";

export default async function PublicLayout({ children }: { children: ReactNode }) {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-sareine-locale");
  const initialLocale = isLocale(headerLocale) ? headerLocale : defaultLocale;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": getAbsoluteUrl("/#organization"),
        name: siteData.name,
        url: getAbsoluteUrl("/"),
        logo: getAbsoluteUrl(siteData.brand.logoHorizontal),
        sameAs: siteData.social
          .map((social) => social.url)
          .filter((url): url is string => Boolean(url)),
        contactPoint: siteData.contact.whatsapp
          ? [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: siteData.contact.whatsapp,
                availableLanguage: ["French", "Arabic", "English"],
              },
            ]
          : undefined,
      },
      {
        "@type": "WebSite",
        "@id": getAbsoluteUrl("/#website"),
        name: siteData.name,
        url: getAbsoluteUrl("/"),
        inLanguage: ["fr-MA", "en", "ar-MA"],
        publisher: {
          "@id": getAbsoluteUrl("/#organization"),
        },
      },
    ],
  };

  return (
    <I18nProvider initialLocale={initialLocale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <PublicFooter />
      <FloatingWhatsApp />
    </I18nProvider>
  );
}
