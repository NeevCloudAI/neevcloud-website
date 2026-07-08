import type { LatestNewsItem } from "../types/latest-news.types";

// TODO: point `href`s at the real destinations (newsroom / product pages).
export const LATEST_NEWS_ITEMS: LatestNewsItem[] = [
  {
    title: "Full-Stack AI Infrastructure Built to Scale Fearlessly",
    href: "/newsroom",
    image: "/images/home/latest/full-stack-infrastructure.jpg",
    imageAlt: "Full-stack AI infrastructure module",
    theme: "light",
  },
  {
    title: "Secure. Scalable. Sovereign. Enterprise-Ready AI Cloud",
    href: "/newsroom",
    image: "/images/home/latest/secure-sovereign-cloud.jpg",
    imageAlt: "Secure sovereign enterprise-ready AI cloud",
    theme: "light",
  },
  {
    title: "Project Noun The Brain Behind Your AI Infrastructure",
    href: "/newsroom",
    image: "/images/home/latest/project-noun.jpg",
    imageAlt: "Project Noun AI infrastructure",
    theme: "dark",
  },
  {
    title: "Meet Varuna - India's First Liquid Immersion Cooling Facility",
    href: "/newsroom",
    image: "/images/home/latest/varuna-cooling.png",
    imageAlt: "Varuna liquid immersion cooling facility",
    theme: "dark",
  },
];
