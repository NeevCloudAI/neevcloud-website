import { Clock, LayoutList, Cpu, Command } from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const DEDICATED_INFERENCING_CONFIGURATION_ITEMS: readonly FeatureCardProps[] =
  [
    {
      title: "Maximum Context Length",
      description:
        "Set the maximum number of tokens per request for your deployment.",
      lucideIcon: Clock,
    },
    {
      title: "Maximum Concurrent Requests",
      description:
        "Control how many requests run at once on the reserved GPU.",
      lucideIcon: LayoutList,
    },
    {
      title: "GPU Type and Count",
      description:
        "Choose the GPU and count that match your VRAM needs and hourly price.",
      lucideIcon: Cpu,
    },
    {
      title: "Extra Arguments",
      description:
        "Pass custom arguments for BYOM serving customization and advanced setups.",
      lucideIcon: Command,
    },
  ] as const;
