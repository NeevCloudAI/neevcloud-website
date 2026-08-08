import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const OFFERS_SECTION_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "container-native",
    label: "01 · CONTAINER-NATIVE",
    iconSrc: "/icons/cpu.svg",
    iconAlt: "CPU",
    size: "small",
    title: "Not Everything Needs a GPU",
    description:
      "CPU instances handle preprocessing, databases, monitoring, and logging efficiently, saving GPU resources for tasks that truly need acceleration.",
    bulletsHeading: "CPU Workloads:",
    bullets: [
      { id: 1, title: "Data preprocessing pipelines" },
      { id: 2, title: "API servers and gateways" },
      { id: 3, title: "Databases and caching layers" },
      { id: 4, title: "Monitoring and observability" },
      { id: 5, title: "Orchestration and control planes" },
    ],
  },
  {
    id: "full-os-control",
    label: "02 · Full OS Control",
    iconSrc: "/icons/shield.svg",
    iconAlt: "Full OS Control",
    size: "small",
    title: "Sovereign Indian Cloud",
    description:
      "Built on sovereign Indian infrastructure, NeevCloud ensures that your applications, data pipelines, and compute resources stay within India's jurisdiction, supporting compliance, security, and operational control.",
    bulletsHeading: "Data Sovereignty:",
    bullets: [
      { id: 1, title: "100% India-resident processing" },
      { id: 2, title: "DPDP Act compliant" },
      { id: 3, title: "No cross-border data transfer" },
      { id: 4, title: "Complete operational control" },
    ],
  },
  {
    id: "standard-infrastructure",
    label: "03 · Standard Infrastructure",
    iconSrc: "/icons/server.svg",
    iconAlt: "Standard Infrastructure",
    title: "Standard Infrastructure for Standard Needs",
    size: "small",
    description:
      "For standard Linux workloads, databases, web apps, monitoring, or dev environments, CPU instances provide simple, flexible compute without GPU complexity.",
    bulletsHeading: "Use Cases:",
    bullets: [
      { id: 1, title: "Web and application servers" },
      { id: 2, title: "Development environments" },
      { id: 3, title: "CI/CD pipelines" },
      { id: 4, title: "Log aggregation" },
      { id: 5, title: "Container orchestration" },
    ],
  },
] as const;
