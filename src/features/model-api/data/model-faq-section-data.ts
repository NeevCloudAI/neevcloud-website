import type { FaqItem } from "../../../shared/data/faq-section-types";
export const  MODEL_API_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "How quickly can I start using the API?",
    answer:
      "Most accounts receive instant access. Sign up, get your API key, and make your first request within minutes.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "What happens if I exceed my rate limits?",
    answer:
      "Requests beyond your limit receive clear error responses. Upgrade your plan or contact us for temporary increases during traffic spikes.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I use these APIs in production?",
    answer:
      "Yes. Our APIs are production-ready with SLA guarantees, monitoring, and 24x7 support for paid plans.",
  },
  {
    id: 4,
    category: "Billing",
    question: "Do you support custom model deployments?",
    answer:
      "Enterprise customers can deploy custom models through our API infrastructure. Contact sales to discuss requirements.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "What's your data retention policy?",
    answer:
      "We don't store your input data or model outputs beyond temporary processing. Logs contain metadata only, not sensitive content.",
  },
];
