import type { SiteData } from "@/types";

import { socialLinks } from "./social";

export const siteData: SiteData = {
  name: "Sareine Craft & Events",
  shortName: "Sareine",
  legalName: null,
  tagline: "",
  description: "",
  footerDescription:
    "Des créations et des expériences pensées avec soin pour vos moments précieux.",
  footerEditorialLine: "Artisanat · Événements · Émotions",
  footerProjectText:
    "Une création sur mesure ou un événement inoubliable ? Parlons-en.",
  footerSignature: "Des instants d'exception, au-delà du quotidien.",
  contact: {
    phone: null,
    whatsapp: "+212 653-712245",
    email: null,
  },
  address: {
    street: null,
    city: null,
    region: null,
    country: "Maroc",
  },
  openingHours: null,
  social: socialLinks,
  brand: {
    logo: "/brand/sareine-logo.png",
    logoHorizontal: "/brand/sareine-logo-horizontal.png",
  },
};
