import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const GPU_CLUSTER_HERO = {
  description:
    "One platform. On-demand, reserved, all on India-sovereign infrastructure. Every instance includes NVMe-attached storage, and pre-built ML images. Live within minutes.",
  primaryCta: "Configure Now",
  primaryCtaRoute: EXTERNAL_LINKS.deployGpu,
  primaryCtaTarget: "_blank",
  secondaryCta: "Compare GPUs",
  secondaryCtaRoute: EXTERNAL_LINKS.aiInferenceDedicatedModel,
  secondaryCtaTarget: "_blank",
  badgeText: "Dedicated GPU - Pay as you go - Billed Per Minute",
  image: "/images/webp/gpu-cluster.webp",
} as const;

export const GPU_CLUSTER_FOOTER = {
  title: "Launch Your First GPU Instance",
  description:
    "Deploy H100, A100, RTX 5090, or other GPUs in minutes. On-demand flexibility or reserved savings.",
  primaryCta: "Configure Now",
  primaryCtaRoute: "/gpu-pricing",
  secondaryCta: "Talk to Our Team",
  secondaryCtaRoute: "/contact-neevcloud#contact-form",
} as const;
