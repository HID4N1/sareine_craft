import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.11.230"],
  images: {
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
