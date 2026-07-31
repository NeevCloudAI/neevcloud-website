import type { FaqItem } from "@/shared/data/faq-section-types";

export const DEDICATED_INFERENCING_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What is Dedicated Inferencing?",
    answer:
      "A reserved GPU instance dedicated entirely to your model. Because the hardware isn't shared, your endpoint stays warm and delivers predictable latency for production workloads.",
  },
  {
    id: 2,
    category: "Performance",
    question: "Are there cold starts?",
    answer:
      "No. Your model stays loaded in GPU memory, so the endpoint is ready the moment a request arrives.",
  },
  {
    id: 3,
    category: "General",
    question: "Can I deploy my own model?",
    answer:
      "Yes. Deploy from the Model Catalogue or bring your own Hugging Face model, including private or gated repositories, on isolated hardware.",
  },
  {
    id: 4,
    category: "Getting Started",
    question: "What can I configure at deploy time?",
    answer:
      "Maximum context length, maximum concurrent requests, GPU type and count, and extra arguments for custom serving setups.",
  },
  {
    id: 5,
    category: "Billing",
    question: "How does billing work?",
    answer:
      "You pay by the hour for the reserved GPU instance, not per request. Billing starts when provisioning begins and stops when you delete the deployment.",
  },
  {
    id: 6,
    category: "General",
    question: "How is this different from Serverless GPU?",
    answer:
      "Dedicated Inferencing keeps a reserved GPU always warm for steady, latency-sensitive workloads. Serverless GPU scales to zero and bills per minute, which suits bursty or intermittent traffic.",
  },
  {
    id: 7,
    category: "General",
    question: "What workloads is it best for?",
    answer:
      "Production apps with latency SLAs, continuous high-throughput pipelines, large models needing full VRAM, private/gated models, custom serving setups, and always-on assistants.",
  },
];
