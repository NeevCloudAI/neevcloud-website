import type { FaqItem } from "@/shared/data/faq-section-types";

export const ABOUT_US_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: 'What does "Neev" mean?',
    answer:
      "Neev means foundation in Hindi. We're building the foundational infrastructure that makes AI development possible.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How quickly can I start using NeevCloud?",
    answer:
      "Create an account, add payment method, launch your first GPU or API call, usually under 5 minutes. No sales calls or approval workflows required.",
  },
  {
    id: 3,
    category: "General",
    question: "Who owns NeevCloud?",
    answer:
      "NeevCloud is an Indian-owned private company. We're building infrastructure within India while serving customers globally.",
  },
  {
    id: 4,
    category: "General",
    question: "How does NeevCloud differ from AWS, GCP, or Azure?",
    answer:
      "We focus specifically on AI workloads with full-stack ownership, transparent pricing, and data sovereignty. What you build on NeevCloud runs anywhere.",
  },
  {
    id: 5,
    category: "Compliance",
    question: "Is NeevCloud affiliated with the Indian government?",
    answer:
      "No. We're a private company whose infrastructure happens to align with India AI Mission objectives around accessible, indigenous AI infrastructure.",
  },
];
