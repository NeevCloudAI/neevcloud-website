import type { FaqItem } from "@/shared/data/faq-section-types";

export const DEFENCE_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Compliance",
    question: "Is infrastructure completely sovereign?",
    answer:
      "Yes. 100% Indian-owned infrastructure operating within India under Indian jurisdiction. No foreign dependencies or cross-border data transmission.",
  },
  {
    id: 2,
    category: "Security",
    question: "Can we deploy air-gapped environments?",
    answer:
      "Yes. Fully air-gapped deployments with complete network isolation available. Dedicated physical infrastructure with no internet connectivity.",
  },
  {
    id: 3,
    category: "Compliance",
    question: "What certifications does NeevCloud hold?",
    answer:
      "ISO 27001, SOC 2 Type II, Uptime Institute Tier III, GDPR compliance. Security documentation available for procurement and compliance review.",
  },
  {
    id: 4,
    category: "General",
    question: "What GPU infrastructure is available?",
    answer:
      "H100, H200, A100 GPUs as single instances, multi-GPU clusters, or dedicated infrastructure. Custom configurations for specific requirements.",
  },
  {
    id: 5,
    category: "General",
    question: "How do we engage for defence applications?",
    answer:
      "Contact us directly for requirements discussion. We work with defence organizations, research institutions, and strategic sector entities under appropriate agreements.",
  },
];
