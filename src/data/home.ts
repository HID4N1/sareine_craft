export type HomeHeroWord = {
  text: string;
  highlight?: boolean;
};

export type HomeHeroLine = {
  words: HomeHeroWord[];
};

export type HomeHeroData = {
  eyebrow: string;
  headline: HomeHeroLine[];
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  images: {
    primary: {
      src: string;
      alt: string;
    };
    secondary: {
      src: string;
      alt: string;
    };
  };
  microCopy: string;
};

export type HomeServiceCard = {
  id: "events" | "decoration" | "craft" | "complete";
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
    position: string;
  };
  variant: "small" | "wide" | "feature";
};

export type HomeServiceValue = {
  icon: "spark" | "guide" | "memory";
  title: string;
  description: string;
};

export type HomeServicesData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  cards: HomeServiceCard[];
  values: HomeServiceValue[];
};

export const homeHero: HomeHeroData = {
  eyebrow: "CRÉATIONS • ÉVÉNEMENTS • CASABLANCA",
  headline: [
    {
      words: [{ text: "Des créations" }],
    },
    {
      words: [
        { text: "qui " },
        { text: "embellissent.", highlight: true },
      ],
    },
    {
      words: [{ text: "Des moments" }],
    },
    {
      words: [
        { text: "qui " },
        { text: "restent.", highlight: true },
      ],
    },
  ],
  description:
    "Bougies artisanales, créations personnalisées et événements imaginés avec soin pour célébrer chaque moment à votre façon.",
  primaryCta: {
    label: "Découvrir nos créations",
    href: "/craft",
  },
  secondaryCta: {
    label: "Explorer nos événements",
    href: "/events",
  },
  images: {
    primary: {
      src: "/images/home/hero/baby-shower-pink.png",
      alt: "Décoration baby shower rose avec ballons, chariot fleuri et ours en peluche.",
    },
    secondary: {
      src: "/images/home/hero/bridal-shower-green.png",
      alt: "Décoration bridal shower vert et or avec ballons, table basse et fleurs.",
    },
  },
  microCopy: "L’ART DE CÉLÉBRER LE QUOTIDIEN",
};

export const homeServices: HomeServicesData = {
  eyebrow: "NOTRE SAVOIR-FAIRE",
  title: "Bien plus qu’une décoration.",
  description: "",
  cta: {
    label: "Découvrir nos services",
    href: "/events",
  },
  cards: [
    {
      id: "events",
      eyebrow: "ÉVÉNEMENTS",
      title: "Organisation\nd’événements",
      description: "Des moments pensés autour de vous.",
      href: "/events",
      image: {
        src: "/images/home/services/events-organisation.png",
        alt: "Décor de célébration chaleureux avec ballons, fleurs et table de desserts.",
        position: "center",
      },
      variant: "small",
    },
    {
      id: "decoration",
      eyebrow: "DÉCORATION",
      title: "Décoration\n& mise en scène",
      description: "Chaque détail participe à l’histoire.",
      href: "/events",
      image: {
        src: "/images/home/services/decoration-table.png",
        alt: "Table de réception élégante avec fleurs, bougies et vaisselle raffinée.",
        position: "58% center",
      },
      variant: "small",
    },
    {
      id: "craft",
      eyebrow: "CRÉATIONS ARTISANALES",
      title: "Créations\nartisanales",
      description: "Des pièces uniques créées avec intention.",
      href: "/craft",
      image: {
        src: "/images/home/services/artisanal-creations.png",
        alt: "Bougies artisanales, fleurs et paquets cadeaux arrangés sur une table d’atelier.",
        position: "center",
      },
      variant: "wide",
    },
    {
      id: "complete",
      eyebrow: "SERVICE COMPLET",
      title: "Organisation\nde A à Z",
      description:
        "Lieu, buffet, matériel,\ndécoration, coordination…\nnous pouvons tout prendre\nen charge.",
      href: "/contact",
      image: {
        src: "/images/home/services/organisation-a-z.png",
        alt: "Réception extérieure élégante au coucher du soleil avec arche fleurie et table aux chandelles.",
        position: "62% center",
      },
      variant: "feature",
    },
  ],
  values: [
    {
      icon: "spark",
      title: "CRÉATIONS AUTHENTIQUES",
      description: "Faites à la main avec passion",
    },
    {
      icon: "guide",
      title: "ACCOMPAGNEMENT PERSONNALISÉ",
      description: "À chaque étape, à vos côtés",
    },
    {
      icon: "memory",
      title: "DES MOMENTS INOUBLIABLES",
      description: "Qui restent gravés",
    },
  ],
};
