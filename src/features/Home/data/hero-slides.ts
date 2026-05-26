export type HeroSlide = {
  id: string;
  theme: "light" | "dark";
  headlinePrefix: string;
  headlineEmphasis: string;
  headlineSuffix: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaVariant: "outline" | "white";
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "full-stack-ai",
    theme: "light",
    headlinePrefix: "Full-Stack",
    headlineEmphasis: "AI Infrastructure",
    headlineSuffix: "Built to Scale Fearlessly",
    subtitle: "Run AI workloads with sovereign control, security, and scalability.",
    primaryCtaLabel: "Explore Platform",
    secondaryCtaLabel: "Contact Sales",
    secondaryCtaVariant: "outline",
  },
  {
    id: "project-noun",
    theme: "dark",
    headlinePrefix: "Project Noun:",
    headlineEmphasis: "The Brain Behind Your AI Infrastructure",
    headlineSuffix: "",
    subtitle: "Provision high-performance GPU clusters with dependable uptime.",
    primaryCtaLabel: "Explore Platform",
    secondaryCtaLabel: "Contact Sales",
    secondaryCtaVariant: "white",
  },
  {
    id: "full-stack-ai-2",
    theme: "light",
    headlinePrefix: "Full-Stack",
    headlineEmphasis: "AI Infrastructure",
    headlineSuffix: "Built to Scale Fearlessly",
    subtitle: "Run AI workloads with sovereign control, security, and scalability.",
    primaryCtaLabel: "Explore Platform",
    secondaryCtaLabel: "Contact Sales",
    secondaryCtaVariant: "outline",
  },
];

