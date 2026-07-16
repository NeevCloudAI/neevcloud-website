export const INFRA_BENTO = {
  title: "Infrastructure That Removes Barriers, Not Adds Them!",
  subtitle:
    "We built NeevCloud to give every innovator access to world-class AI infrastructure without the traditional limits of cost, complexity, or control.",
} as const;

export type InfraBentoCard = {
  key: string;
  title: string;
  description: string;
  image: string;
  // "image-right" → text on the left, visual on the right.
  // "image-bottom" → text on top, visual bleeding off the bottom.
  variant: "image-right" | "image-bottom";
  stat?: { value: string; label: string };
};

export const INFRA_BENTO_CARDS: InfraBentoCard[] = [
  {
    key: "gpu",
    title: "On-Demand GPU Access",
    description:
      "Provision GPU resources in minutes without long wait times or complex procurement processes. Start training immediately and scale as your projects grow.",
    image: "/images/home/infra-bento/on-demand-gpu.svg",
    variant: "image-right",
  },
  {
    key: "memory",
    title: "High Memory Capacity",
    description:
      "Work with massive datasets and complex models without hitting memory bottlenecks. Our GPU configurations provide the capacity your most ambitious projects demand.",
    image: "/images/home/infra-bento/high-memory.svg",
    variant: "image-bottom",
  },
  {
    key: "ai-native",
    title: "AI-Native Infrastructure",
    description:
      "Every layer of our stack is designed specifically for AI workloads. We engineer for performance and efficiency.",
    image: "/images/home/infra-bento/ai-native.svg",
    variant: "image-bottom",
  },
  {
    key: "support",
    title: "24x7 Best-In-Class Support",
    description:
      "Our team understands AI infrastructure because we built it. Get responsive support from engineers who know the platform inside and out, whenever you need it.",
    image: "/images/home/infra-bento/support-247.svg",
    variant: "image-right",
  },
];
