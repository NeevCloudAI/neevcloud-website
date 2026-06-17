import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const BFSI_HERO = {
  badgeText: "AI Infrastructure for BFSI",
  description:
    "From fraud detection to risk modeling, BFSI workloads demand infrastructure that's secure, compliant, and performant. NeevCloud provides GPU compute and AI infrastructure designed to meet the requirements of banking, fintech, and insurance.",
  primaryCta: "Talk to Sales",
  primaryCtaRoute: "/contact-neevcloud",
  secondaryCta: "View Compliance",
  secondaryCtaRoute: "/privacy-policy",
  image: "/images/bfsi.png",
  trustBadges: [
    "SOC 2 Type II certified",
    "Data sovereignty",
    "Low-latency compute",
    "99.9% uptime SLA",
    "Enterprise support",
  ],
} as const;

export const BFSI_FOOTER = {
  title: "Ready to Run Your First Inference?",
  description:
    "Secure, compliant infrastructure for fraud detection, risk modeling, and financial analytics. SOC 2 certified with data sovereignty guarantees.",
  primaryCta: "Get Free API Key",
  primaryCtaRoute: EXTERNAL_LINKS.apiKeys,
  primaryCtaTarget: "_blank",
  secondaryCta: "Read the Docs",
  secondaryCtaRoute: EXTERNAL_LINKS.documentation,
  secondaryCtaTarget: "_blank",
} as const;
