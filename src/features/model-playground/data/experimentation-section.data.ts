import type { FeatureCardProps } from "@/shared/components/feature-card";

export const EXPERIMENTATION_SECTION_FEATURES: FeatureCardProps[] = [
  {
    title: "Interactive Testing Interface",
    description:
      "Try models through a clean, intuitive interface. Enter text, upload files, or paste URLs depending on the model type. See results instantly with clear formatting and metadata.",
    icon: "/icons/interface.svg",
  },
  {
    title: "Parameter Control",
    description:
      "Adjust model parameters to see how they affect outputs. Experiment with temperature for creativity. Understand how different settings change behavior.",
    icon: "/icons/control.svg",
  },
  {
    title: "Side-by-Side Comparison",
    description:
      "Run the same input through multiple models simultaneously. Compare response quality, speed, and format to choose the best model for your needs.",
    icon: "/icons/comparision.svg",
  },
  {
    title: "Example Prompts",
    description:
      "Not sure where to start? Each model includes example prompts that demonstrate its capabilities. Use them as-is or modify them to test your specific use case.",
    icon: "/icons/prompts.svg",
  },
  {
    title: "Export and Share",
    description:
      "Save interesting results, export test cases, or share examples with your team. The Playground makes it easy to document findings and communicate discoveries.",
    icon: "/icons/export.svg",
  },
  {
    title: "Usage Limits",
    description:
      "Free access includes generous usage limits for exploration. 100 requests per day per model category, 50 file uploads per day, Standard response times.",
    icon: "/icons/usage.svg",
  },
];
