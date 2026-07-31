import type { FaqItem } from "@/shared/data/faq-section-types";

export const AI_INFERENCE_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "Can I deploy custom fine-tuned models?",
    answer:
      "Yes. Upload your fine-tuned weights (HuggingFace format, LoRA adapters, GGUF) and we'll deploy them as managed endpoints. Same API, your custom model.",
  },
  {
    id: 2,
    category: "Billing",
    question: "How does pricing compare to OpenAI?",
    answer:
      "Competitive pricing in INR with transparent token-based billing. Free tier: 2,00,000 tokens/day. Volume discounts above 10M tokens/month. No hidden fees.",
  },
  {
    id: 3,
    category: "Performance",
    question: "What's the latency for inference?",
    answer:
      "Sub-50ms time to first token for most models. Optimized GPU serving with vLLM or TGI backends. Auto-scaling maintains performance under load.",
  },
  {
    id: 4,
    category: "Compliance",
    question: "Where are inference requests processed?",
    answer:
      "All inference happens on India-resident infrastructure. Model weights, requests, and responses never leave Indian servers. DPDP Act compliant.",
  },
  {
    id: 5,
    category: "General",
    question: "Can I switch between models?",
    answer:
      "Yes. Deploy multiple models with separate endpoints. Route requests dynamically or A/B test models. Change models anytime without code changes.",
  },
];
