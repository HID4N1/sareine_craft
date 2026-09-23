import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.11.230"],
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
    qualities: [75, 76, 78, 84, 86, 88],
    localPatterns: [
      {
        pathname: "/**",
        search: "",
      },
      {
        pathname: "/images/home/hero/baby-shower-pink.png",
        search: "?v=portrait-20260917-2",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
