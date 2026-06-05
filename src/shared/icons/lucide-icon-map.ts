import {
  Command,
  Cpu,
  Eye,
  Gauge,
  Gift,
  HardDrive,
  IndianRupee,
  Languages,
  MemoryStick,
  Mic,
  MoveLeft,
  MoveRight,
  Server,
  Shuffle,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const LUCIDE_ICONS = {
  command: Command,
  eye: Eye,
  gauge: Gauge,
  gift: Gift,
  "hard-drive": HardDrive,
  "indian-rupee": IndianRupee,
  languages: Languages,
  mic: Mic,
  "move-left": MoveLeft,
  "move-right": MoveRight,
  shuffle: Shuffle,
  zap: Zap,
  server: Server,
  cpu: Cpu,
  "memory-stick": MemoryStick,
} as const satisfies Record<string, LucideIcon>;

export type LucideIconName = keyof typeof LUCIDE_ICONS;

export function resolveLucideIcon(
  icon: LucideIconName | LucideIcon,
): LucideIcon {
  return typeof icon === "string" ? LUCIDE_ICONS[icon] : icon;
}
