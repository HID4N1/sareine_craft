import type {
  Event,
  EventCategory as EventRecordCategory,
  EventService,
} from "@/types";
import { eventCategories } from "@/types";

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
  layout:
    | "editorial-grid"
    | "overlap"
    | "feature-gallery"
    | "graduation-arch"
    | "cinematic";
  theme: "ivory" | "blush" | "plum";
};

export type EventsPageHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  footerLine: string;
  statement: string;
  images: EventCategoryImage[];
};

export type EventServiceStep = {
  number: string;
  title: string;
  description: string;
};

export type EventsServiceSection = {
  eyebrow: string;
  title: string;
  steps: EventServiceStep[];
};

export type EventsFinalCta = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  image: EventCategoryImage;
};

function createWhatsAppHref(message: string) {
  const phone = siteData.contact.whatsapp?.replace(/\D/g, "");

  if (!phone) {
    return "/";
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
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
  eyebrow: "Des émotions en scène",
  title: "Chaque célébration mérite un décor qui lui ressemble",
  description:
    "Des expériences sur mesure, pensées avec cœur, pour sublimer vos moments les plus précieux.",
  primaryCta: "Découvrir nos événements",
  footerLine: "Artisanat — Émotions — Souvenirs durables",
  statement: "Plus qu'un événement, une histoire à vivre",
  images: [
    {
      src: "/images/events/birth/birth-03.webp",
      alt: "Grand décor de naissance Sareine Craft avec table douce, ballons et détails personnalisés",
      role: "primary",
      objectPosition: "50% 42%",
    },
    {
      src: "/images/events/private-event/private-event-02.webp",
      alt: "Détail chaleureux de célébration privée avec lumière douce et décor raffiné",
      role: "detail",
      objectPosition: "50% 50%",
    },
  ],
};

export const eventPageCategories: EventCategory[] = [
  {
    id: "naissance",
    order: "01",
    eyebrow: "Premiers moments, grands souvenirs",
    title: "Naissance",
    description:
      "Accueillir un nouveau chapitre avec douceur et élégance. Nous créons des décors tendres et raffinés pour célébrer l'arrivée de bébé.",
    ctaLabel: "Découvrir nos décors naissance",
    images: [
      {
        src: "/images/events/birth/birth-03.webp",
        alt: "Décor de naissance complet avec table personnalisée et composition douce",
        role: "primary",
        objectPosition: "50% 43%",
      },
      {
        src: "/images/events/birth/birth-01.webp",
        alt: "Détail de décoration naissance dans une palette tendre",
        role: "secondary",
        objectPosition: "50% 48%",
      },
      {
        src: "/images/events/birth/birth-02.webp",
        alt: "Table naissance Sareine Craft avec accessoires personnalisés",
        role: "detail",
        objectPosition: "50% 42%",
      },
    ],
    layout: "editorial-grid",
    theme: "ivory",
  },
  {
    id: "baby-shower",
    order: "02",
    eyebrow: "Une parenthèse pleine d'amour",
    title: "Baby shower",
    description:
      "Célébrer la maternité, entourée de celles et ceux qui comptent. Des ambiances délicates et poétiques pour des instants inoubliables.",
    ctaLabel: "Découvrir nos baby showers",
    images: [
      {
        src: "/images/events/baby-shower/baby-shower-01.webp",
        alt: "Décor baby shower Sareine Craft avec ambiance délicate et féminine",
        role: "primary",
        objectPosition: "50% 48%",
      },
      {
        src: "/images/events/baby-shower/baby-shower-02.webp",
        alt: "Détail baby shower avec composition poétique et accessoires raffinés",
        role: "detail",
        objectPosition: "50% 44%",
      },
    ],
    layout: "overlap",
    theme: "blush",
  },
  {
    id: "anniversaire",
    order: "03",
    eyebrow: "Des souvenirs à tout âge",
    title: "Anniversaire",
    description:
      "Petits et grands, chaque anniversaire est une histoire unique. Nous imaginons des décors créatifs et élégants pour faire de ce jour un moment inoubliable.",
    ctaLabel: "Découvrir nos anniversaires",
    images: [
      {
        src: "/images/events/birthday/birthday-01.webp",
        alt: "Décor d'anniversaire Sareine Craft avec scénographie festive et élégante",
        role: "primary",
        objectPosition: "50% 48%",
      },
      {
        src: "/images/events/birthday/birthday-02.webp",
        alt: "Détail de table d'anniversaire avec éléments personnalisés",
        role: "secondary",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/events/birthday/birthday-03.webp",
        alt: "Composition anniversaire raffinée avec accessoires festifs",
        role: "detail",
        objectPosition: "50% 52%",
      },
    ],
    layout: "feature-gallery",
    theme: "ivory",
  },
  {
    id: "graduation",
    order: "04",
    eyebrow: "Des rêves plus haut",
    title: "Graduation",
    description:
      "Célébrer un parcours, saluer un nouveau départ. Des mises en scène élégantes pour marquer cette étape importante avec fierté.",
    ctaLabel: "Découvrir nos graduations",
    images: [
      {
        src: "/images/events/graduation/graduation-mock-01.webp",
        alt: "Image temporaire de buffet graduation élégant avec diplômes, fleurs crème, bougies et accents plum et or",
        role: "primary",
        objectPosition: "50% 48%",
        temporary: true,
      },
      {
        src: "/images/events/graduation/graduation-mock-02.webp",
        alt: "Image temporaire de détail graduation avec diplômes noués, fleurs crème, bougie et toque",
        role: "detail",
        objectPosition: "50% 50%",
        temporary: true,
      },
    ],
    layout: "graduation-arch",
    theme: "plum",
  },
  {
    id: "celebration-privee",
    order: "05",
    eyebrow: "Des instants hors du temps",
    title: "Célébration privée",
    description:
      "Dîners intimistes, demandes en mariage, fiançailles ou tout autre moment précieux. Nous créons des ambiances sur mesure pour vos plus belles intentions.",
    ctaLabel: "Découvrir nos célébrations privées",
    images: [
      {
        src: "/images/events/private-event/private-event-01.webp",
        alt: "Célébration privée Sareine Craft avec décor chaleureux et ambiance intimiste",
        role: "primary",
        objectPosition: "50% 50%",
      },
      {
        src: "/images/events/private-event/private-event-02.webp",
        alt: "Détail de célébration privée avec lumière douce et décor élégant",
        role: "detail",
        objectPosition: "50% 47%",
      },
    ],
    layout: "cinematic",
    theme: "ivory",
  },
];

export const eventsServiceSection: EventsServiceSection = {
  eyebrow: "Notre accompagnement",
  title: "Une expérience en toute sérénité",
  steps: [
    {
      number: "01",
      title: "Écoute & conseil",
      description: "Nous prenons le temps de comprendre vos envies.",
    },
    {
      number: "02",
      title: "Création sur mesure",
      description: "Des concepts uniques, inspirés de votre histoire.",
    },
    {
      number: "03",
      title: "Organisation détaillée",
      description: "Nous coordonnons chaque étape avec soin.",
    },
    {
      number: "04",
      title: "Réalisation le jour J",
      description: "Vous profitez, nous nous occupons du reste.",
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
    alt: "Décor de célébration privée Sareine Craft dans une ambiance intime et cinématographique",
    role: "primary",
    objectPosition: "50% 50%",
  },
};
