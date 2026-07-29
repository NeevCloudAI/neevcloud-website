import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const AGENTIC_STUDIO_HERO = {
  description:
    "Fully managed sandbox environments that launch in seconds. Safely run AI agents and untrusted code, create snapshots for reproducibility, and pause sandboxes while preserving disk state.",
  primaryCta: "Start Building",
  primaryCtaRoute: EXTERNAL_LINKS.aiAgentsOverview,
  primaryCtaTarget: "_blank",
  badgeText: "Agentic Studio",
  image: "/images/webp/agentic-studio.webp",
  trustBadges: [
    "Seconds Launch Time",
    "Isolated By Default",
    "Snapshots Built-In",
    "Pausable State Preserved",
  ],
} as const;

export const AGENTIC_STUDIO_FOOTER = {
  title: "Ready to Start Building?",
  description:
    "Launch a secure, isolated sandbox for your AI agents in seconds — no infrastructure to manage.",
  primaryCta: "Start Building",
  primaryCtaRoute: EXTERNAL_LINKS.aiAgentsOverview,
  primaryCtaTarget: "_blank",
} as const;
