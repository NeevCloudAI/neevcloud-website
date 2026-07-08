import type { StackAccordionItem } from "../types/stack-accordion.types";

export const STACK_SECTION = {
  title: "One Vertical Stack. Silicon to endpoint.",
  subtitle:
    "Deploy AI on infrastructure designed for scale, resilience, and speed.",
} as const;

// Only "AI Service" is detailed in the Paper design; the other tiers show as
// collapsed rows. TODO: add real headings + features for the remaining tiers.
export const STACK_ACCORDION_ITEMS: StackAccordionItem[] = [
  {
    id: "ai-service",
    label: "AI Service",
    heading:
      "AI Service: Inference Endpoints, Fine-Tuning, And A Unified Prompt Engineering Workbench.",
    features: [
      {
        icon: "cpu",
        text: "Serverless Inference. Spin up inference endpoints on demand with low-latency routing and autoscaling.",
      },
      {
        icon: "playground",
        text: "Model Playground. Iterate on prompts and parameters in an interactive sandbox, then ship to production.",
      },
      {
        icon: "api",
        text: "Model APIs. Production-ready, type-safe API endpoints for streaming, batching, and reliability.",
      },
    ],
  },
  {
    id: "platform-services",
    label: "Platform Services",
    heading: "Platform Services",
    features: [],
  },
  {
    id: "infrastructure-services",
    label: "Infrastructure Services",
    heading: "Infrastructure Services",
    features: [],
  },
  {
    id: "infinite-infrastructure",
    label: "Infinite Infrastructure",
    heading: "Infinite Infrastructure",
    features: [],
  },
];
