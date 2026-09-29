import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { FloatingWhatsApp } from "@/components/public/FloatingWhatsApp";
import { PublicFooter } from "@/components/public/PublicFooter";
import { PublicHeader } from "@/components/public/PublicHeader";
import { siteData } from "@/data/site";
import { defaultLocale, isLocale, supportedLocales, type Locale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getAbsoluteUrl } from "@/lib/site-url";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: routeLocale } = await params;
  const locale: Locale = isLocale(routeLocale) ? routeLocale : defaultLocale;

  if (!isLocale(routeLocale)) {
    notFound();
  }

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
    <I18nProvider initialLocale={locale}>
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
