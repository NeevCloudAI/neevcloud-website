import type { FaqItem } from "@/shared/data/faq-section-types";

export const OBJECT_STORAGE_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "API",
    question: "Is this fully S3-compatible?",
    answer:
      "Yes. Standard S3 API with support for boto3, AWS CLI, s3cmd, rclone, and all major S3 SDKs. Change only the endpoint URL in your existing code.",
  },
  {
    id: 2,
    category: "Storage",
    question: "How durable is object storage?",
    answer:
      "99.999999999% (11 nines) durability with multi-replica storage across availability zones. Data is redundantly stored to survive hardware failures.",
  },
  {
    id: 3,
    category: "API",
    question: "Can I use this with ML frameworks?",
    answer:
      "Yes. PyTorch, TensorFlow, Hugging Face, and other frameworks support S3-compatible storage for datasets, checkpoints, and model artifacts.",
  },
  {
    id: 4,
    category: "Compliance",
    question: "Where is data stored?",
    answer:
      "All object storage operates within India. Data never leaves Indian infrastructure and remains under Indian jurisdiction.",
  },
  {
    id: 5,
    category: "Billing",
    question: "How is billing calculated?",
    answer:
      "Per GB stored per month, calculated daily. No minimum duration charges. Billed only for actual storage used with per-second granularity.",
  },
];
