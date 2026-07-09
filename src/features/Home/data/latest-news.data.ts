import type { LatestNewsItem } from "../types/latest-news.types";

// TODO: point `href`s at the real destinations (newsroom / product pages).
export const LATEST_NEWS_ITEMS: LatestNewsItem[] = [
  {
    title: "Full-Stack AI Infrastructure Built to Scale Fearlessly",
    description:
      "Run AI workloads with sovereign control, security, and scalability.",
    href: "/newsroom",
    image: "/images/home/latest/full-stack-infrastructure.jpg",
    imageAlt: "Full-stack AI infrastructure module",
    theme: "light",
  },
  {
    title: "Secure. Scalable. Sovereign. Enterprise-Ready AI Cloud",
    description:
      "Build AI applications with compliance-ready infrastructure and complete data sovereignty.",
    href: "/newsroom",
    image: "/images/home/latest/secure-sovereign-cloud.jpg",
    imageAlt: "Secure sovereign enterprise-ready AI cloud",
    theme: "light",
  },
  {
    title: "Project Noun The Brain Behind Your AI Infrastructure",
    description:
      "Intelligent orchestration that optimizes performance, cost, and resource allocation automatically.",
    href: "/newsroom",
    image: "/images/home/latest/project-noun.jpg",
    imageAlt: "Project Noun AI infrastructure",
    theme: "dark",
  },
  {
    title: "Meet Varuna - India's First Liquid Immersion Cooling Facility",
    description:
      "100% carbon-neutral operations, up to 10x higher compute density, a 1.03 PUE, and up to 25% lower infrastructure costs.",
    href: "/newsroom",
    image: "/images/home/latest/varuna-cooling.png",
    imageAlt: "Varuna liquid immersion cooling facility",
    theme: "dark",
  },
];
