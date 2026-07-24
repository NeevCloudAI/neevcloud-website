import type {
  PurposeFeatureItem,
  PurposeFlowNode,
  PurposeLegendItem,
} from "../types/purpose-section.types";

export const PURPOSE_FLOW_STACK: PurposeFlowNode[] = [
  {
    id: "team",
    variant: "workload",
    title: "Your Team",
    subtitle: "developers · platform · ml",
  },
  {
    id: "tools",
    variant: "workload",
    title: "kubectl · Helm · API",
    subtitle: "your tools, your workflow",
  },
];

export const PURPOSE_CONTROL_PLANE: PurposeFlowNode = {
  id: "control-plane",
  variant: "managed",
  title: "Control Plane (Managed)",
  subtitle: "Scheduler · API Server · etcd",
  footer: "Free, No charge",
};

export const PURPOSE_NODE_POOLS: PurposeFlowNode[] = [
  {
    id: "h100-pool",
    variant: "pool",
    badge: "H100 Node Pool",
    title: "8x H100 GPUs",
    details: ["Device Plugin", "NVMe"],
  },
  {
    id: "h200-pool",
    variant: "pool",
    badge: "H200 Node Pool",
    title: "4x H200 GPUs",
    details: ["Device Plugin", "NVMe"],
  },
  {
    id: "a100-pool",
    variant: "pool",
    badge: "A100 Node Pool",
    title: "16x A100 GPUs",
    details: ["Device Plugin", "NVMe"],
  },
];

export const PURPOSE_STORAGE_LABELS = [
  "Persistent Volumes",
  "Private Registry",
] as const;

export const PURPOSE_LEGEND: PurposeLegendItem[] = [
  { id: "auto", label: "Auto-configured", swatchClass: "bg-primary" },
  { id: "managed", label: "Managed by NeevCloud", swatchClass: "bg-black" },
  {
    id: "workload",
    label: "Your workloads",
    swatchClass: "bg-white",
  },
];

export const PURPOSE_FEATURES: PurposeFeatureItem[] = [
  {
    number: "01",
    title: "You Deploy",
    description: "kubectl, Helm, or our API.",
  },
  {
    number: "02",
    title: "We Manage",
    description: "Control plane on our infra.",
  },
  {
    number: "03",
    title: "GPUs auto-config",
    description: "Device plugins expose GPUs to pods.",
  },
  {
    number: "04",
    title: "Autoscale",
    description: "Pools scale up/down with demand.",
  },
  {
    number: "05",
    title: "Pay for nodes",
    description: "Only the GPU/CPU nodes you run.",
  },
];
