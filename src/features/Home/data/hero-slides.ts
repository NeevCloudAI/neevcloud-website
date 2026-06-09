import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export type HeroSlide = {
  id: string;
  theme: "light" | "dark";
  headlinePrefix: string;
  headlineEmphasis: string;
  headlineSuffix: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaRoute?: string;
  primaryCtaTarget?: "_blank" | "_self" | "_parent" | "_top";
  primaryCtaVariant?: "default" | "outline" | "white";
  secondaryCtaLabel: string;
  secondaryCtaRoute?: string;
  secondaryCtaTarget?: "_blank" | "_self" | "_parent" | "_top";
  secondaryCtaVariant: "outline" | "white";
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "full-stack-ai",
    theme: "light",
    headlinePrefix: "Full-Stack",
    headlineEmphasis: "AI Infrastructure",
    headlineSuffix: "Built to Scale Fearlessly",
    subtitle:
      "Run AI workloads with sovereign control, security, and scalability.",
    primaryCtaLabel: "Explore Platform",
    primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
    primaryCtaTarget: "_blank",
    secondaryCtaLabel: "Contact Sales",
    secondaryCtaRoute: "/contact-neevcloud",
    secondaryCtaVariant: "outline",
  },
  {
    id: "project-noun",
    theme: "dark",
    headlinePrefix: "Project Noun:",
    headlineEmphasis: "The Brain Behind Your AI Infrastructure",
    headlineSuffix: "",
    subtitle: "Provision high-performance GPU clusters with dependable uptime.",
    primaryCtaLabel: "Explore Noun",
    primaryCtaRoute: EXTERNAL_LINKS.projectOrion,
    primaryCtaTarget: "_blank",
    secondaryCtaLabel: "Contact Sales",
    secondaryCtaRoute: "/contact-neevcloud",
    secondaryCtaVariant: "white",
  },
  {
    id: "full-stack-ai-2",
    theme: "light",
    headlinePrefix: "Full-Stack",
    headlineEmphasis: "AI Infrastructure",
    headlineSuffix: "Built to Scale Fearlessly",
    subtitle:
      "Run AI workloads with sovereign control, security, and scalability.",
    primaryCtaLabel: "Explore Platform",
    primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
    primaryCtaTarget: "_blank",
    secondaryCtaLabel: "Contact Sales",
    secondaryCtaRoute: "/contact-neevcloud",
    secondaryCtaVariant: "outline",
  },
];
