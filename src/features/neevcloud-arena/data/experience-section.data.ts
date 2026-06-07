import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export type ExperienceCtaCard = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
};

export const EXPERIENCE_SECTION = {
  titlePrefix: "Don't Just Read About It,",
  titleHighlight: "Experience It",
  description:
    "Instead of documentation and demos, NeevCloud ARENA gives you direct, hands-on access to test infrastructure capabilities with your actual use cases.",
} as const;

export const EXPERIENCE_CTA_SECTION = {
  titlePrefix: "Three Ways to",
  titleHighlight: "Experience",
  footerText: "Not sure where to start?",
  footerButtonText: "Book a Guided Session",
} as const;

export const EXPERIENCE_CTA_CARDS: readonly ExperienceCtaCard[] = [
  {
    id: "try-ai",
    title: "TRY AI",
    description: "Test models in browser",
    buttonText: "Launch Playground",
  },
  {
    id: "build-ai",
    title: "BUILD AI",
    description: "Run guided workloads",
    buttonText: "Start Building",
  },
  {
    id: "see-ai",
    title: "SEE AI",
    description: "Explore use cases",
    buttonText: "View Examples",
  },
] as const;

export const EXPERIENCE_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "try-ai",
    label: "01 · TRY AI",
    iconSrc: "/icons/protected.svg",
    iconAlt: "Try AI",
    title: "Interactive Model Playground",
    description:
      "Test language, vision, and audio models in an interactive playground. No signup required. Start immediately in your browser.",
    bullets: [],
  },
  {
    id: "build-ai",
    label: "02 · BUILD AI",
    iconSrc: "/icons/bank.svg",
    iconAlt: "Build AI",
    title: "Guided Workload Experience",
    description:
      "Run sample training workloads and inference deployments. See GPU utilization, costs, and performance in real time.",
    bullets: [],
  },
  {
    id: "see-ai",
    label: "03 · SEE AI",
    iconSrc: "/icons/file.svg",
    iconAlt: "See AI",
    title: "Real-World Applications",
    description:
      "Explore real-world applications across industries. Understand what's possible with production infrastructure.",
    bullets: [],
  },
] as const;
