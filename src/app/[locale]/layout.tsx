import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { FloatingWhatsApp } from "@/components/public/FloatingWhatsApp";
import { PublicFooter } from "@/components/public/PublicFooter";
import { PublicHeader } from "@/components/public/PublicHeader";
import { defaultLocale, isLocale, supportedLocales, type Locale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/I18nProvider";

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

  return (
    <I18nProvider initialLocale={locale}>
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <PublicFooter />
      <FloatingWhatsApp />
    </I18nProvider>
  );
}
