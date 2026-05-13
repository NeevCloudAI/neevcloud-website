export type ExploreModelsStep = {
  badgeLabel: string;
  title: string;
  description: string;
  features: readonly string[];
};

export const EXPLORE_MODELS_STEPS: readonly ExploreModelsStep[] = [
  {
    badgeLabel: "Browse",
    title: "Choose a Model Category",
    description:
      "Browse available models by category: language, vision, audio, or specialized. Each category shows model descriptions and typical use cases.",
    features: [
      "No signup required to browse",
      "Descriptions for every model",
      "4 categories, 26+ models",
    ],
  },
  {
    badgeLabel: "Select",
    title: "Select a Specific Model",
    description:
      "Within each category, choose a model that matches your needs. Model cards explain capabilities, limitations, and ideal applications.",
    features: [
      "Capabilities & limitations listed",
      "Price shown per 1M tokens (INR)",
      "Free tier models highlighted",
    ],
  },
  {
    badgeLabel: "Run",
    title: "Try It Out",
    description:
      "Enter your input, text, image, audio, or other format, depending on the model. Adjust parameters if desired, then run the model to see results.",
    features: [
      "Text, image, audio inputs supported",
      "Adjustable temperature & params",
      "Latency & token cost shown",
    ],
  },
  {
    badgeLabel: "Compare",
    title: "Iterate and Compare",
    description:
      "Run the same prompt across models or compare outputs side by side. Use metrics and cost to pick the best fit before you commit.",
    features: [
      "Side-by-side model comparison",
      "Latency, tokens, and cost surfaced",
      "Quality signals to guide selection",
    ],
  },
  {
    badgeLabel: "Ship",
    title: "Move to Production",
    description:
      "Once you find a model that fits your use case, deployment is simple—the same models from the Playground are available via our inference API for production.",
    features: [
      "One line change from playground to prod",
      "Same models and parameters as the UI",
      "OpenAI-compatible · zero rewrite",
    ],
  },
] as const;
