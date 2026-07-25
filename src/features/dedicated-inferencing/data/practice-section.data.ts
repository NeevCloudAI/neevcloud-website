import {
  Gauge,
  Zap,
  HardDrive,
  IndianRupee,
} from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const DEDICATED_INFERENCING_PRACTICE_ITEMS: readonly FeatureCardProps[] =
  [
    {
      title: "Consistent Latency",
      description:
        "Requests go to the same reserved GPU every time, giving you predictable response times for production apps.",
      lucideIcon: Gauge,
    },
    {
      title: "No Cold Starts",
      description:
        "The model stays loaded in GPU memory. Your endpoint is ready the moment a request arrives.",
      lucideIcon: Zap,
    },
    {
      title: "Full VRAM Isolation",
      description:
        "Your model gets the configured GPU memory without pressure from other workloads.",
      lucideIcon: HardDrive,
    },
    {
      title: "Hourly Billing",
      description:
        "Pay for the running deployment, not per request. Billing starts at provisioning and stops when you delete.",
      lucideIcon: IndianRupee,
    },
  ] as const;
