import { createElement, type ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";

import {
  resolveLucideIcon,
  type LucideIconName,
} from "@/shared/icons/lucide-icon-map";

export type LucideIconGlyphProps = {
  icon: LucideIconName | LucideIcon;
} & ComponentProps<LucideIcon>;

export function LucideIconGlyph({ icon, ...props }: LucideIconGlyphProps) {
  return createElement(resolveLucideIcon(icon), props);
}
