export type AboutImage = {
  src: string;
  alt: string;
  position?: string;
};

export type AboutTrustItem = {
  icon: "hand" | "flower" | "spark";
  title: string;
};

export type AboutPillar = {
  id: "events" | "craft";
  icon: "celebration" | "diamond";
  title: string;
  description: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
  images: AboutImage[];
};

export type AboutProcessStep = {
  icon: "message" | "idea" | "creation" | "calendar";
  title: string;
  description: string;
};

export const aboutPageData = {
  hero: {
    eyebrow: "CRÉATIONS ARTISANALES & ÉVÉNEMENTS À CASABLANCA",
    title: "Créations artisanales et événements sur mesure à Casablanca",
    description:
      "Sareine imagine des créations faites main et organise des célébrations uniques, pensées avec soin pour raconter votre histoire.",
  },

  trustItems: [
    {
      icon: "hand",
      title: "Fait main au Maroc",
    },
    {
      icon: "flower",
      title: "Organisation de A à Z",
    },
    {
      icon: "spark",
      title: "Créations personnalisées",
    },
  ] satisfies AboutTrustItem[],

  pillars: {
    title: "Deux savoir-faire, une même attention aux détails",
    items: [
      {
        id: "events",
        icon: "celebration",
        title: "Événements sur mesure",
        description:
          "Nous organisons des célébrations uniques pour chaque moment de vie : naissance, baby shower, anniversaire, graduation et célébration privée.",
        features: ["Lieu", "Buffet", "Décoration", "Logistique"],
        cta: {
          label: "Explorer nos événements",
          href: "/events",
        },
        images: [
          {
            src: "/images/events/birth/birth-03.webp",
            alt: "Décoration de naissance personnalisée réalisée par Sareine à Casablanca.",
            position: "50% 43%",
          },
          {
            src: "/images/events/private-event/private-event-01.webp",
            alt: "Décoration élégante d’une célébration privée organisée par Sareine.",
            position: "50% 50%",
          },
        ],
      },
      {
        id: "craft",
        icon: "diamond",
        title: "Créations artisanales",
        description:
          "Des bougies gourmandes, princesses, silhouettes, oursons, anges et fleurs sculptées, imaginés et façonnés à la main avec passion.",
        features: ["Fait main", "Personnalisable", "Fabriqué au Maroc"],
        cta: {
          label: "Découvrir le Craft",
          href: "/craft",
        },
        images: [
          {
            src: "/images/craft/creations/IMG_4367.jpg",
            alt: "Bougies gourmandes artisanales colorées créées par Sareine.",
            position: "center",
          },
          {
            src: "/images/craft/creations/IMG_6446.jpg",
            alt: "Collection de princesses artisanales roses fabriquées par Sareine.",
            position: "center",
          },
        ],
      },
    ] satisfies AboutPillar[],
  },

  process: {
    title: "Un accompagnement pensé autour de vous",
    steps: [
      {
        icon: "message",
        title: "Écoute",
        description:
          "Nous prenons le temps de comprendre vos envies et vos besoins.",
      },
      {
        icon: "idea",
        title: "Concept",
        description:
          "Nous imaginons un univers sur mesure, en harmonie avec votre histoire.",
      },
      {
        icon: "creation",
        title: "Création",
        description:
          "Nous donnons vie aux détails avec des créations faites main et une organisation soignée.",
      },
      {
        icon: "calendar",
        title: "Jour J",
        description:
          "Nous assurons la mise en place et le bon déroulement pour que vous profitiez pleinement de votre moment.",
      },
    ] satisfies AboutProcessStep[],
  },

  finalCta: {
    title: "Donnons vie à votre prochain moment",
    primary: {
      label: "Parler de mon projet",
      href: "/contact",
    },
    secondary: {
      label: "Voir nos réalisations",
      href: "/realisations",
    },
  },
};