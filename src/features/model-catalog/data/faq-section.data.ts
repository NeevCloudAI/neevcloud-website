import type { FaqItem } from "@/shared/data/faq-section-types";

export const MODEL_CATALOG_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What AI models are available on NeevCloud?",
    answer:
      "NeevCloud offers 20+ production-ready language, vision, code, reasoning, and multilingual AI models from leading providers.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Can I test models before deployment?",
    answer:
      "Yes. You can instantly try any available model in the Playground before integrating it into your application.",
  },
  {
    id: 3,
    category: "API",
    question: "Are the APIs OpenAI-compatible?",
    answer:
      "Yes. All models are accessible through OpenAI-compatible APIs, making migration and integration simple.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How is model pricing calculated?",
    answer:
      "Pricing is based on input and output token usage and is displayed transparently for each model.",
  },
  {
    id: 5,
    category: "Compliance",
    question: "Where is my data processed?",
    answer:
      "All model inference runs on infrastructure hosted within India, helping meet data residency and compliance requirements.",
  },
];
