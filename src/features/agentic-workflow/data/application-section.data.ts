import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const AGENTIC_WORKFLOW_APPLICATION_CARDS: readonly ApplicationCardItem[] =
  [
    {
      id: "research-analysis",
      className: "md:col-span-3 md:row-span-2",
      label: "01 - FEATURED",
      title: "Research and Analysis",
      description:
        "Autonomous research agents that gather information, synthesize findings, and generate reports across multiple sources.",
      icon: "/icons/research.svg",
      image: "/images/healthcare-drug-discovery.png",
      imageSpacing: true,
      theme: "gray",
    },
    {
      id: "workflow-automation",
      className: "md:col-span-3",
      label: "02",
      title: "Workflow Automation",
      description:
        "Agents that execute multi-step business processes, make decisions, and interact with external systems.",
      icon: "/icons/command.svg",
      theme: "gray",
    },
    {
      id: "code-generation-review",
      className: "md:col-span-3",
      label: "03",
      title: "Code Generation and Review",
      description:
        "Developer agents that write code, review pull requests, generate tests, and maintain documentation.",
      icon: "/icons/code.svg",
      theme: "gray",
    },
    {
      id: "customer-support",
      className: "md:col-span-2",
      label: "04",
      title: "Customer Support",
      description:
        "Support agents that understand context, access knowledge bases, and resolve issues.",
      icon: "/icons/mic.svg",
      theme: "gray",
    },
    {
      id: "data-processing",
      className: "md:col-span-2",
      label: "05 - DATA QUALITY",
      title: "Data Processing",
      description:
        "Agents that clean, transform, and enrich datasets using multiple tools and models.",
      icon: "/icons/spark.svg",
      theme: "dark",
    },
    {
      id: "planning-scheduling",
      className: "md:col-span-2",
      label: "06",
      title: "Planning and Scheduling",
      description:
        "Optimize schedules, allocate resources, and coordinate complex multi-party tasks.",
      icon: "/icons/stack-2.svg",
      theme: "gray",
    },
  ] as const;
