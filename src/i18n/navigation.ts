import type { NavigationItem } from "@/types";

export type TranslatedNavigationItem = NavigationItem & {
  translationKey: string;
};

export const publicNavigationKeys: TranslatedNavigationItem[] = [
  {
    label: "Accueil",
    href: "/",
    translationKey: "nav.home",
  },
  {
    label: "Craft",
    href: "/craft",
    translationKey: "nav.craft",
  },
  {
    label: "Événements",
    href: "/events",
    translationKey: "nav.events",
  },
  {
    label: "À propos",
    href: "/about",
    translationKey: "nav.about",
  },
];

export const legalNavigationKeys: TranslatedNavigationItem[] = [
  {
    label: "Confidentialité",
    href: "/privacy",
    translationKey: "nav.privacy",
  },
  {
    label: "Cookies",
    href: "/cookies",
    translationKey: "nav.cookies",
  },
  {
    label: "Conditions",
    href: "/terms",
    translationKey: "nav.terms",
  },
];
