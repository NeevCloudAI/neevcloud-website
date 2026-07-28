import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const TCO_CALCULATOR_CAPABILITIES_ITEMS: readonly AmbitionDetailItem[] =
  [
    {
      id: "workload-configurator",
      label: "01",
      iconSrc: "/icons/cpu.svg",
      iconAlt: "Workload configurator",
      size: "small",
      title: "Workload Configurator",
      description:
        "Set GPU type, count, hours, and storage. Get accurate estimates for your exact workload.",
      bullets: [
        { id: 1, title: "GPU type and quantity" },
        { id: 2, title: "Monthly usage hours" },
        { id: 3, title: "Storage requirements" },
      ],
    },
    {
      id: "provider-comparison",
      label: "02",
      iconSrc: "/icons/shield.svg",
      iconAlt: "Provider comparison",
      size: "small",
      title: "Provider Comparison",
      description:
        "Side-by-side cost breakdown vs. AWS, GCP, Azure, and Lambda. See where costs differ.",
      bullets: [
        { id: 1, title: "AWS (EC2 P5, P4)" },
        { id: 2, title: "Google Cloud (A2, A3)" },
        { id: 3, title: "Microsoft Azure (NC, ND)" },
        { id: 4, title: "Lambda Labs" },
      ],
    },
    {
      id: "storage-cost-modeling",
      label: "03",
      iconSrc: "/icons/server.svg",
      iconAlt: "Storage cost modeling",
      size: "small",
      title: "Storage Cost Modeling",
      description: "Network storage costs are fully modeled.",
      bullets: [{ id: 1, title: "Network block storage (per GB/month)" }],
    },
  ] as const;
