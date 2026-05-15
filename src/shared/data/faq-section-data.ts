import type { FaqItem } from "./faq-section-types";

export const CPU_CLUSTER_FAQ_ITEMS: FaqItem[] = [
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
