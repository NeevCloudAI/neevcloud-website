import { ServiceItem } from "@/shared/types/service-section.types";

export const RENDERING_SERVICES: readonly ServiceItem[] = [
  {
    id: "gpu-ai",
    index: "01",
    title: "GPU Compute",
    specs: "H100 • H200 • B200 • A100",
    description:
      "Rendering-optimized GPUs. Single instances or multi-GPU clusters with NVLink.",
    highlight: "8× NVLink",
    highlightSubtext: "400 Gbps IB",
    href: "/gpu-ai-service",
  },
  {
    id: "storage",
    index: "02",
    title: "Storage",
    specs: "NVMe · Project · Frame cache",
    description:
      "NVMe storage for project assets, textures, and rendered frames. Fast read/write for large scene files.",
    highlight: "NVMe Gen4",
    highlightSubtext: "PB capacity",
    href: "/storage",
  },
  {
    id: "network transfer",
    index: "03",
    title: "Network Transfer",
    specs: "High-bandwidth",
    description:
      "High-bandwidth uploads and downloads. No egress charges within India region.",
    highlight: "40 Gbps in/out",
    highlightSubtext: "₹0 egress · IN",
    href: "/network-transfer",
  },
  {
    id: "rendering software",
    index: "04",
    title: "Rendering Software",
    specs: "Blender · Maya · Unreal",
    description:
      "Pre-configured environments for industry-standard renderers. Custom container images supported.",
    highlight: "Pre-baked images",
    highlightSubtext: "BYO licenses",
    href: "/rendering-software",
  },
  {
    id: "managed tools",
    index: "05",
    title: "Managed Tools",
    specs: "CLI · API · Web console",
    description:
      "Job scheduling, render queue management, and frame monitoring. Webhooks, Slack, and Frame.io integrations.",
    highlight: "Webhooks",
    highlightSubtext: "Frame.io · ShotGrid",
    href: "/managed-kubernetes",
  },
] as const;
