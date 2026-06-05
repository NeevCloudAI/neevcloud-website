import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { HeaderNavId } from "./nav-items";

export const MEGA_MENUS: Partial<Record<HeaderNavId, ComponentType>> = {
  "ai-supercloud": dynamic(
    () => import("./mega-menus/ai-supercloud-mega-menu"),
  ),
  "inference-hub": dynamic(() => import("./mega-menus/inference-mega-menu")),
  product: dynamic(() => import("./mega-menus/product-mega-menu")),
  solutions: dynamic(() => import("./mega-menus/solutions-mega-menu")),
  pricing: dynamic(() => import("./mega-menus/pricing-mega-menu")),
  developers: dynamic(() => import("./mega-menus/developers-mega-menu")),
  company: dynamic(() => import("./mega-menus/company-mega-menu")),
};

export function getMegaMenu(navId: HeaderNavId): ComponentType | undefined {
  return MEGA_MENUS[navId];
}
