import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const DEFENCE_AMBITION_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "data-sovereignty",
    label: "01",
    iconSrc: "/icons/protected.svg",
    iconAlt: "Complete data sovereignty",
    title: "Complete Data Sovereignty",
    description:
      "Infrastructure operates exclusively within India under Indian ownership and jurisdiction. Data never crosses borders.",
    bullets: [
      { id: 1, title: "100% Indian-owned infrastructure" },
      { id: 2, title: "Indian jurisdiction only" },
      { id: 3, title: "No foreign dependencies" },
      { id: 4, title: "Physical infrastructure within India" },
    ],
  },
  {
    id: "air-gapped",
    label: "02 · FLEXIBILITY",
    iconSrc: "/icons/bank.svg",
    iconAlt: "Air-gapped deployments",
    title: "Air-Gapped Deployments",
    description:
      "Isolated infrastructure environments with complete network segregation for classified and sensitive workloads for maximum security.",
    bullets: [
      { id: 1, title: "Network-isolated clusters" },
      { id: 2, title: "Dedicated physical infrastructure" },
      { id: 3, title: "Custom security architectures" },
      { id: 4, title: "On-site deployment support" },
    ],
  },
  {
    id: "strategic-independence",
    label: "03",
    iconSrc: "/icons/file.svg",
    iconAlt: "Strategic independence",
    title: "Strategic Independence",
    description:
      "No reliance on foreign cloud providers or technology platforms. Complete control over compute, storage, and networking infrastructure.",
    bullets: [
      { id: 1, title: "Indian-built infrastructure" },
      { id: 2, title: "Sovereign technology stack" },
      { id: 3, title: "Independent operations" },
      { id: 4, title: "Local technical support" },
    ],
  },
] as const;
