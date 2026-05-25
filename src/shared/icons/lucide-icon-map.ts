import {
  Command,
  Eye,
  Gauge,
  Gift,
  HardDrive,
  IndianRupee,
  Languages,
  Mic,
  MoveLeft,
  MoveRight,
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
} as const satisfies Record<string, LucideIcon>;

export type LucideIconName = keyof typeof LUCIDE_ICONS;

export function resolveLucideIcon(
  icon: LucideIconName | LucideIcon,
): LucideIcon {
  return typeof icon === "string" ? LUCIDE_ICONS[icon] : icon;
}
