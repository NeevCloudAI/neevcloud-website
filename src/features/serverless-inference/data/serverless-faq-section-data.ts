import type { FaqItem } from "../../../shared/data/faq-section-types";

export const SERVERLESS_INFERENCE_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "What models are available?",
    answer:
      "20+ open-source models across chat, code, vision, and embeddings. New models are added regularly. View the full list at /models.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Is this OpenAI-compatible?",
    answer:
      "Yes. Fully compatible with /v1/chat/completions, /v1/embeddings, and /v1/images/generations. One-line switch from OpenAI SDK.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Is my data used for training?",
    answer:
      "No. NeevCloud does not use your API requests or outputs to train or fine-tune any model.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How is billing calculated?",
    answer:
      "Per token, input and output are billed separately in INR. Usage tracked in real time. Set spend alerts in the console.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Can I pin a model version?",
    answer:
      "Yes. Use model@version syntax to pin to a specific version and avoid unexpected changes.",
  },
];
