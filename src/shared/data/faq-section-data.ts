import type { FaqItem } from "./faq-section-types";

export const CPU_CLUSTER_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "Can CPU instances talk to GPU instances without egress charges?",
    answer:
      "Yes. CPU and GPU instances in the same region share a private network. Inter-instance traffic is free with no bandwidth limits.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How quickly can I launch a CPU instance?",
    answer:
      "CPU instances deploy within 1–2 minutes. Select your configuration, choose an OS image, and launch. Instance is ready when status shows 'Running'.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I resize instances after launch?",
    answer:
      "Yes. Stop the instance, change the instance type, and restart. Your data on persistent storage remains intact.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What's included in the hourly price?",
    answer:
      "vCPU, RAM, ephemeral storage, DDoS protection, and private networking. Persistent storage and floating IPs billed separately.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Do you support autoscaling?",
    answer:
      "Yes. Use our API or Kubernetes integration to scale CPU instances based on load. Perfect for batch jobs and traffic spikes.",
  },
];

export const GPU_CLUSTER_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "How quickly can I launch a GPU instance?",
    answer:
      "Available GPUs deploy within 2–5 minutes. Select your GPU, configure storage, and launch. Instances are ready when status shows 'Running.'",
  },
  {
    id: 2,
    category: "Billing",
    question: "What's included in the hourly price?",
    answer:
      "GPU compute, vCPU, RAM, InfiniBand networking, DDoS protection, and pre-built ML images. Persistent storage billed separately.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Can I switch between GPUs?",
    answer:
      "Yes. Stop your current instance, launch a new one with a different GPU, and attach your persistent storage to continue work.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What happens when my reserved plan ends?",
    answer:
      "Instance automatically switches to on-demand pricing. You'll receive notification 7 days before plan expiry.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Is data kept within India?",
    answer:
      "Yes. All infrastructure operates within India. Your data never leaves Indian data centers unless you explicitly transfer it out.",
  },
];

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

export const MODEL_API_FAQ_ITEMS: readonly FaqItem[] = [
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

