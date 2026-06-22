import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export type ExperienceCtaCard = {
  id: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaRoute: string;
  primaryCtaTarget: "_blank" | "_self" | "_parent" | "_top";
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
  footerButtonLabel: "Book a Guided Session",
  footerButtonRoute: "/contact-neevcloud#contact-form",
} as const;

export const EXPERIENCE_CTA_CARDS: readonly ExperienceCtaCard[] = [
  {
    id: "try-ai",
    title: "TRY AI",
    description: "Test models in browser",
    primaryCtaLabel: "Launch Playground",
    primaryCtaRoute: EXTERNAL_LINKS.aiInferencePlayground,
    primaryCtaTarget: "_blank",
  },
  {
    id: "build-ai",
    title: "BUILD AI",
    description: "Run guided workloads",
    primaryCtaLabel: "Start Building",
    primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
    primaryCtaTarget: "_blank",
  },
  {
    id: "see-ai",
    title: "SEE AI",
    description: "Explore use cases",
    primaryCtaLabel: "View Examples",
    primaryCtaRoute: EXTERNAL_LINKS.tutorials,
    primaryCtaTarget: "_blank",
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
