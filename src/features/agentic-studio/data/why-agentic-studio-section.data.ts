import {
  Play,
  ShieldCheck,
  ImageIcon,
  Pause,
  Cpu,
  Bot,
} from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const AGENTIC_STUDIO_WHY_ITEMS: readonly FeatureCardProps[] = [
  {
    title: "Launch in Seconds",
    description:
      "Spin up isolated sandboxes on demand — no waiting, no infrastructure to babysit.",
    lucideIcon: Play,
  },
  {
    title: "Safe Execution",
    description:
      "Run AI agents and untrusted code with strong isolation guarantees at the process and network level.",
    lucideIcon: ShieldCheck,
  },
  {
    title: "Snapshots",
    description:
      "Capture full sandbox state for reproducibility, debugging, and forking agent runs.",
    lucideIcon: ImageIcon,
  },
  {
    title: "Pause & Resume",
    description:
      "Pause sandboxes while preserving disk state — resume exactly where you left off.",
    lucideIcon: Pause,
  },
  {
    title: "Configurable",
    description:
      "Choose CPU, memory, and storage per sandbox to match agent workload requirements.",
    lucideIcon: Cpu,
  },
  {
    title: "Agent-Native",
    description:
      "APIs, SDKs, and lifecycle hooks designed for programmatic control by AI agents.",
    lucideIcon: Bot,
  },
] as const;
