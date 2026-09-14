import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mvp-calculator",
  assetPrefix: "/mvp-calculator",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
