import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const DEFENCE_HERO = {
  badgeText: "National Security & Defence",
  description:
    "Defence and strategic workloads require infrastructure that guarantees complete data sovereignty, operates under Indian jurisdiction, and provides total isolation from foreign-controlled systems. NeevCloud delivers indigenous AI infrastructure designed for national security requirements.",
  primaryCta: "Talk to Sales",
  primaryCtaRoute: "/contact-neevcloud",
  secondaryCta: "View Compliance",
  image: "/images/defence.png",
  trustBadges: [
    "Data residency in India",
    "DPDP Act compliant",
    "SOC 2 Type II",
    "Data never used for training",
    "99.9% uptime SLA",
  ],
} as const;

export const DEFENCE_FOOTER = {
  title: "Deploy Sovereign AI for National Security",
  description:
    "Indigenous GPU infrastructure for intelligence, autonomous systems, and strategic applications. Complete data sovereignty with air-gapped deployment options.",
  primaryCta: "Talk to Sales",
  primaryCtaRoute: "/contact-neevcloud",
  secondaryCta: "View Compliance",
  secondaryCtaRoute: EXTERNAL_LINKS.documentation,
  secondaryCtaTarget: "_blank",
} as const;
