import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const AMBITION_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "sovereignty",
    label: "01 · SOVEREIGNTY",
    iconSrc: "/icons/protected.svg",
    iconAlt: "Sovereignty",
    title: "Data Sovereignty by Design within India",
    description:
      "Infrastructure operates within India under Indian jurisdiction. Data never leaves national boundaries, architecturally guaranteed.",
    bullets: [
      { id: 1, title: "100% India-based infrastructure" },
      { id: 2, title: "Data residency guarantees" },
      { id: 3, title: "Indian jurisdiction compliance" },
      { id: 4, title: "No foreign provider dependencies" },
    ],
  },
  {
    id: "autonomy",
    label: "02 · AUTONOMY",
    iconSrc: "/icons/bank.svg",
    iconAlt: "Sovereignty",
    title: "Independence from Foreign Cloud Providers",
    description:
      "Strategic autonomy matters. NeevCloud offers India-based infrastructure giving public sector organizations full control and independence .",
    bullets: [
      { id: 1, title: "Nationally rooted platform" },
      { id: 2, title: "Indian-operated systems" },
      { id: 3, title: "Complete infrastructure control" },
      { id: 4, title: "Reduced foreign dependency" },
    ],
  },
  {
    id: "compliance",
    label: "03 · COMPLIANCE",
    iconSrc: "/icons/file.svg",
    iconAlt: "Compliance",
    title: "Compliance with Government Standards",
    description:
      "Infrastructure meets government cloud, security, and data protection standards, supporting full public sector compliance and audits.",
    bullets: [
      { id: 1, title: "ISO 27001 -  Info Security" },
      { id: 2, title: "SOC 2 Type II - Availability" },
      { id: 3, title: "Uptime Institute Tier III" },
      { id: 4, title: "GDPR & DPDP Compliant" },
    ],
  },
] as const;
