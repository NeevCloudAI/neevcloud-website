export type ExploreApiStep = {
  badgeLabel: string;
  title: string;
  description: string;
};

export const EXPLORE_API_STEPS: ExploreApiStep[] = [
  {
    badgeLabel: "Step 1 - Get API Credentials",
    title: "Request Access and Receive Your Key",
    description:
      "Sign up for API access and receive your authentication credentials instantly. API keys work immediately, no waiting for approval or manual provisioning.",
  },
  {
    badgeLabel: "Step 2 - Choose Your Model",
    title: "Browse available Models",
    description:
      "Pick from text, vision, and audio models. Every model card lists capabilities, latency, pricing, and example payloads.",
  },
  {
    badgeLabel: "Step 3 - Make Your First Request",
    title: "Send Data, Get Predictions",
    description:
      "A single POST to /v1/predict with your model name and input. Streaming, batching, and async webhooks supported out of the box.",
  },
  {
    badgeLabel: "Step 4 - Handle Responses",
    title: "Structured, Predictable Output",
    description:
      "API responses include the prediction plus useful metadata: confidence scores, processing time, model version, and request ID for debugging.",
  },
] as const;
