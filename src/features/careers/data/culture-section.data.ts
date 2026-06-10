import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const CULTURE_SECTION = {
  title: "Our Culture",
  description:
    "We prioritize clarity over hierarchy, ownership over dependence, and substance over appearances.",
} as const;

export const CULTURE_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "ownership",
    className: "md:col-span-3 md:row-span-2",
    label: "01 - OWNERSHIP",
    title: "Ownership Over Dependence",
    description:
      "You own your work end-to-end: design, build, ship, support. No hand-offs that dilute accountability. You see the full arc of what you create.",
    icon: "/icons/drug-discovery.svg",
    image: "/images/healthcare-drug-discovery.png",
    imageSpacing: true,
    theme: "gray",
  },
  {
    id: "clarity",
    className: "md:col-span-3",
    label: "02 - CLARITY",
    title: "Clarity Over Hierarchy",
    description:
      "Decisions are made with the clearest information, not the highest title. Anyone can surface a problem or propose a solution.",
    icon: "/icons/medical-imaging.svg",
    theme: "gray",
  },
  {
    id: "substance",
    className: "md:col-span-3",
    label: "03 - SUBSTANCE",
    title: "Substance Over Appearances",
    description:
      "We value working systems over polished decks, real results over surface metrics. What ships and what scales is what matters.",
    icon: "/icons/genomic-analysis.svg",
    theme: "gray",
  },
  {
    id: "speed",
    className: "md:col-span-2",
    label: "04 - SPEED",
    title: "Ship Quickly",
    description:
      "Small team means fast cycles. Ideas go from discussion to production in days, not quarters. You'll see your work in the hands of customers fast.",
    icon: "/icons/medical-research.svg",
    theme: "gray",
  },
  {
    id: "reliability",
    className: "md:col-span-2",
    label: "05 - RELIABILITY",
    title: "Built to Last",
    description:
      "Our focus is on building reliable solutions and long-term systems. We resist shortcuts that create technical debt and write infrastructure that scales and endures.",
    icon: "/icons/startups-innovation.svg",
    theme: "dark",
  },
  {
    id: "impact",
    className: "md:col-span-2",
    label: "06 - IMPACT",
    title: "Democratize AI",
    description:
      "Every line of code, every deployment, every customer interaction contributes to making world-class AI accessible to anyone with an idea worth building.",
    icon: "/icons/clinical-decision.svg",
    theme: "gray",
  },
] as const;
