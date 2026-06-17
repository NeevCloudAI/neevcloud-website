import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const NVME_HERO = {
  description:
    "Eliminate I/O bottlenecks with local NVMe disks that keep your GPUs saturated, not waiting. Training large models and running data-intensive inference pipelines demands storage that can keep pace.",
  primaryCta: "Deploy with NVMe",
  primaryCtaRoute: EXTERNAL_LINKS.storage,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Storage Pricing",
  secondaryCtaRoute: EXTERNAL_LINKS.storage,
  secondaryCtaTarget: "_blank",
  badgeText: "High-Performance NVMe Storage",
  image: "/images/webp/nvme.webp",
  trustBadges: [
    "Sub-millisecond latency",
    "High sequential throughput",
    "Per-instance attachment",
    "No cross-tenant contention",
    "Included with GPUs",
  ],
} as const;

export const NVME_FOOTER = {
  title: "Start GPU Compute with NVMe",
  description:
    "Sub-millisecond latency, 7 GB/s throughput. Keep your GPUs saturated, not waiting. 25GB is included free with every GPU instance.",
  primaryCta: "Deploy with NVMe",
  primaryCtaRoute: EXTERNAL_LINKS.storage,
  primaryCtaTarget: "_blank",
  secondaryCta: "View Storage Pricing",
  secondaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
  secondaryCtaTarget: "_blank",
} as const;
