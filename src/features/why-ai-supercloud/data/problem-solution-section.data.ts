import type { ProblemSolutionColumn } from "../types/problem-solution-section.types";

export const PROBLEM_SOLUTION_SECTION = {
  titlePrefix: "The Problem and the",
  titleHighlight: "Solution",
  description:
    "AI teams face real barriers with traditional cloud. AI Supercloud removes every one of them, built from the ground up for how modern AI teams actually work.",
} as const;

export const PROBLEM_COLUMN: ProblemSolutionColumn = {
  label: "THE PROBLEM",
  heading: "Traditional Cloud Slows You Down",
  description: "AI teams face barriers that block innovation at every step.",
  items: [
    {
      id: "weeks-for-gpu-access",
      title: "Weeks for GPU Access",
      icon: "/icons/time.svg",
      description:
        "Request infrastructure. Wait for approvals. Wait for provisioning. Your timeline slips.",
    },
    {
      id: "unpredictable-costs",
      title: "Unpredictable Costs",
      icon: "/icons/money-bag2.svg",
      description:
        "Hidden fees, complex pricing, surprise charges. Finance blocks projects because costs can't be forecasted.",
    },
    {
      id: "vendor-lock-in",
      title: "Vendor Lock-In",
      icon: "/icons/time-boxed.svg",
      description:
        "Proprietary tools trap you deeper into one ecosystem. Migration becomes harder every quarter.",
    },
    {
      id: "no-data-sovereignty",
      title: "No Data Sovereignty",
      icon: "/icons/cross.svg",
      description:
        "Training data sits in foreign data centers under foreign jurisdiction. Compliance becomes complex.",
    },
  ],
};

export const SOLUTION_COLUMN: ProblemSolutionColumn = {
  label: "THE SOLUTION",
  heading: "AI Supercloud Removes Every Barrier",
  description: "Purpose-built infrastructure that eliminates friction.",
  items: [
    {
      id: "instant-access",
      title: "Instant Access",
      icon: "/icons/exit.svg",
      description:
        "Deploy GPUs in 2-5 minutes. No waiting lists, no approval processes, no delays.",
    },
    {
      id: "transparent-pricing",
      title: "Transparent Pricing",
      icon: "/icons/pricing.svg",
      description:
        "Per-second billing. Real-time cost tracking. No hidden fees. Budget with confidence.",
    },
    {
      id: "open-standards",
      title: "Open Standards",
      icon: "/icons/badge.svg",
      description:
        "Standard frameworks, portable infrastructure. What you build here runs anywhere.",
    },
    {
      id: "data-sovereignty",
      title: "Data Sovereignty",
      icon: "/icons/correct.svg",
      description:
        "Infrastructure within India. Complete residency controls. Your data, your jurisdiction.",
    },
  ],
};
