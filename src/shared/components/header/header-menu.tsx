"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "@/shared/icons/lucide-icon-map";
import { Button } from "@/shared/ui-lib";
import { buttonVariants } from "@/shared/ui-lib/button/button-variants";
import { cn } from "@/lib/utils";
import type { HeaderNavId } from "./nav-items";
import { NAV_ITEMS } from "./nav-items";
import { getMegaMenu } from "./mega-menu-loaders";

type HeaderMenuProps = {
  children: React.ReactNode;
};

const megaMenuPanelClassName = cn(
  "absolute left-1/2 top-full z-100",
  "w-full max-w-[min(1200px,calc(100vw-2rem))]",
  "-translate-x-1/2",
  "rounded-b-md bg-white shadow-md"
);

const navLinkUnderlineClassName =
  "relative flex h-20 items-center after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 group-focus-within:after:scale-x-100";

export default function HeaderMenu({ children }: HeaderMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedNavId, setMobileExpandedNavId] =
    useState<HeaderNavId | null>(null);
  const [desktopOpenNavId, setDesktopOpenNavId] = useState<HeaderNavId | null>(
    null
  );

  return (
    <>
      <div className="flex w-full flex-1 flex-wrap items-center justify-between gap-3 md:flex-nowrap">
        <div className="flex min-w-0 items-center gap-3 md:gap-5">
          {children}
          <nav
            className="hidden items-center gap-5 md:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((navItem) => {
              if (navItem.href) {
                return (
                  <div
                    key={navItem.label}
                    className={cn("group", navItem.desktopVisibilityClass)}
                  >
                    <div className={navLinkUnderlineClassName}>
                      <Link
                        href={navItem.href}
                        className={buttonVariants({
                          variant: "ghost",
                          textColor: "black",
                          spacing: "none",
                        })}
                      >
                        {navItem.label}
                      </Link>
                    </div>
                  </div>
                );
              }

              const MegaMenu = getMegaMenu(navItem.id);
              const isDesktopOpen = desktopOpenNavId === navItem.id;

              return (
                <div
                  key={navItem.label}
                  className={cn("group", navItem.desktopVisibilityClass)}
                  onMouseEnter={() => {
                    if (MegaMenu) setDesktopOpenNavId(navItem.id);
                  }}
                  onMouseLeave={() => {
                    setDesktopOpenNavId((current) =>
                      current === navItem.id ? null : current
                    );
                  }}
                  onFocusCapture={() => {
                    if (MegaMenu) setDesktopOpenNavId(navItem.id);
                  }}
                  onBlurCapture={(event) => {
                    if (
                      !event.currentTarget.contains(
                        event.relatedTarget as Node | null
                      )
                    ) {
                      setDesktopOpenNavId((current) =>
                        current === navItem.id ? null : current
                      );
                    }
                  }}
                >
                  <div className={navLinkUnderlineClassName}>
                    <Button variant="ghost" textColor="black" spacing="none">
                      {navItem.label}
                    </Button>
                  </div>
                  {MegaMenu && isDesktopOpen ? (
                    <div className={megaMenuPanelClassName} role="presentation">
                      <MegaMenu />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
        <div className="hidden w-full items-center gap-2 header-buttons:flex sm:gap-3 md:w-auto md:gap-5">
          <Button
            variant="secondary"
            spacing="md"
            className="flex-1 whitespace-nowrap md:flex-none"
          >
            Login to CPU Cloud
          </Button>
          <Button className="flex-1 whitespace-nowrap md:flex-none">
            Login to AI Cloud
          </Button>
        </div>
        <button
          type="button"
          className="header-company:hidden rounded-md p-1 text-black-80 hover:bg-gray-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
        >
          <Menu size={16} aria-hidden />
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav
          id="responsive-navigation-menu"
          className="header-company:hidden absolute left-0 right-0 top-full z-20 mt-1 flex flex-col gap-2 overflow-auto rounded-md border border-gray-10 bg-white p-2 shadow-md"
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
            if (navItem.href) {
              return (
                <div
                  key={navItem.label}
                  className={`overflow-hidden rounded-md border border-gray-200 ${navItem.menuVisibilityClass}`}
                >
                  <Link
                    href={navItem.href}
                    className="flex w-full items-center px-3 py-2.5 text-left text-sm text-black-80"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setMobileExpandedNavId(null);
                    }}
                  >
                    {navItem.label}
                  </Link>
                </div>
              );
            }

            const MobileMegaMenu = getMegaMenu(navItem.id);
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
