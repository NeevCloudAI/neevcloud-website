import type { FaqItem } from "../../../shared/data/faq-section-types";
export const MODEL_PLAYGROUND_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "Do I need an account to use the Playground?",
    answer:
      "No. The Playground is open to everyone without signing upsignup. Just visit and start testing models immediately.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Are my test inputs stored or shared?",
    answer:
      "No. We don't store your inputs, outputs, or uploaded files beyond the active session. Your test data remains private.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "What's the daily usage limit?",
    answer:
      "Free access includes 100 requests per day per model category and 50 file uploads daily. Create an account for higher limits.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How do I move from Playground to production?",
    answer:
      "Request API access to use the same models in your applications. The Playground helps you test before integrating through our API.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Can I compare multiple models at once?",
    answer:
      "Yes. The Playground supports side-by-side testing, allowing you to compare performance and quality across different models.",
  },
];
