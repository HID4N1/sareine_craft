import type { NavigationItem } from "@/types";

export const publicNavigation: NavigationItem[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Craft",
    href: "/craft",
  },
  {
    label: "Evenements",
    href: "/events",
  },
  {
    label: "Réalisations",
    href: "/realisations",
  },
  {
    label: "À propos",
    href: "/about",
  },
];

export const footerNavigation: NavigationItem[] = publicNavigation;

export const legalNavigation: NavigationItem[] = [
  {
    label: "Confidentialité",
    href: "/privacy",
  },
  {
    label: "Cookies",
    href: "/cookies",
  },
  {
    label: "Conditions",
    href: "/terms",
  },
];
