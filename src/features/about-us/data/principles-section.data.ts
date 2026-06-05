import type { NumberedDetailCardItem } from "@/shared/types/numbered-detail-card.types";

export const PRINCIPLES_SECTION = {
  titlePrefix: "Our",
  titleHighlight: "Principles",
} as const;

export const PRINCIPLE_ITEMS: readonly NumberedDetailCardItem[] = [
  {
    id: "accessible-ai",
    label: "ACCESSIBLE AI",
    title: "AI Infrastructure Should Be Accessible",
    number: "01",
    description:
      "Advanced computing shouldn't require hyperscale budgets or enterprise contracts. Startups, researchers, and small teams deserve the same infrastructure capabilities as large corporations. We price transparently and eliminate the barriers that keep talented builders from pursuing ambitious ideas.",
  },
  {
    id: "data-sovereignty",
    label: "DATA SOVEREIGNTY",
    title: "Sovereignty Matters",
    number: "02",
    description:
      "Nations and organizations should control where their data lives and who governs the infrastructure processing it. We operate within India, providing indigenous alternatives to foreign cloud dependency without compromising on capability or scale.",
  },
  {
    id: "clear-pricing",
    label: "CLEAR PRICING",
    title: "Transparency Beats Complexity",
    number: "03",
    description:
      "Cloud pricing shouldn't require a PhD to understand. Per-second billing, no hidden fees, real-time cost tracking, and straightforward resource allocation mean you always know what you're paying for and why.",
  },
  {
    id: "open-ecosystem",
    label: "OPEN ECOSYSTEM",
    title: "Freedom from Lock-In",
    number: "04",
    description:
      "Your AI strategy shouldn't depend on one vendor's proprietary stack. Standard frameworks, open APIs, and portable infrastructure mean what you build on NeevCloud runs anywhere. We earn your business through capability, not captivity.",
  },
] as const;
