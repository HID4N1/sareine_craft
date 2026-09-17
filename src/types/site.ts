import type { SocialLink } from "./social";

export interface SiteContact {
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
}

export interface SiteAddress {
  street: string | null;
  city: string | null;
  region: string | null;
  country: string;
}

export interface SiteBrand {
  logo: string;
  logoHorizontal: string;
}

export interface SiteData {
  name: string;
  shortName: string;
  legalName: string | null;
  tagline: string;
  description: string;
  footerDescription: string;
  footerEditorialLine: string;
  footerProjectText: string;
  footerSignature: string;
  contact: SiteContact;
  address: SiteAddress;
  openingHours: string | null;
  social: SocialLink[];
  brand: SiteBrand;
}
