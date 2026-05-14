import type {
  ComputeInstance,
  ComputePillVariant,
} from "@/features/cpu-cluster/data/private-network-section-types";
import { FeatureCardProps } from "@/shared/components/feature-card";

export const FLOW_ARROW_COUNT = 5;
export const INSTANCE_STAT_SEPARATOR = ".";
export const FLOW_SUMMARY_BADGE_TEXT = "₹0 egress · < 0.5 ms";
export const FLOW_SUMMARY_REGION_TEXT = "Private Network . Same Region";
export const ZERO_EGRESS_TITLE = "Zero Egress Charges";
export const ZERO_EGRESS_PRICE = "₹0";
export const ZERO_EGRESS_DESCRIPTION =
  "Free data transfer between CPU and GPU instances within the same region. Build complex AI infrastructure without worrying about bandwidth costs.";
export const ZERO_EGRESS_DESCRIPTION_LINES = [
  "Free data transfer between CPU and GPU instances within the same region.",
  "Build complex AI infrastructure without worrying about bandwidth costs.",
];

export const NETWORKING_FEATURES: FeatureCardProps[] = [
  {
    title: "Private VPC",
    description: "Isolated virtual networks per project.",
  },
  {
    title: "Floating IPs",
    description: "Reattach instantly between instances.",
  },
  {
    title: "L4 & L7 load balancers",
    description: "TCP, HTTP, gRPC, your choice.",
  },
  {
    title: "VPN gateway",
    description: "IPsec / WireGuard site-to-site",
  },
  {
    title: "DDoS protection",
    description: "Always on, no extra cost",
  },
  {
    title: "1 & 10 Gbps ports",
    description: "Dedicated bandwidth tiers",
  },
];

export const COMPUTE_INSTANCES: ComputeInstance[] = [
  {
    typeLabel: "CPU",
    variant: "cpu",
    name: "api-gateway-01",
    specs: ["8 vCPU", "32 GB RAM", "10 GBPS"],
    transferHint: ". Sending requests",
  },
  {
    typeLabel: "GPU",
    variant: "gpu",
    name: "inference-backend-01",
    specs: ["H100", "80 GB vRAM", "vLLM serving"],
    transferHint: ". Returning tokens",
  },
];

export const PILL_VARIANT_STYLES: Record<ComputePillVariant, string> = {
  cpu: "bg-primary text-white",
  gpu: "bg-red-50 text-white",
};
