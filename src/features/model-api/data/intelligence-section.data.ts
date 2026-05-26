import type { IntelligenceCard } from "../types/intelligence-section.types";

export const INTELLIGENCE_CARDS: IntelligenceCard[] = [
  {
    id: "production-ready",
    badgeLabel: "01 / Production-ready from day one",
    title: "Models That Just Work.",
    description:
      "All API models are tested, optimized, and monitored in production. We handle scaling, versioning, and performance. Just send a request and get a reliable prediction.",
    highlights: ["Versioned endpoints", "Canary rollouts", "24x7 on-call"],
  },
  {
    id: "simple-integration",
    badgeLabel: "02 / Simple Integration, Powerful Results",
    title: "Standard REST APIs",
    description:
      "Our RESTful APIs use JSON and work with any language that supports HTTP requests. Simple API key authentication, clear errors, and transparent rate limits make integration fast and friction-free.",
    highlights: ["OpenAI-compatible", "JSON over HTTP", "Python, JS, Go, cURL"],
  },
  {
    id: "scale",
    badgeLabel: "03 / Scale Without Thinking About It",
    title: "10 to 10 million requests.",
    description:
      "One endpoint handles everything, from your first test to millions of daily predictions. Auto-scaling and usage-based pricing ensure seamless performance without infrastructure hassles.",
    highlights: [
      "Auto-scales instantly",
      "Usage-based pricing",
      "No pre-provisioning",
    ],
  },
];
