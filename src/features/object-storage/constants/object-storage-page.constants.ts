import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const OBJECT_STORAGE_HERO = {
  description:
    "Durable, scalable cloud storage with zero API migration friction, works with every tool you already use. Move datasets, model artifacts, and application data without changing a single line of code.",
  primaryCta: "Explore Object Storage",
  primaryCtaRoute: EXTERNAL_LINKS.zataAi,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Pricing",
  secondaryCtaRoute: EXTERNAL_LINKS.zataAiPricing,
  secondaryCtaTarget: "_blank",
  badgeText: "S3 Compatible Object Storage",
  image: "/images/nvme.png",
  trustBadges: [
    "Full S3 API compatibility",
    "MLOps-ready",
    "India-resident storage",
    "Data sovereignty",
    "99.999% durability",
  ],
} as const;

export const OBJECT_STORAGE_FOOTER = {
  title: "Start Storing with Object Storage",
  description:
    "Durable object storage with full S3 API compatibility. Store datasets, model checkpoints, and artifacts. India-resident with data sovereignty.",
  primaryCta: "Explore Object Storage",
  primaryCtaRoute: EXTERNAL_LINKS.storage,
  primaryCtaTarget: "_blank",
  secondaryCta: "View StoragePricing",
} as const;
