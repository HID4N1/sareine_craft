import type { Metadata } from "next";
import {
  Allura,
  Cormorant_Garamond,
  Manrope,
  Noto_Naskh_Arabic,
} from "next/font/google";
import { cookies, headers } from "next/headers";
import "./globals.css";

import { defaultLocale, isLocale, isRTL, localeCookieName } from "@/i18n/config";
import { siteName } from "@/lib/metadata";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sareinecraft.com";
const defaultDescription =
  "Sareine imagine des créations artisanales et des expériences événementielles pensées avec soin pour vos moments précieux.";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const allura = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sareine — Craft & Events",
    template: "%s",
  },
  description: defaultDescription,
  applicationName: siteName,
  openGraph: {
    title: "Sareine — Craft & Events",
    description: defaultDescription,
    url: "/",
    type: "website",
    locale: "fr_MA",
    siteName,
    images: [
      {
        url: "/brand/sareine-logo-horizontal.png",
        alt: "Sareine Craft & Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sareine — Craft & Events",
    description: defaultDescription,
    images: ["/brand/sareine-logo-horizontal.png"],
  },
  icons: {
    icon: [
      {
        url: "/brand/sareine-logo.png",
        type: "image/png",
      },
    ],
    apple: "/brand/sareine-logo.png",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-sareine-locale");
  const cookieLocale = cookieStore.get(localeCookieName)?.value;
  const locale = isLocale(headerLocale)
    ? headerLocale
    : isLocale(cookieLocale)
      ? cookieLocale
      : defaultLocale;

  return (
    <html
      lang={locale}
      dir={isRTL(locale) ? "rtl" : "ltr"}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      data-locale={locale}
      className={`${cormorantGaramond.variable} ${manrope.variable} ${allura.variable} ${notoNaskhArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
