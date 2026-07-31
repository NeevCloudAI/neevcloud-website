import type { FaqItem } from "@/shared/data/faq-section-types";

export const NEEVCLOUD_ARENA_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "Do I need an account to use ARENA?",
    answer:
      "Model Playground requires no account. Building and running workloads requires creating a free NeevCloud account.",
  },
  {
    id: 2,
    category: "General",
    question: "Is ARENA using real production infrastructure?",
    answer:
      "Yes. You're testing on the same GPU configurations, networking, and storage that production workloads use.",
  },
  {
    id: 3,
    category: "General",
    question: "Can I use my own models and data?",
    answer:
      "In guided Build AI workflows, you can upload custom models and datasets to test on NeevCloud infrastructure.",
  },
  {
    id: 4,
    category: "Getting Started",
    question: "How long does a typical ARENA session take?",
    answer:
      "Model Playground: instant. Guided workload sessions: 15–45 minutes, depending on complexity. Use case exploration: self-paced.",
  },
  {
    id: 5,
    category: "Billing",
    question: "Does using ARENA cost anything?",
    answer:
      "Model Playground is free. Build AI sessions include free credits for testing. Extended testing beyond free credits incurs standard usage charges.",
  },
];
