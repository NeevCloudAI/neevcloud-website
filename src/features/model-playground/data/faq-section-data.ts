import type { FaqItem } from "@/shared/data/faq-section-types";

export const PLAYGROUND_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "Do I need an account to use the playground?",
    answer:
      "No. The playground is completely free and requires no signup. Open it in your browser and start testing models immediately.",
  },
  {
    id: 2,
    category: "Privacy",
    question: "Are my prompts and data stored?",
    answer:
      "No. The playground runs in your browser. Prompts and responses are not logged or stored by NeevCloud. Your experiments remain private.",
  },
  {
    id: 3,
    category: "General",
    question: "Can I use playground models in production?",
    answer:
      "The playground is for testing only. For production use, deploy models to AI Inference endpoints with API access and SLA guarantees.",
  },
  {
    id: 4,
    category: "API",
    question: "How do I move from playground to production?",
    answer:
      "Click \"Deploy to Production\" on any model. You'll get an API endpoint instantly. Copy your working prompts and integrate using our SDKs.",
  },
  {
    id: 5,
    category: "General",
    question: "Are there usage limits in the playground?",
    answer:
      "Light rate limits apply to prevent abuse. For unlimited access, use AI Inference API with your account. Playground is designed for experimentation, not production workloads.",
  },
];
