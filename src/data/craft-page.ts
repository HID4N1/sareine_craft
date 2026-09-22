import type { CraftCollection, CraftPageData } from "@/types/craft";

const creationItems: Array<{
  file: string;
  name: string;
  category: CraftCollection;
}> = [
  { file: "4367", name: "Mini bougies gourmandes", category: "gourmandise" },
  { file: "4368", name: "Gâteau d’anniversaire", category: "gourmandise" },

  { file: "6446", name: "Collection petites princesses", category: "princesse" },
  { file: "6447", name: "Collection princesses roses", category: "princesse" },
  { file: "6448", name: "Princesse au bouquet", category: "princesse" },
  { file: "6449", name: "Princesse romantique", category: "princesse" },
  { file: "6450", name: "Princesse élégance", category: "princesse" },
  { file: "6451", name: "Princesse rêveuse", category: "princesse" },
  { file: "6452", name: "Princesse au nœud", category: "princesse" },
  { file: "6453", name: "Cortège de princesses", category: "princesse" },
  { file: "6454", name: "Collection conte de fées", category: "princesse" },
  { file: "6455", name: "Duo de princesses", category: "princesse" },
  { file: "6456", name: "Princesses ivoire", category: "princesse" },
  { file: "6457", name: "Collection royale", category: "princesse" },

  { file: "6466", name: "Robe plissée ivoire", category: "silhouette" },
  { file: "6467", name: "Trio de silhouettes", category: "silhouette" },
  { file: "6468", name: "Silhouette couture", category: "silhouette" },
  { file: "6469", name: "Robe de cérémonie", category: "silhouette" },
  { file: "6470", name: "Silhouette satinée", category: "silhouette" },
  { file: "6479", name: "Collection haute couture", category: "silhouette" },
  { file: "6480", name: "Robe signature", category: "silhouette" },

  { file: "6462", name: "Oursons décoratifs", category: "ange" },
  { file: "6471", name: "Ange endormi", category: "ange" },
  { file: "6472", name: "Ange rêveur", category: "ange" },
  { file: "6473", name: "Petits anges", category: "ange" },
  { file: "6474", name: "Duo d’anges", category: "ange" },
  { file: "6475", name: "Ange gardien", category: "ange" },
  { file: "6476", name: "Anges aux fleurs", category: "ange" },
  { file: "6481", name: "Ange douceur", category: "ange" },
  { file: "6485", name: "Petit ange artisanal", category: "ange" },
  { file: "4580", name: "Ourson bleu", category: "ange" },

  { file: "6461", name: "Fleurs sculptées", category: "floral" },
  { file: "6482", name: "Rose ivoire", category: "floral" },
];

export const craftPageData: CraftPageData = {
  hero: {
    eyebrow: "NOS CRÉATIONS ARTISANALES",
    title: "L’Art du Fait Main,\nL’Émotion en Plus",
    description:
      "Des créations uniques, pensées avec passion et façonnées à la main pour illuminer votre quotidien et vos moments spéciaux.",
    cta: {
      label: "Découvrir nos créations",
      href: "#creations",
    },
    note: "Petits\ndétails,\nGrands\nmoments.\n♡",
    image: {
      src: "/images/craft/creations/IMG_6479.jpg",
      alt: "Collection de bougies artisanales en forme de robes.",
      position: "center",
    },
    values: [
      {
        icon: "leaf",
        title: "Fait main\nau Maroc",
      },
      {
        icon: "diamond",
        title: "Matériaux\nsélectionnés",
      },
      {
        icon: "heart",
        title: "Pièces uniques\nou personnalisables",
      },
    ],
  },

  categories: [
    { id: "all", label: "Toutes les créations", icon: "all" },
    { id: "gourmandise", label: "Bougies gourmandes", icon: "cake" },
    { id: "princesse", label: "Princesses", icon: "princess" },
    { id: "silhouette", label: "Silhouettes", icon: "dress" },
    { id: "ange", label: "Anges & figurines", icon: "angel" },
    { id: "floral", label: "Fleurs sculptées", icon: "flower" },
  ],

  creations: {
    eyebrow: "NOS PRODUITS",
    title: "Nos Créations",
    description:
      "Des pièces uniques, conçues avec soin pour sublimer chaque instant.",
    items: creationItems.map(({ file, name, category }) => ({
      id: `creation-${file}`,
      name,
      category,
      image: {
        src: `/images/craft/creations/IMG_${file}.jpg`,
        alt: `${name}, création artisanale Sareine Craft.`,
        position: "center",
      },
    })),
  },

  story: {
    eyebrow: "PLUS QU’UN OBJET",
    title: "Une Histoire,\nUn Savoir-Faire",
    description:
      "Chaque création est imaginée et réalisée avec passion, en alliant tradition artisanale et touches contemporaines. Nos pièces racontent une histoire : la vôtre.",
    cta: {
      label: "Découvrir notre univers",
      href: "/about",
    },
    images: {
      primary: {
        src: "/images/craft/creations/IMG_4368.jpg",
        alt: "Bougie artisanale en forme de gâteau d’anniversaire.",
      },
      secondary: {
        src: "/images/craft/creations/IMG_6471.jpg",
        alt: "Bougie artisanale représentant un ange endormi.",
      },
    },
    values: [
      {
        icon: "diamond",
        title: "Créations uniques",
        description: "Chaque pièce est réalisée avec soin",
      },
      {
        icon: "leaf",
        title: "Matériaux de qualité",
        description: "Sélectionnés avec attention",
      },
      {
        icon: "hand",
        title: "Fait main au Maroc",
        description: "Soutient l’artisanat local",
      },
      {
        icon: "heart",
        title: "Personnalisation",
        description: "Des créations à votre image",
      },
    ],
  },
};