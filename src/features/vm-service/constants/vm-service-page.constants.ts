import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const VM_SERVICE_HERO = {
  description:
    "Deploy Linux VMs alongside GPU infrastructure — shared networking, storage, and security policies on one platform. Perfect for data preprocessing, APIs, and databases running next to your GPU workloads.",
  primaryCta: "Launch a VM",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  secondaryCta: "View Pricing",
  secondaryCtaRoute: "/cpu-pricing",
  badgeText: "VM Service",
  trustBadges: [
    "One Unified Platform",
    "Optional GPU Attachment",
    "Per-Minute Billing",
    "Full Root Access",
  ],
} as const;

export const VM_SERVICE_FOOTER = {
  title: "Ready to Launch Your VM?",
  description:
    "Deploy general-purpose Linux VMs on the same platform as your GPU workloads — no separate cloud, no added latency.",
  primaryCta: "Launch a VM",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  secondaryCta: "View Pricing",
  secondaryCtaRoute: "/cpu-pricing",
} as const;
