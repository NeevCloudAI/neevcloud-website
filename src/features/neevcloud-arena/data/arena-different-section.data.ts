import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const ARENA_DIFFERENT_SECTION = {
  titlePrefix: "What Makes",
  titleHighlight: "ARENA",
  titleSuffix: "Different",
  description:
    "Designed to give you genuine confidence in infrastructure decisions, not just a product tour.",
} as const;

export const ARENA_DIFFERENT_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "real-infrastructure",
    className: "md:col-span-3 md:row-span-2",
    label: "01 - FLAGSHIP",
    title: "Real Infrastructure",
    description:
      "Test on the same production infrastructure your workloads would run on. H100, A100, and other GPU configurations available immediately.",
    icon: "/icons/spark.svg",
    image: "/images/webp/buildings.webp",
    imageSpacing: true,
    theme: "light",
  },
  {
    id: "guided-workflows",
    className: "md:col-span-3",
    label: "02",
    title: "Guided Workflows",
    description:
      "Step-by-step experiences designed to show infrastructure capabilities without requiring setup or configuration expertise.",
    icon: "/icons/health2.svg",
    theme: "light",
  },
  {
    id: "transparent-metrics",
    className: "md:col-span-3",
    label: "03",
    title: "Transparent Metrics",
    description:
      "See actual performance numbers, real costs, and infrastructure behavior. No synthetic benchmarks or marketing claims.",
    icon: "/icons/template.svg",
    theme: "light",
  },
  {
    id: "shareable-results",
    className: "md:col-span-2",
    label: "04",
    title: "Shareable Results",
    description:
      "Generate reports with performance data, cost breakdowns, and recommendations you can share with your team or decision-makers.",
    icon: "/icons/robot.svg",
    theme: "light",
  },
  {
    id: "zero-setup",
    className: "md:col-span-2",
    label: "05 - FEATURED",
    title: "Zero Setup",
    description:
      "No installation, no configuration, no waiting for approvals. Try models in browser, run workloads in pre-configured environments.",
    icon: "/icons/star-shield.svg",
    theme: "dark",
  },
  {
    id: "no-account-needed",
    className: "md:col-span-2",
    label: "06",
    title: "No Account Needed",
    description:
      "The Model Playground starts instantly without creating an account. Experience first, commit later, on your own timeline.",
    icon: "/icons/idea2.svg",
    theme: "light",
  },
] as const;
