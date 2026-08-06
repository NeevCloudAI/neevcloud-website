import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    const legacyPhpPages = [
      "nvidia-h200",
      "nvidia-tesla-t4",
      "nvidia-gb200-nvl72",
      "nvidia-b200",
      "nvidia-rtx-pro-6000",
      "nvidia-b300",
      "nvidia-a100",
      "nvidia-a30",
      "nvidia-rtx-5090",
      "nvidia-rtx-a6000",
    ];
    return legacyPhpPages.map((slug) => ({
      source: `/${slug}.php`,
      destination: `/${slug}`,
      permanent: true,
    }));
  },
};

export default withBundleAnalyzer(nextConfig);
