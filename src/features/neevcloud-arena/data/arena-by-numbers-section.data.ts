import type { StatsByNumbersItem } from "@/shared/types/stats-by-numbers.types";

export const ARENA_BY_NUMBERS_SECTION = {
  titlePrefix: "ARENA",
  titleHighlight: "by the Numbers",
} as const;

export const ARENA_BY_NUMBERS_ITEMS: readonly StatsByNumbersItem[] = [
  {
    id: "models",
    label: "Models",
    value: "15+",
    description: "Models to test instantly",
  },
  {
    id: "examples",
    label: "Examples",
    value: "10+",
    description: "Guided workload examples",
  },
  {
    id: "use-cases",
    label: "Use cases",
    value: "50+",
    description: "Real-world use cases",
  },
  {
    id: "setup-time",
    label: "Setup time",
    value: "Zero",
    description: "Setup time required",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    value: "100%",
    description: "Production infrastructure",
  },
  {
    id: "monitoring",
    label: "Monitoring",
    value: "Live",
    description: "Cost and performance data",
  },
] as const;
