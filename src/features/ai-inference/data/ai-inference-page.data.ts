import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const AI_INFERENCE_HERO = {
  badgeText: "AI Inference",
  description:
    "Managed inference endpoints with low latency, OpenAI-compatible APIs, and India-resident infrastructure, no platform team needed.",
  primaryCta: "Deploy Your Model",
  primaryCtaRoute: EXTERNAL_LINKS.aiInferenceDedicatedModel,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Inference Pricing",
  secondaryCtaRoute: "/ai-inference#ai-inference-transparent-pricing-section",
  trustBadges: [
    "OpenAI-compatible API",
    "Managed infrastructure",
    "Optimized serving",
    "Custom models",
    "Pay per token",
  ],
} as const;

export const AI_INFERENCE_FOOTER = {
  title: "Deploy Your Model to Production",
  description:
    "Flexible CPU compute for data preprocessing, APIs, databases, and orchestration. Deploy in 60 seconds with transparent per-hour pricing.",
  primaryCta: "Deploy Instance",
  primaryCtaRoute: EXTERNAL_LINKS.aiInferenceDedicatedModel,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Configurations",
  secondaryCtaRoute: "/ai-inference#ai-inference-transparent-pricing-section",
} as const;
