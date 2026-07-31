import type { FaqItem } from "@/shared/data/faq-section-types";

export const VISIT_PLATFORM_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "Do I need a credit card to access the console?",
    answer:
      "No. Create an account and explore the platform without payment information. Add billing details when ready to deploy paid resources.",
  },
  {
    id: 2,
    category: "API",
    question: "Can I access the platform via API?",
    answer:
      "Yes. Full API and CLI tools available for programmatic infrastructure management. Documentation includes API reference and examples.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Is there a mobile app?",
    answer:
      "The console is web-based and mobile-responsive. Access and manage infrastructure from any device with a browser.",
  },
  {
    id: 4,
    category: "Getting Started",
    question: "Where is the documentation?",
    answer:
      "Complete documentation available at docs.neevcloud.com covering onboarding, deployment, API usage, and best practices.",
  },
  {
    id: 5,
    category: "Support",
    question: "How do I get support while using the platform?",
    answer:
      "In-console support chat, email support@neevcloud.com, or browse documentation. Enterprise customers receive dedicated support channels.",
  },
];
