import type { PurposeFlowNode } from "../types/infrastructure-section.types";

export const PURPOSE_CONSOLE_NODE: PurposeFlowNode = {
  id: "console",
  variant: "managed",
  title: "NeevCloud Console",
  subtitle: "CONSOLE · CONTROL PLANE",
  footer: "Single interface for all services",
};

export const PURPOSE_SERVICE_NODES: PurposeFlowNode[] = [
  {
    id: "gpu-service",
    variant: "pool",
    badge: "SERVICE · 01",
    title: "GPU Service",
    subtitle: "Training and compute",
  },
  {
    id: "ai-inference",
    variant: "pool",
    badge: "SERVICE · 02",
    title: "AI Inference",
    subtitle: "Model serving & APIs",
  },
  {
    id: "storage",
    variant: "pool",
    badge: "SERVICE · 03",
    title: "Storage",
    subtitle: "Persistent data & models",
  },
];

export const PURPOSE_NETWORK_NODE: PurposeFlowNode = {
  id: "private-network",
  variant: "workload",
  title: "Private Network",
  subtitle: "FABRIC · PRIVATE",
  footer: "Free internal data transfer · high-speed connectivity · 400 Gbps",
};

export const PURPOSE_CPU_NODE: PurposeFlowNode = {
  id: "cpu-compute",
  variant: "pool",
  badge: "SERVICE · 04",
  title: "CPU Compute",
  subtitle: "Preprocessing · databases · orchestration",
};
