import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const GPU_PRICING_SECTION_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "gpu-ai-service",
    label: "01 · CONTAINER-NATIVE",
    iconSrc: "/icons/stack.svg",
    iconColor: "#FF4D1C",
    iconAlt: "GPU AI Service",
    size: "small",
    title: "GPU AI Service",
    description:
      "Kubernetes-managed GPU pods for containerized AI workloads. Deploy models, training jobs, and inference endpoints without managing VMs.",
    bullets: [
      { id: 1, title: "Production inference deployments" },
      { id: 2, title: "Distributed training jobs" },
      { id: 3, title: "Microservices architectures" },
      { id: 4, title: "Auto-scaling workloads" },
      { id: 5, title: "Teams using containers" },
    ],
    iconClassName: "bg-[#FF4D1C]/10",
  },
  {
    id: "gpu-vm-service",
    label: "02 · FULL OS CONTROL",
    iconSrc: "/icons/server.svg",
    iconAlt: "GPU VM Service",
    size: "small",
    title: "GPU VM Service",
    description:
      "Full Linux VMs with direct GPU access. Complete control over the environment, kernel, and system configuration.",
    bullets: [
      { id: 1, title: "Custom system configurations" },
      { id: 2, title: "Legacy applications" },
      { id: 3, title: "Specific driver versions" },
      { id: 4, title: "Development environments" },
      { id: 5, title: "Teams preferring VMs" },
    ],
  },
] as const;
