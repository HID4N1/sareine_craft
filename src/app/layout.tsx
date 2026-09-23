import type { Metadata } from "next";
import {
  Allura,
  Cormorant_Garamond,
  Manrope,
  
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Sareine — Craft & Events",
  description:
    "Sareine imagine des créations artisanales et des expériences événementielles pensées avec soin pour vos moments précieux.",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${cormorantGaramond.variable} ${manrope.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
