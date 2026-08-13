import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const CPU_CLUSTER_HERO = {
  description:
    "Model API gateways, data pipelines, orchestration control planes, and monitoring stacks, every AI deployment needs CPU alongside its GPUs.",
  primaryCta: "Deploy Instance",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Documentation",
  secondaryCtaTarget: "_blank",
  secondaryCtaRoute: EXTERNAL_LINKS.neevcloudDocs,
  badgeText: "CPU Compute for AI Infrastructure",
  image: "/images/webp/cpu-cluster.webp",
} as const;

export const CPU_CLUSTER_FOOTER = {
  title: "Launch Your First CPU Instance",
  description:
    "Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges.",
  primaryCta: "Configure Now",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Documentation",
  secondaryCtaTarget: "_blank",
  secondaryCtaRoute: EXTERNAL_LINKS.neevcloudDocs,
} as const;
