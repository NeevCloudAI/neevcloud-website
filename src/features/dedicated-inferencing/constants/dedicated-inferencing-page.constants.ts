import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const DEDICATED_INFERENCING_HERO = {
  description:
    "Reserve a GPU instance just for your deployment. Your model runs on hardware that is not shared with other users, so the endpoint stays warm, predictable, and ready.",
  primaryCta: "Deploy Now",
  primaryCtaRoute: EXTERNAL_LINKS.aiInferenceDedicatedModel,
  primaryCtaTarget: "_blank",
  badgeText: "Dedicated Inferencing",
  image: "/images/webp/dedicated-inerencing.webp",
  trustBadges: [
    "Always On Warm Endpoint",
    "Zero Cold Starts",
    "Full VRAM Isolation",
    "Hourly Billing",
  ],
} as const;

export const DEDICATED_INFERENCING_FOOTER = {
  title: "Ready to Reserve Your Dedicated GPU?",
  description:
    "Deploy a reserved inference endpoint in minutes and keep your models always on, never cold.",
  primaryCta: "Deploy Now",
  primaryCtaRoute: EXTERNAL_LINKS.aiInferenceDedicatedModel,
  primaryCtaTarget: "_blank",
} as const;
