import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export type HeroSlide = {
  id: string;
  badge: string;
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
    badge: "Full-Stack AI Infrastructure",
    headlinePrefix: "Full-Stack AI Infrastructure",
    headlineEmphasis: "Built to Scale Fearlessly",
    headlineSuffix: "",
    subtitle:
      "Run AI workloads with sovereign control, security, and scalability.",
    primaryCtaLabel: "Start Building",
    primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
    primaryCtaTarget: "_blank",
    secondaryCtaLabel: "Explore Platform",
    secondaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
    secondaryCtaTarget: "_blank",
    secondaryCtaVariant: "outline",
  },
  {
    id: "project-noun",
    theme: "light",
    badge: "Noun",
    headlinePrefix: "Project Noun The Brain Behind",
    headlineEmphasis: "Your AI Infrastructure",
    headlineSuffix: "",
    subtitle:
      "Intelligent orchestration that optimizes performance, cost, and resource allocation automatically.",
    primaryCtaLabel: "Explore Noun",
    primaryCtaRoute: EXTERNAL_LINKS.projectOrion,
    primaryCtaTarget: "_blank",
    secondaryCtaLabel: "Request Demo",
    secondaryCtaRoute: "/contact-neevcloud",
    secondaryCtaVariant: "white",
  },
  {
    id: "sovereign-security",
    theme: "light",
    badge: "Enterprise Security",
    headlinePrefix: "Secure. Scalable. Sovereign.",
    headlineEmphasis: "Enterprise-Ready AI Cloud",
    headlineSuffix: "",
    subtitle:
      "Build AI applications with compliance-ready infrastructure and complete data sovereignty.",
    primaryCtaLabel: "View Solutions",
    primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
    primaryCtaTarget: "_blank",
    secondaryCtaLabel: "Talk to our experts",
    secondaryCtaRoute: "/contact-neevcloud",
    secondaryCtaVariant: "outline",
  },
  {
    id: "liquid-cooling",
    theme: "light",
    badge: "VARUNA",
    headlinePrefix: "India's First Liquid",
    headlineEmphasis: "Immersion Cooling Facility",
    headlineSuffix: "",
    subtitle:
      "Delivering 100% carbon-neutral operations, up to 10× higher computational density, a 1.03 PUE, and up to 25% lower infrastructure costs. ",
    primaryCtaLabel: "View Solutions",
    primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
    primaryCtaTarget: "_blank",
    secondaryCtaLabel: "Talk to our experts",
    secondaryCtaRoute: "/contact-neevcloud",
    secondaryCtaVariant: "outline",
  },
];
