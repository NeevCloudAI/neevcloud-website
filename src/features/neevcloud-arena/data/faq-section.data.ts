import type { FaqItem } from "@/shared/data/faq-section-types";

export const NEEVCLOUD_ARENA_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "Do I need an account to use ARENA?",
    answer:
      "Model Playground requires no account. Building and running workloads requires creating a free NeevCloud account.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Is ARENA using real production infrastructure?",
    answer:
      "Yes. You're testing on the same GPU configurations, networking, and storage that production workloads use.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I use my own models and data?",
    answer:
      "In guided Build AI workflows, you can upload custom models and datasets to test on NeevCloud infrastructure.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How long does a typical ARENA session take?",
    answer:
      "Model Playground: instant. Guided workload sessions: 15–45 minutes, depending on complexity. Use case exploration: self-paced.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Does using ARENA cost anything?",
    answer:
      "Model Playground is free. Build AI sessions include free credits for testing. Extended testing beyond free credits incurs standard usage charges.",
  },
];
