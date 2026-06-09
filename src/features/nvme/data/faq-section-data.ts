import type { FaqItem } from "@/shared/data/faq-section-types";

export const NVME_INSTANCE_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "What happens to data when an instance terminates?",
    answer:
      "Local NVMe storage is ephemeral. Data is permanently deleted when the instance terminates. Copy important checkpoints to network storage before terminating.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Can I attach NVMe storage to running instances?",
    answer:
      "Yes. Additional local NVMe capacity can be provisioned and attached to running instances without downtime.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "How does local NVMe compare to network storage?",
    answer:
      "Local NVMe offers 6–50× better performance with sub-millisecond latency. Network storage provides persistence across instances and shared access capabilities.",
  },
  {
    id: 4,
    category: "Billing",
    question: "Is there a minimum storage requirement?",
    answer:
      "No minimum beyond the included 25GB. Provision additional storage in 1GB increments up to 3.84TB per instance.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "How is billing calculated?",
    answer:
      "Per-second billing for provisioned capacity while the instance is running. No charges when an instance is stopped or terminated. No transfer fees.",
  },
];
