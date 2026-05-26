import type { UseModelCardData } from "@/shared/types/use-model-card.types";

export const USE_MODEL_CARDS: readonly UseModelCardData[] = [
  {
    id: "model-playground",
    title: "Model Playground",
    description: "Test models interactively without code.",
    features: [
      { label: "Cost", value: "Free Forever", highlighted: true },
      { label: "Setup Time", value: "< 30 Seconds", highlighted: true },
      { label: "Models Available", value: "20+" },
      { label: "Code Required", value: "None" },
      { label: "Best For", value: "Exploration & Testing" },
    ],
    ctaLabel: "Try in playground",
    ctaVariant: "primary",
    footnote: "Free, no signup required.",
  },
  {
    id: "serverless-inference",
    title: "Serverless Inference",
    description: "Pay-per-token API, Instant Scaling.",
    features: [
      { label: "Billing", value: "Per token · INR", highlighted: true },
      { label: "Compatibility", value: "OpenAI SDK" },
      { label: "Integration", value: "1 Line Change", highlighted: true },
      { label: "Scaling", value: "Automatic", highlighted: true },
      { label: "Best For", value: "Startups & Builders" },
    ],
    ctaLabel: "Get API Key",
    ctaVariant: "black",
    footnote: "Free tier · no credit card to start",
  },
  {
    id: "dedicated-deployment",
    title: "Dedicated Deployment",
    description: "Reserved GPU capacity, custom SLAs.",
    features: [
      { label: "Capacity", value: "Reserved GPU", highlighted: true },
      { label: "Performance", value: "Guaranteed SLA", highlighted: true },
      { label: "Customization", value: "Full control", highlighted: true },
      { label: "Support", value: "Dedicated Team" },
      { label: "Best For", value: "Enterprise workloads" },
    ],
    ctaLabel: "Contact Sales",
    ctaVariant: "outline",
    footnote: "Enterprise consultation included",
  },
] as const;
