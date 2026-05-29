import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const MEDIA_AMBITION_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "rendering-capabilities",
    label: "01 · RENDERING CAPABILITIES",
    iconSrc: "/icons/shield.svg",
    iconAlt: "Rendering Capabilities",
    title: "GPU-Accelerated Rendering",
    description:
      "Deploy renders on H100, H200, and A100 GPUs. Scale from single frames to entire feature films with per-second billing and instant provisioning.",
    bullets: [
      { id: 1, title: "3D animation and CGI" },
      { id: 2, title: "Visual effects compositing" },
      { id: 3, title: "Motion graphics" },
      { id: 4, title: "Fluid and particle simulations" },
    ],
  },
  {
    id: "flexibility",
    label: "02 · FLEXIBILITY",
    iconSrc: "/icons/bank.svg",
    iconAlt: "Flexibility",
    title: "Scalable Render Farms",
    description:
      "Spin up hundreds of GPU nodes for deadline-driven projects. Scale down to zero when renders complete. Pay only for compute time used.",
    bullets: [
      { id: 1, title: "On-demand GPU instances" },
      { id: 2, title: "Spot instances for batch renders" },
      { id: 3, title: "Reserved capacity for production" },
      { id: 4, title: "Multi-GPU clusters for distributed rendering" },
    ],
  },
  {
    id: "real-time-capabilities",
    label: "03 · REAL-TIME CAPABILITIES",
    iconSrc: "/icons/file.svg",
    iconAlt: "Real-Time Capabilities",
    title: "Real-Time Workflows",
    description:
      "Preview scenes, iterate on effects, and review in real time with low-latency GPU infrastructure supporting industry-standard tools.",
    bullets: [
      { id: 1, title: "Interactive viewport rendering" },
      { id: 2, title: "Live lighting adjustments" },
      { id: 3, title: "Instant material previews" },
      { id: 4, title: "Collaborative review sessions" },
    ],
  },
] as const;
