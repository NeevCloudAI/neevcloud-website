import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const TRANSPARENT_OPERATIONS_SECTION = {
  title: "Transparent Operations",
  description:
    "We believe trust comes from transparency about how infrastructure actually operates.",
} as const;

export const TRANSPARENT_OPERATIONS_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "real-time-status",
    label: "01",
    iconSrc: "/icons/real-time.svg",
    iconAlt: "Real-time status monitoring",
    title: "Real-Time Status",
    description:
      "Live system status showing availability, incidents, and maintenance schedules. No hiding behind aggregated uptime numbers.",
    bulletsHeading: "WHAT YOU SEE",
    bullets: [
      { id: 1, title: "Current system status" },
      { id: 2, title: "Recent incidents and resolution" },
      { id: 3, title: "Scheduled maintenance windows" },
      { id: 4, title: "Historical uptime data" },
    ],
  },
  {
    id: "security-documentation",
    label: "02",
    iconSrc: "/icons/security-docs.svg",
    iconAlt: "Security documentation",
    title: "Security Documentation",
    description:
      "Complete documentation of security controls, practices, and policies. Technical details for security teams evaluating infrastructure.",
    bulletsHeading: "AVAILABLE DOCUMENTATION",
    bullets: [
      { id: 1, title: "Security architecture overview" },
      { id: 2, title: "Data handling and encryption" },
      { id: 3, title: "Access control implementation" },
      { id: 4, title: "Incident response procedures" },
    ],
  },
  {
    id: "third-party-audits",
    label: "03",
    iconSrc: "/icons/file.svg",
    iconAlt: "Third-party audit reports",
    title: "Third-Party Audits",
    description:
      "Independent verification of security controls and compliance. Audit reports available to customers under NDA.",
    bulletsHeading: "AVAILABLE REPORTS",
    bullets: [
      { id: 1, title: "SOC 2 Type II audit reports" },
      { id: 2, title: "Penetration test summaries" },
      { id: 3, title: "Compliance certifications" },
      { id: 4, title: "Security assessments" },
    ],
  },
] as const;
