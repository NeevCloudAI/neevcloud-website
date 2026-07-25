import {
  LayoutList,
  Cpu,
  Network,
  IndianRupee,
  Command,
  Server,
} from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const VM_SERVICE_WHY_ITEMS: readonly FeatureCardProps[] = [
  {
    title: "Multiple Instance Sizes",
    description:
      "From dev instances to production-grade VMs — pick the size that fits your workload.",
    lucideIcon: LayoutList,
  },
  {
    title: "Optional GPU Attachment",
    description:
      "Attach GPUs on demand for hybrid CPU-GPU workloads without leaving the platform.",
    lucideIcon: Cpu,
  },
  {
    title: "Shared Networking",
    description:
      "Unified VPC, storage, and security policies across GPU instances and CPU VMs.",
    lucideIcon: Network,
  },
  {
    title: "Per-Minute Billing",
    description:
      "Pay only for what you use, with reserved pricing options for long-running workloads.",
    lucideIcon: IndianRupee,
  },
  {
    title: "Full Root Access",
    description:
      "SSH key management, full sudo, any Linux distro — no restrictions on what you install.",
    lucideIcon: Command,
  },
  {
    title: "One Platform",
    description:
      "Unlike other Neoclouds, NeevCloud provides both GPU and non-GPU compute on one platform.",
    lucideIcon: Server,
  },
] as const;
