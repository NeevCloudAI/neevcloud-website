import type { ComputeInstance } from "../types/private-network-section.types";
import type { FeatureCardProps } from "@/shared/components/feature-card";
import { Network, Router, Shield } from "@/shared/icons/lucide-icon-map";

export const NETWORKING_FEATURES: FeatureCardProps[] = [
  {
    title: "Private VPC",
    description: "Isolated virtual networks per project.",
    image: "/icons/vpc.svg",
  },
  {
    title: "Floating IPs",
    description: "Reattach instantly between instances.",
    image: "/icons/floating-ip.svg",
  },
  {
    title: "L4 & L7 load balancers",
    description: "TCP, HTTP, gRPC, your choice.",
    lucideIcon: Network,
  },
  {
    title: "VPN gateway",
    description: "IPsec / WireGuard site-to-site",
    image: "/icons/vpn.svg",
  },
  {
    title: "DDoS protection",
    description: "Always on, no extra cost",
    lucideIcon: Shield,
  },
  {
    title: "1 & 10 Gbps ports",
    description: "Dedicated bandwidth tiers",
    lucideIcon: Router,
  },
];

export const COMPUTE_INSTANCES: ComputeInstance[] = [
  {
    typeLabel: "CPU",
    variant: "cpu",
    name: "api-gateway-01",
    specs: ["8 vCPU", "32 GB RAM", "10 GBPS"],
    transferHint: "• Sending requests",
  },
  {
    typeLabel: "GPU",
    variant: "gpu",
    name: "inference-backend-01",
    specs: ["H100", "80 GB vRAM", "vLLM serving"],
    transferHint: "• Returning tokens",
  },
];
