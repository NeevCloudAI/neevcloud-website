export const INFRA_BENTO = {
  title: "Infrastructure That Removes Barriers, Not Adds Them!",
  subtitle:
    "We built NeevCloud to give every innovator access to world-class AI infrastructure without the traditional limits of cost, complexity, or control.",
} as const;

export type InfraBentoCard = {
  title: string;
  description: string;
  // Where the text sits in the card; the opposite end is left open for a visual.
  align: "top" | "bottom";
};

export const INFRA_BENTO_CARDS: InfraBentoCard[] = [
  {
    title: "On-Demand GPU Access",
    description:
      "Provision GPU resources in minutes without long wait times or complex procurement processes. Start training immediately and scale as your projects grow.",
    align: "bottom",
  },
  {
    title: "High Memory Capacity",
    description:
      "Work with massive datasets and complex models without hitting memory bottlenecks. Our GPU configurations provide the capacity your most ambitious projects demand.",
    align: "top",
  },
  {
    title: "AI-Native Infrastructure",
    description:
      "Every layer of our stack is designed specifically for AI workloads. We engineer for performance and efficiency.",
    align: "top",
  },
  {
    title: "24x7 Best-In-Class Support",
    description:
      "Our team understands AI infrastructure because we built it. Get responsive support from engineers who know the platform inside and out, whenever you need it.",
    align: "bottom",
  },
];
