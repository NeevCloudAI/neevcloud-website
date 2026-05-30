import type { FaqItem } from "@/shared/data/faq-section-types";

export const HEALTHCARE_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "What compliance certifications does NeevCloud hold?",
    answer:
      "ISO 27001, SOC 2 Type II, Uptime Institute Tier III, and GDPR compliance. Infrastructure designed to support HIPAA technical safeguards.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Can we process protected health information (PHI)?",
    answer:
      "Yes, infrastructure includes encryption, access controls, and audit logging supporting HIPAA compliance. Business Associate Agreements available for covered entities.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "What GPUs are available for medical imaging AI?",
    answer:
      "H100, H200, and A100 GPUs optimized for deep learning. Single instances or multi-GPU clusters with InfiniBand networking for distributed training.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How is medical data secured?",
    answer:
      "AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, network isolation, and comprehensive audit logging. SOC 2 Type II certified infrastructure.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "What pricing models support research budgets?",
    answer:
      "On-demand hourly billing and reserved capacity discounts. Academic pricing available for university medical centers and research institutions.",
  },
];
