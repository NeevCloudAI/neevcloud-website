import { CircleCheck } from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const AGENTIC_STUDIO_USE_CASES_ITEMS: readonly FeatureCardProps[] = [
  {
    title: "Code-Executing Agents",
    description: "Give LLM agents a safe place to run generated code.",
    lucideIcon: CircleCheck,
  },
  {
    title: "Data Analysis Assistants",
    description:
      "Sandboxed Python/R environments for AI-driven exploratory analysis.",
    lucideIcon: CircleCheck,
  },
  {
    title: "Autonomous Testing",
    description:
      "Reproducible environments for agent-driven test suites and CI.",
    lucideIcon: CircleCheck,
  },
  {
    title: "AI Coding Tools",
    description:
      "Back your coding copilots with real, safe execution environments.",
    lucideIcon: CircleCheck,
  },
] as const;
