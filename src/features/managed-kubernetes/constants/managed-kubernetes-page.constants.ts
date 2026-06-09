import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const MANAGED_KUBERNETES_HERO = {
  description:
    "Deploy inference servers, training pipelines, and multi-tenant ML platforms on GPU-aware Kubernetes. Device plugins pre-installed. InfiniBand configured. Autoscaling included. You deploy pods, we handle the rest.",
  primaryCta: "Deploy Your Cluster",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Documentation",
  badgeText: "GPU-Aware Kubernetes",
  image: "/images/kubernetes.png",
  trustBadges: [
    "Zero manual GPU config",
    "InfiniBand ready",
    "Autoscaling node pools",
    "99.9% control plane SLA",
    "Free control plane",
  ],
} as const;

export const MANAGED_KUBERNETES_FOOTER = {
  title: "Deploy GPU-Aware Kubernetes.",
  description:
    "Create your first cluster with H100, H200, or A100 node pools. Device plugins, InfiniBand, and autoscaling are included. The control plane is free.",
  primaryCta: "Create Cluster",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Documentation",
} as const;
