import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sareine Craft & Events",
    short_name: "Sareine",
    description:
      "Créations artisanales et expériences événementielles pour vos moments précieux.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f5ebdd",
    theme_color: "#b8894a",
    icons: [
      {
        src: "/brand/sareine-logo.png",
        sizes: "1254x1254",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/sareine-logo.png",
        sizes: "1254x1254",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
