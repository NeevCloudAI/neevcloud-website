import type { FaqItem } from "@/shared/data/faq-section-types";

export const TRUST_CENTER_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Compliance",
    question: "What certifications does NeevCloud maintain?",
    answer:
      "NeevCloud maintains ISO 27001, SOC 2 Type II, and TIA 942-aligned data center reliability standards. Certifications are independently audited and continuously monitored.",
  },
  {
    id: 2,
    category: "Security",
    question: "How is customer data protected?",
    answer:
      "Data is encrypted at rest and in transit with role-based access controls, network isolation, and audit logging. Infrastructure operates within India under Indian jurisdiction.",
  },
  {
    id: 3,
    category: "Operations",
    question: "Can I view real-time system status?",
    answer:
      "Yes. Live system status shows availability, incidents, maintenance schedules, and historical uptime data. We publish transparent operational information rather than aggregated metrics alone.",
  },
  {
    id: 4,
    category: "Compliance",
    question: "Are audit reports available to customers?",
    answer:
      "SOC 2 Type II audit reports, penetration test summaries, compliance certifications, and security assessments are available to customers under NDA.",
  },
  {
    id: 5,
    category: "Security",
    question: "Where can I find security documentation?",
    answer:
      "Security architecture overviews, data handling policies, access control implementation details, and incident response procedures are available for security teams evaluating NeevCloud.",
  },
] as const;
