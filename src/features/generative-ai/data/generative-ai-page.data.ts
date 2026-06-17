import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const GENERATIVE_AI_HERO = {
  badgeText: "Generative AI",
  description:
    "From RAG pipelines to multimodal applications, the GPU compute layer your product needs to ship and scale.",
  primaryCta: "Build with NeevCloud",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "See GenAI Templates",
  secondaryCtaRoute: EXTERNAL_LINKS.templates,
  secondaryCtaTarget: "_blank",
  image: "/images/webp/model-api.webp",
  trustBadges: [
    "One-click deployment",
    "Production inference",
    "RAG-ready",
    "Elastic scaling",
    "India-native data",
  ],
} as const;

export const GENERATIVE_AI_FOOTER = {
  title: "Build Your GenAI Product Today",
  description:
    "Launch production-ready GenAI applications with one-click deployments, elastic scaling, and India-native infrastructure. No minimum commitment.",
  primaryCta: "Build with NeevCloud",
  primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  primaryCtaTarget: "_blank",
  secondaryCta: "See GenAI Templates",
  secondaryCtaRoute: EXTERNAL_LINKS.templates,
  secondaryCtaTarget: "_blank",
} as const;
