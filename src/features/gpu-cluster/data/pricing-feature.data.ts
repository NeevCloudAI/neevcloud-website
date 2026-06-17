import type { FeatureCardProps } from "@/shared/components/feature-card";

export const PRICING_FEATURES: FeatureCardProps[] = [
  {
    title: "InfiniBand Networking",
    description: "High-bandwidth inter-GPU communication",
    image: "/icons/infiniband-networking.svg",
  },
  {
    title: "NVMe-Attached Storage",
    description: "Fast local storage for datasets",
    image: "/icons/nvme-attached-storage.svg",
  },
  {
    title: "Pre-Built ML Images",
    description: "PyTorch 2.8, TensorFlow, CUDA 12.9",
    image: "/icons/ml-images.svg",
  },
  {
    title: "DDoS Protection",
    description: "Included at no additional cost",
    image: "/icons/ddos.svg",
  },
  {
    title: "India Data Centers",
    description: "Complete data sovereignty",
    image: "/icons/data-center.svg",
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade reliability",
    image: "/icons/sla-uptime.svg",
  },
];
