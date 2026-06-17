import type { FeatureCardProps } from "@/shared/components/feature-card";
import { RadioTower, Shield, Star, ClipboardCheck } from "lucide-react";

export const PRICING_FEATURES: FeatureCardProps[] = [
  {
    title: "InfiniBand Networking",
    description: "High-bandwidth inter-GPU communication",
    lucideIcon: RadioTower,
  },
  {
    title: "NVMe-Attached Storage",
    description: "Fast local storage for datasets",
    image: "/icons/nvme-storage.svg",
  },
  {
    title: "Pre-Built ML Images",
    description: "PyTorch 2.8, TensorFlow, CUDA 12.9",
    image: "/icons/ml-images.svg",
  },
  {
    title: "DDoS Protection",
    description: "Included at no additional cost",
    lucideIcon: Shield,
  },
  {
    title: "India Data Centers",
    description: "Complete data sovereignty",
    lucideIcon: Star,
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade reliability",
    lucideIcon: ClipboardCheck,
  },
];
