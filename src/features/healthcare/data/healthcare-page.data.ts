import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const HEALTHCARE_HERO = {
  badgeText: "Healthcare",
  description:
    "From medical imaging to drug discovery, healthcare AI requires infrastructure that's secure, compliant, and performant. NeevCloud provides GPU compute designed for medical workloads with certifications healthcare organizations need.",
  primaryCta: "Talk to Sales",
  primaryCtaRoute: "/contact-neevcloud",
  secondaryCta: "View Compliance",
  secondaryCtaRoute: "/privacy-policy",
  image: "/images/webp/healthcare.webp",
  trustBadges: [
    "Data residency in India",
    "DPDP Act compliant",
    "SOC 2 Type II",
    "Data never used for training",
    "99.9% uptime SLA",
  ],
} as const;

export const HEALTHCARE_FOOTER = {
  title: "Build the Future of Healthcare AI",
  description:
    "Secure, compliant infrastructure for medical imaging, drug discovery, and healthcare research. ISO 27001 and SOC 2 Type II certified.",
  primaryCta: "Talk to Sales",
  primaryCtaRoute: "/contact-neevcloud",
  secondaryCta: "View Documentation",
  secondaryCtaRoute: EXTERNAL_LINKS.documentation,
  secondaryCtaTarget: "_blank",
} as const;
