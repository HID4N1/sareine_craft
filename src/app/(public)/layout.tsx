import type { ReactNode } from "react";
import { headers } from "next/headers";

import { PublicFooter } from "@/components/public/PublicFooter";
import { PublicHeader } from "@/components/public/PublicHeader";
import { FloatingWhatsApp } from "@/components/public/FloatingWhatsApp";
import { I18nProvider } from "@/i18n/I18nProvider";
import { defaultLocale, isLocale } from "@/i18n/config";

export default async function PublicLayout({ children }: { children: ReactNode }) {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-sareine-locale");
  const initialLocale = isLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <I18nProvider initialLocale={initialLocale}>
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <PublicFooter />
      <FloatingWhatsApp />
    </I18nProvider>
  );
}
