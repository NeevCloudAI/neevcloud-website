import type { FaqItem } from "@/shared/data/faq-section-types";

export const INFERENCE_API_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "How do I get started with the API?",
    answer:
      "Sign up at console.ai.neevcloud.com, create an API key, and make your first request. Free tier includes 2,00,000 tokens/day.",
  },
  {
    id: 2,
    category: "API",
    question: "Is this compatible with OpenAI SDKs?",
    answer:
      "Yes. Change base_url to https://api.neevcloud.com/v1 in your OpenAI SDK configuration. All standard parameters work identically.",
  },
  {
    id: 3,
    category: "Compliance",
    question: "Where is my data processed?",
    answer:
      "Every API request is processed on infrastructure within India. Your prompts and responses never leave Indian infrastructure.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How is billing calculated?",
    answer:
      "Per token—input and output billed separately in INR. Usage tracked in real time. Set spend alerts in the console.",
  },
  {
    id: 5,
    category: "API",
    question: "What happens if I hit rate limits?",
    answer:
      "API returns 429 with retry headers. Implement exponential backoff. Upgrade your plan or request a limit increase for higher quotas.",
  },
];
