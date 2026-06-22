import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const CPU_CLUSTER_HERO = {
  description:
    "Model API gateways, data pipelines, orchestration control planes, and monitoring stacks, every AI deployment needs CPU alongside its GPUs. NeevCloud CPU instances are co-located with GPU clusters in the same private network. No egress charges between them.",
  primaryCta: "Deploy Instance",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Pricing",
  secondaryCtaRoute: "/cpu-cluster#cpu-workload-section",
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
  secondaryCta: "Talk to Our Team",
  secondaryCtaRoute: "/contact-neevcloud#contact-form",
} as const;
