import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const SERVERLESS_INFERENCE_HERO = {
  description:
    "NeevCloud Serverless Inference gives you instant API access to 20+ production-ready open-source models. OpenAI-compatible, sub-50ms latency, billed in INR, with every request processed India.",
  primaryCta: "Try in Playground",
  primaryCtaRoute: EXTERNAL_LINKS.aiInferenceOverview,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Pricing",
  secondaryCtaRoute: "/ai-inference#ai-inference-transparent-pricing-section",
  badgeText: "India's Sovereign Inference Cloud",
  // image: "/images/webp/model-api.webp",
} as const;

export const SERVERLESS_INFERENCE_FOOTER = {
  title: "Ready to Run Your First Inference?",
  description:
    "Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges.",
  primaryCta: "Get Free API Key",
  primaryCtaRoute: EXTERNAL_LINKS.apiKeys,
  primaryCtaTarget: "_blank",
  secondaryCta: "Read the Docs",
  secondaryCtaRoute: EXTERNAL_LINKS.inferenceDocs,
  secondaryCtaTarget: "_blank",
} as const;
