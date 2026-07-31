import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const LLM_TRAINING_HERO = {
  badgeText: "LLM Fine-Tuning",
  description:
    "Purpose-built GPU infrastructure for domain adaptation, instruction tuning, and RLHF. Bring your framework, we handle the rest.",
  primaryCta: "Start Fine-Tuning",
  primaryCtaRoute: EXTERNAL_LINKS.templates,
  primaryCtaTarget: "_blank",
  secondaryCta: "Browse GPU Configs",
  secondaryCtaRoute: EXTERNAL_LINKS.templates,
  secondaryCtaTarget: "_blank",
  // image: "/images/webp/model-api.webp",
  trustBadges: [
    "H100 & A100 clusters",
    "Multi-node training",
    "Framework agnostic",
    "Fast NVMe I/O",
    "India-resident compute",
  ],
} as const;

export const LLM_TRAINING_FOOTER = {
  title: "Start Fine-Tuning Your Models",
  description:
    "H100 and A100 clusters are ready to launch. Bring your framework, dataset, and training script. We handle infrastructure, storage, and networking.",
  button1Text: "Start Fine-Tuning",
  button1Route: EXTERNAL_LINKS.templates,
  button1Target: "_blank",
  button2Text: "Browse GPU Configs",
  button2Route: EXTERNAL_LINKS.templates,
  button2Target: "_blank",
} as const;
