import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const AGENTIC_WORKFLOW_HERO = {
  badgeText: "Agentic Workflow",
  description:
    "Run multi-step, multi-model agent pipelines on reliable, low-latency GPU compute-without managing the cluster.",
  primaryCta: "Deploy Your Agent Stack",
  primaryCtaRoute: EXTERNAL_LINKS.aiAgentsOverview,
  secondaryCta: "Talk to an Engineer",
  secondaryCtaRoute: "/contact-neevcloud#contact-form",
  image: "/images/webp/model-api.webp",
  trustBadges: [
    "Container-native",
    "Long-running workloads",
    "API-accessible Inference",
    "Kubernetes-backed",
    "Observability-ready",
  ],
} as const;

export const AGENTIC_WORKFLOW_FOOTER = {
  title: "Deploy Autonomous AI Agents on NeevCloud",
  description:
    "Kubernetes-native infrastructure for multi-step agent pipelines. Container-native deployment, API-accessible inference, and elastic scaling for production agent fleets.",
  primaryCta: "Deploy Your Agent Stack",
  primaryCtaRoute: EXTERNAL_LINKS.aiAgentsOverview,
  secondaryCta: "Talk to an Engineer",
  secondaryCtaRoute: "/contact-neevcloud#contact-form",
} as const;
