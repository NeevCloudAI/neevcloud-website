import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const ENTERPRISE_STANDARDS_SECTION = {
  titlePrefix: "Meeting",
  titleHighlight: "Enterprise",
  titleSuffix: "Standards",
  description:
    "NeevCloud maintains certifications and compliance controls for enterprise and government requirements.",
} as const;

export const ENTERPRISE_STANDARDS_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "iso-27001",
    label: "ISO 27001 - INDEPENDENTLY AUDITED",
    iconSrc: "/icons/protected.svg",
    iconAlt: "ISO 27001 certification",
    title: "Information Security Management",
    description:
      "International standard for information security management systems.",
    bullets: [
      { id: 1, title: "Managing Sensitive Information" },
      { id: 2, title: "Risk Assessments and Security Controls" },
      { id: 3, title: "Continuous improvement processes" },
      { id: 4, title: "Independent third-party verification" },
    ],
  },
  {
    id: "soc-2-type-ii",
    label: "SOC 2 TYPE II - AICPA STANDARD",
    iconSrc: "/icons/bank.svg",
    iconAlt: "SOC 2 Type II certification",
    title: "Security, Availability, Confidentiality",
    description: "Type II certification includes controls testing over time.",
    bullets: [
      { id: 1, title: "Controls for security and availability" },
      { id: 2, title: "Independent auditor verification" },
      { id: 3, title: "Continuous monitoring and reporting" },
      { id: 4, title: "Trust Services Criteria compliance" },
    ],
  },
  {
    id: "tia-942",
    label: "TIA 942 - INFRASTRUCTURE STANDARD",
    iconSrc: "/icons/file.svg",
    iconAlt: "TIA 942 infrastructure standard",
    title: "Data Center Reliability Standards",
    description:
      "Infrastructure designed for 99.982% availability with concurrent maintainability.",
    bullets: [
      { id: 1, title: "Multiple independent distribution paths" },
      { id: 2, title: "Redundant components throughout" },
      { id: 3, title: "Maintenance without downtime" },
      { id: 4, title: "72-hour power outage protection" },
    ],
  },
] as const;
