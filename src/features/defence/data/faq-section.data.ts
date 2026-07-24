import type { FaqItem } from "@/shared/data/faq-section-types";

export const DEFENCE_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question:
      "What compliance and sovereignty guarantees apply to defence workloads?",
    answer:
      "Infrastructure operates exclusively within India under Indian jurisdiction. ISO 27001, SOC 2 Type II, and Uptime Institute Tier III certified. Designed for strategic and classified workload requirements.",
  },
  {
    id: 2,
    category: "Getting Started",
    question:
      "Can infrastructure be deployed air-gapped for classified workloads?",
    answer:
      "Yes. Network-isolated clusters with dedicated physical infrastructure, custom security architectures, and on-site deployment support for maximum segregation.",
  },
  {
    id: 3,
    category: "Getting Started",
    question:
      "What GPU infrastructure is available for defence AI applications?",
    answer:
      "H100, H200, and A100 GPUs available as single instances or multi-GPU clusters.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How is strategic and classified data secured?",
    answer:
      "AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, network isolation, and comprehensive audit logging. SOC 2 Type II certified sovereign infrastructure.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "What engagement models are available for government agencies?",
    answer:
      "On-demand hourly billing, reserved capacity, and dedicated sovereign deployments. Custom agreements for defence research institutions and strategic programmes.",
  },
];
