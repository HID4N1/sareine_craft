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
    label: "Events",
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
