"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type { HeaderNavId } from "./nav-items";
import { NAV_ITEMS } from "./nav-items";
import ProductMegaMenu from "./mega-menus/product-mega-menu";
import SolutionsMegaMenu from "./mega-menus/solutions-mega-menu";
import DevelopersMegaMenu from "./mega-menus/developers-mega-menu";
import CompanyMegaMenu from "./mega-menus/company-mega-menu";
import InferenceMegaMenu from "./mega-menus/inference-mega-menu copy";
import PricingMegaMenu from "./mega-menus/pricing-mega-menu";
import ResourcesMegaMenu from "./mega-menus/resources-mega-menu";

function getHeaderMegaMenu(navId: HeaderNavId): ComponentType | undefined {
  switch (navId) {
    case "resources":
      return ResourcesMegaMenu;
    case "pricing":
      return PricingMegaMenu;
    case "inference-hub":
      return InferenceMegaMenu;
    case "product":
      return ProductMegaMenu;
    case "solutions":
      return SolutionsMegaMenu;
    case "developers":
      return DevelopersMegaMenu;
    case "company":
      return CompanyMegaMenu;
    default:
      return undefined;
  }
}

type HeaderMenuProps = {
  children: React.ReactNode;
};

export default function HeaderMenu({ children }: HeaderMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedNavId, setMobileExpandedNavId] =
    useState<HeaderNavId | null>(null);

  return (
    <>
      <div className="flex w-full flex-1 flex-wrap items-center justify-between gap-3 md:flex-nowrap">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          {children}
          <nav
            className="hidden items-center gap-4 md:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((navItem) => {
              const MegaMenu = getHeaderMegaMenu(navItem.id);
              let megaMenuPanel = null;
              if (MegaMenu) {
                megaMenuPanel = (
                  <div
                    className={cn(
                      "pointer-events-none absolute left-1/2 top-[72%] z-100",
                      "w-full max-w-[min(1200px,calc(100vw-2rem))]",
                      "-translate-x-1/2",
                      "rounded-b-md bg-white opacity-0 shadow-md",
                      "transition-opacity duration-150",
                      "group-hover:pointer-events-auto group-hover:opacity-100",
                      "group-focus-within:pointer-events-auto group-focus-within:opacity-100"
                    )}
                    role="presentation"
                  >
                    <MegaMenu />
                  </div>
                );
              }
              return (
                <div
                  key={navItem.label}
                  className={cn("group", navItem.desktopVisibilityClass)}
                >
                  <div className="relative pb-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 group-focus-within:after:scale-x-100">
                    <Button variant="ghost" textColor="black" spacing="none">
                      {navItem.label}
                    </Button>
                  </div>
                  {megaMenuPanel}
                </div>
              );
            })}
          </nav>
        </div>
        <div className="hidden w-full items-center gap-2 header-buttons:flex sm:gap-3 md:w-auto md:gap-4">
          <Button
            variant="secondary"
            className="flex-1 whitespace-nowrap md:flex-none"
          >
            Login to CPU Cloud
          </Button>
          <Button className="flex-1 whitespace-nowrap md:flex-none">
            Login to AI Cloud
          </Button>
        </div>
        <Menu
          size={16}
          className="header-company:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="responsive-navigation-menu"
          onClick={() => {
            setIsMobileMenuOpen((open) => {
              if (open) {
                setMobileExpandedNavId(null);
              }
              return !open;
            });
          }}
        />
      </div>
      {isMobileMenuOpen && (
        <nav
          id="responsive-navigation-menu"
          className="header-company:hidden absolute left-0 right-0 top-full z-20 mt-1 flex max-h-[70vh] flex-col gap-2 overflow-y-auto rounded-md border border-gray-10 bg-white p-2 shadow-md"
          aria-label="Responsive navigation"
        >
          <div className="header-buttons:hidden flex w-full items-center gap-2">
            <Button variant="secondary" className="flex-1 whitespace-nowrap">
              Login to CPU Cloud
            </Button>
            <Button className="flex-1 whitespace-nowrap">
              Login to AI Cloud
            </Button>
          </div>
          {NAV_ITEMS.map((navItem) => {
            const MobileMegaMenu = getHeaderMegaMenu(navItem.id);
            const hasMegaMenu = MobileMegaMenu !== undefined;
            const isExpanded =
              hasMegaMenu && mobileExpandedNavId === navItem.id;
            return (
              <div
                key={navItem.label}
                className={`overflow-hidden rounded-md border border-gray-200 ${navItem.menuVisibilityClass}`}
              >
                <button
                  type="button"
                  id={hasMegaMenu ? `mobile-nav-${navItem.id}` : undefined}
                  aria-expanded={hasMegaMenu ? isExpanded : undefined}
                  aria-controls={
                    hasMegaMenu ? `mobile-nav-panel-${navItem.id}` : undefined
                  }
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2.5 text-left text-sm",
                    hasMegaMenu ? "gap-2 font-medium text-black-80" : undefined
                  )}
                  onClick={() => {
                    if (!hasMegaMenu) return;
                    setMobileExpandedNavId((prev) =>
                      prev === navItem.id ? null : navItem.id
                    );
                  }}
                >
                  {navItem.label}
                  {hasMegaMenu ? (
                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 text-gray-75 transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                      aria-hidden
                    />
                  ) : null}
                </button>
                {MobileMegaMenu && isExpanded ? (
                  <div
                    id={`mobile-nav-panel-${navItem.id}`}
                    role="region"
                    aria-labelledby={`mobile-nav-${navItem.id}`}
                    className="max-h-[min(60vh,520px)] overflow-y-auto overscroll-contain border-t border-gray-200 bg-gray-10 [&>div]:rounded-none [&>div]:p-4 [&>div]:shadow-none"
                  >
                    <MobileMegaMenu />
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      )}
    </>
  );
}
