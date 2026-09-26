import type {
  Event,
  EventCategory as EventRecordCategory,
  EventService,
} from "@/types";
import { eventCategories } from "@/types";
import { getWhatsAppHref } from "@/lib/whatsapp";

import { siteData } from "./site";

export { eventCategories };
export type { EventRecordCategory, EventService };

export type EventCategoryImage = {
  src: string;
  alt: string;
  role: "primary" | "secondary" | "detail";
  objectPosition?: string;
  temporary?: boolean;
};

export type EventCategory = {
  id: string;
  order: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  images: EventCategoryImage[];
  layout: "content-left" | "content-right";
  theme: "ivory" | "blush";
};

export type HeroValue = {
  icon: string;
  label: string;
};

export type EventsPageHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  image: EventCategoryImage;
  values: HeroValue[];
};

export type EventServiceStep = {
  icon: string;
  title: string;
};

export type EventsServiceSection = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  services: EventServiceStep[];
};

export type EventsFinalCta = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  image: EventCategoryImage;
};

function createWhatsAppHref(message: string) {
  return getWhatsAppHref(siteData.contact.whatsapp, message) ?? "/";
}

export const eventInquiryHref = createWhatsAppHref(
  "Bonjour Sareine Craft, j'aimerais parler d'un projet événementiel.",
);

export const eventServices: EventService[] = [
  "venue-rental",
  "food",
  "decoration",
  "logistics",
];

export const events: Event[] = [];

export const eventsPageHero: EventsPageHero = {
  eyebrow: "Événements sur mesure",
  title: "Des moments uniques, créés pour vous",
  description:
    "De la conception à la réalisation, nous imaginons et organisons vos événements pour des souvenirs inoubliables.",
  primaryCta: "Découvrir nos événements",
  image: {
    src: "/images/events/graduation/graduation-mock-01.webp",
    alt: "Table de célébration élégante aux tons bordeaux et dorés",
    role: "primary",
    objectPosition: "50% 43%",
  },
  values: [
    {
      icon: "◇",
      label: "Des ambiances sur mesure",
    },
    {
      icon: "✿",
      label: "Décoration élégante et personnalisée",
    },
    {
      icon: "⌒",
      label: "Service complet de A à Z",
    },
    {
      icon: "♡",
      label: "Des souvenirs inoubliables",
    },
  ],
};

export const eventPageCategories: EventCategory[] = [
  {
    id: "baby-shower",
    order: "01",
    eyebrow: "Baby shower",
    title: "Célébrez l'arrivée de bébé",
    description:
      "Une ambiance douce et féerique pour célébrer ce moment unique. Décorations personnalisées, buffet gourmand et une atmosphère remplie de tendresse.",
    ctaLabel: "Découvrir les Baby Showers",
    images: [
      {
        src: "/images/events/baby-shower/baby-shower-01.webp",
        alt: "Décor baby shower rose avec ballons, fleurs et table personnalisée",
        role: "primary",
        objectPosition: "50% 43%",
      },
      {
        src: "/images/events/baby-shower/baby-shower-02.webp",
        alt: "Détail tendre de baby shower Sareine Craft",
        role: "secondary",
        objectPosition: "50% 48%",
      },
      {
        src: "/images/events/birth/birth-01.webp",
        alt: "Décor doux de naissance avec détails personnalisés",
        role: "detail",
        objectPosition: "50% 45%",
      },
    ],
    layout: "content-left",
    theme: "blush",
  },
  {
    id: "anniversaire",
    order: "02",
    eyebrow: "Anniversaire",
    title: "Des fêtes inoubliables pour petits et grands",
    description:
      "Des thèmes variés, des décors créatifs et une organisation complète pour faire de chaque anniversaire un moment magique.",
    ctaLabel: "Découvrir les anniversaires",
    images: [
      {
        src: "/images/events/birthday/birthday-01.webp",
        alt: "Anniversaire élégant avec gâteau, bougies, ballons dorés et fleurs",
        role: "primary",
        objectPosition: "50% 48%",
      },
      {
        src: "/images/events/birthday/birthday-02.webp",
        alt: "Décor anniversaire chaleureux avec table raffinée",
        role: "secondary",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/events/birthday/birthday-03.webp",
        alt: "Détail anniversaire Sareine Craft avec ambiance festive",
        role: "detail",
        objectPosition: "50% 52%",
      },
    ],
    layout: "content-right",
    theme: "ivory",
  },
  {
    id: "remise-de-diplomes",
    order: "03",
    eyebrow: "Remise de diplômes",
    title: "Marquez une étape importante",
    description:
      "Une célébration à la hauteur de vos réussites avec des décors élégants, des détails personnalisés et une organisation sans stress.",
    ctaLabel: "Découvrir les remises de diplômes",
    images: [
      {
        src: "/images/events/graduation/graduation-mock-01.webp",
        alt: "Décor graduation noir et or avec toque, fleurs crème et table élégante",
        role: "primary",
        objectPosition: "50% 45%",
        temporary: true,
      },
      {
        src: "/images/events/graduation/graduation-mock-02.webp",
        alt: "Détail graduation avec diplômes, fleurs et accents dorés",
        role: "secondary",
        objectPosition: "50% 50%",
        temporary: true,
      },
    ],
    layout: "content-left",
    theme: "ivory",
  },
  {
    id: "evenements-prives",
    order: "04",
    eyebrow: "Événements privés",
    title: "Des moments qui vous ressemblent",
    description:
      "Fêtes, réceptions, dîners privés ou rencontres spéciales, nous créons des ambiances uniques adaptées à vos envies.",
    ctaLabel: "Découvrir les événements privés",
    images: [
      {
        src: "/images/events/private-event/private-event-02.webp",
        alt: "Réception privée élégante avec table dressée, fleurs et lumière dorée",
        role: "primary",
        objectPosition: "50% 47%",
      },
      {
        src: "/images/events/private-event/private-event-01.webp",
        alt: "Détail chaleureux de célébration privée Sareine Craft",
        role: "secondary",
        objectPosition: "50% 48%",
      },
    ],
    layout: "content-right",
    theme: "ivory",
  },
];

export const eventsServiceSection: EventsServiceSection = {
  eyebrow: "Une expérience complète",
  title: "De A à Z, nous nous occupons de tout",
  description:
    "De la conception du concept à la décoration, la restauration, la logistique et la coordination le jour J, pour un événement en toute sérénité.",
  primaryCta: "Discuter de votre projet",
  services: [
    {
      icon: "⌂",
      title: "Location de lieu (si nécessaire)",
    },
    {
      icon: "✿",
      title: "Décoration personnalisée",
    },
    {
      icon: "⌒",
      title: "Restauration et boissons",
    },
    {
      icon: "□",
      title: "Logistique complète",
    },
    {
      icon: "◷",
      title: "Coordination le jour J",
    },
    {
      icon: "◇",
      title: "Accompagnement sur mesure",
    },
  ],
};

export const eventsFinalCta: EventsFinalCta = {
  eyebrow: "Votre histoire mérite un décor unique",
  title: "Parlons de votre projet",
  description:
    "Racontez-nous vos envies, nous les transformons en une célébration inoubliable.",
  primaryCta: "Demander un devis",
  image: {
    src: "/images/events/private-event/private-event-01.webp",
    alt: "Décor de célébration privée Sareine Craft dans une ambiance intime",
    role: "primary",
    objectPosition: "50% 50%",
  },
};
