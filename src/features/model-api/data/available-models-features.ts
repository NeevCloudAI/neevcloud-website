export type FeatureCard = {
  index: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
};

export const AVAILABLE_MODELS_FEATURES: FeatureCard[] = [
  {
    index: "01",
    badge: "Production-ready from day one",
    title: "Models That Just Work.",
    description:
      "All API models are tested, optimized, and monitored in production. We handle scaling, versioning, and performance. Just send a request and get a reliable prediction.",
    features: ["Versioned endpoints", "Canary rollouts", "24×7 on-call"],
  },
  {
    index: "02",
    badge: "Simple Integration, Powerful Results",
    title: "Standard REST APIs",
    description:
      "Our RESTful APIs use JSON and work with any language that supports HTTP requests. Simple API key authentication, clear errors, and transparent rate limits make integration fast and friction-free.",
    features: ["OpenAI-compatible", "JSON over HTTP", "Python, JS, Go, cURL"],
  },
  {
    index: "03",
    badge: "Scale Without Thinking About It",
    title: "10 to 10 million requests.",
    description:
      "One endpoint handles everything, from your first test to millions of daily predictions. Auto-scaling and usage-based pricing ensure seamless performance without infrastructure hassles.",
    features: [
      "Auto-scales instantly",
      "Usage-based pricing",
      "No pre-provisioning",
    ],
  },
];
