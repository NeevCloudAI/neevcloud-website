import type { FaqItem } from "@/shared/data/faq-section-types";

export const NEEVCLOUD_ARENA_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "What is NeevCloud ARENA?",
    answer:
      "ARENA is a hands-on environment where you test models, run guided workloads, and validate performance on production infrastructure before committing. It replaces documentation tours with direct, real-world experience.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Do I need an account to use ARENA?",
    answer:
      "The Model Playground starts instantly without creating an account. Guided workload experiences and deeper infrastructure testing may require a session, but you can explore capabilities first and commit on your own timeline.",
  },
  {
    id: 3,
    category: "Infrastructure",
    question: "What infrastructure can I test in ARENA?",
    answer:
      "Test on the same production infrastructure your workloads would run on, including H100, A100, and other GPU configurations. Run training, inference, and deployment scenarios with real performance and cost metrics.",
  },
  {
    id: 4,
    category: "Experience",
    question: "What are the three paths in ARENA?",
    answer:
      "TRY AI lets you test models in the browser. BUILD AI runs guided workloads on production GPUs. SEE AI explores real-world applications across industries so you can understand what's possible at scale.",
  },
  {
    id: 5,
    category: "Results",
    question: "Can I share ARENA results with my team?",
    answer:
      "Yes. Generate reports with performance data, cost breakdowns, and recommendations you can share with stakeholders and decision-makers to build confidence before adoption.",
  },
] as const;
