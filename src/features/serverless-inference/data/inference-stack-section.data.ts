import type { FeatureCardProps } from "@/shared/components/feature-card";
import { Bot, ScrollText, SearchCode } from "@/shared/icons/lucide-icon-map";

export const INFERENCE_STACK_SECTION_FEATURES: FeatureCardProps[] = [
  {
    title: "Chatbots & Assistants",
    description:
      "Build production-grade conversational AI into any product. Stream responses in real time with our SSE endpoint.",
    lucideIcon: Bot,
  },
  {
    title: "Semantic Search",
    description:
      "Generate embeddings and power vector-based search across your knowledge base or product catalog.",
    lucideIcon: SearchCode,
  },
  {
    title: "Document Intelligence",
    description:
      "Extract, summarize, and classify documents at scale. Process thousands of PDFs or contracts per hour.",
    image: "/icons/brain.svg",
  },
  {
    title: "Code Generation",
    description:
      "Integrate coding assistance and automated code review into your IDE or CI pipeline.",
    image: "/icons/code-generation.svg",
  },
  {
    title: "Content Moderation",
    description:
      "Classify user-generated content in real time. Low latency, high throughput, fully logged.",
    lucideIcon: ScrollText,
  },
  {
    title: "Agentic Pipelines",
    description:
      "Build multi-step reasoning agents with tool-use and structured output support.",
    image: "/icons/agentic-pipeline.svg",
  },
];
