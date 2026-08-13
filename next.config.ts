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
      "nvidia-h100",
    ];
    return [
      ...legacyPhpPages.map((slug) => ({
        source: `/${slug}.php`,
        destination: `/${slug}`,
        permanent: true,
      })),
      { source: "/h200-gpu-cluster/", destination: "/nvidia-h200", permanent: true },
      { source: "/h200-gpu-cluster", destination: "/nvidia-h200", permanent: true },
      { source: "/h100-gpu-cluster/", destination: "/nvidia-h100", permanent: true },
      { source: "/h100-gpu-cluster", destination: "/nvidia-h100", permanent: true },
      { source: "/nvidia-gb300-nvl72.php", destination: "/nvidia-gb200-nvl72", permanent: true },
      { source: "/pricing.php", destination: "/gpu-pricing", permanent: true },
      { source: "/careers.php", destination: "/careers", permanent: true },
      { source: "/terms-and-conditions.php", destination: "/terms-condition", permanent: true },
      { source: "/about-narendra-sen.php", destination: "/leadership", permanent: true },
      { source: "/news.php", destination: "/newsroom", permanent: true },
      { source: "/kubernetes.php", destination: "/managed-kubernetes", permanent: true },
      { source: "/events.php", destination: "/events", permanent: true },
      { source: "/smart-servers.php", destination: "/", permanent: true },
      { source: "/ai-colocation.php", destination: "/", permanent: true },
      { source: "/deploy-avatar.php", destination: "/", permanent: true },
      { source: "/marketplace.html", destination: "/", permanent: true },
      { source: "/ai-supercloud.php", destination: "/why-ai-supercloud", permanent: true },
      { source: "/ai-supercloud/ai-labs", destination: "/agentic-studio", permanent: true },
      { source: "/inquiry-for-career.php", destination: "/careers", permanent: true },
      { source: "/jd-full-stack-developer.php", destination: "/careers", permanent: true },
      { source: "/neevai-Internship-program.html", destination: "/careers", permanent: true },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
