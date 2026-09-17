import type { SiteData } from "@/types";

import { socialLinks } from "./social";

export const siteData: SiteData = {
  name: "Sareine Craft & Events",
  legalName: null,
  tagline: "",
  description: "",
  contact: {
    phone: null,
    whatsapp: null,
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
