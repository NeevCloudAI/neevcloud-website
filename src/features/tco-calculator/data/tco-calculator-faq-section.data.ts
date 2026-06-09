import type { FaqItem } from "@/shared/data/faq-section-types";

export const TCO_CALCULATOR_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Accuracy",
    question: "Is this calculator accurate for my workload?",
    answer:
      "Yes. Uses real pricing data from NeevCloud and public rates from AWS, GCP, and Azure. Configure your exact GPU type, usage hours, and storage needs for an accurate comparison.",
  },
  {
    id: 2,
    category: "Access",
    question: "Do I need to sign up to use the calculator?",
    answer:
      "No. The calculator is completely free and requires no sign-up. Run unlimited scenarios anonymously. Create an account only when ready to deploy.",
  },
  {
    id: 3,
    category: "Pricing",
    question: "Are commitment discounts included?",
    answer:
      "Yes. The calculator shows both on-demand and committed pricing. NeevCloud offers 5-23% discounts for 1-12-month commitments with more flexibility than hyper-scaler reserved instances.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What about data transfer costs?",
    answer:
      "NeevCloud charges zero for data transfer within the India region (between GPUs, CPUs, storage). Other providers charge ₹7-12/GB for egress, adding high hidden costs.",
  },
  {
    id: 5,
    category: "Export",
    question: "Can I export the comparison?",
    answer:
      "Yes. Export full cost breakdown to PDF or CSV. Share with finance, engineering, or leadership teams. Includes all line items and assumptions.",
  },
];
