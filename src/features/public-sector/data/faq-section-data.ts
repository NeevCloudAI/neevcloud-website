import type { FaqItem } from "@/shared/data/faq-section-types";

export const GOVERNMENT_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Compliance",
    question: "Where is NeevCloud infrastructure located?",
    answer:
      "Infrastructure operates within India. All computing and storage resources are located within national boundaries under Indian jurisdiction.",
  },
  {
    id: 2,
    category: "Compliance",
    question: "What compliance certifications does NeevCloud hold?",
    answer:
      "SOC 2 Type II, ISO 27001, and alignment with MeitY cybersecurity guidelines. Documentation available for procurement reviews.",
  },
  {
    id: 3,
    category: "Compliance",
    question: "Can we meet data residency requirements?",
    answer:
      "Yes. Infrastructure operates within India with guarantees that data remains within national boundaries. Data sovereignty is architectural, not contractual.",
  },
  {
    id: 4,
    category: "General",
    question: "How does NeevCloud support India AI Mission objectives?",
    answer:
      "Through indigenous infrastructure, accessible pricing for the public sector, government-ready compliance, and technical support for government AI initiatives.",
  },
  {
    id: 5,
    category: "General",
    question: "What engagement models work for government projects?",
    answer:
      "Pilot programs, phased rollouts, multi-year agreements, and pricing accommodating public sector budgets. We work within government procurement structures.",
  },
];
