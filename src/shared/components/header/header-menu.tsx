"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  CpuIcon,
  DatabaseIcon,
  GpuIcon,
  Menu,
} from "@/shared/icons/lucide-icon-map";
import { Button, LinkComponent } from "@/shared/ui-lib";
import { buttonVariants } from "@/shared/ui-lib/button/button-variants";
import { cn } from "@/lib/utils";
import type { HeaderNavId } from "./nav-items";
import { NAV_ITEMS } from "./nav-items";
import { getMegaMenu } from "./mega-menu-loaders";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

type HeaderMenuProps = {
  children: React.ReactNode;
};

const megaMenuPanelClassName = cn(
  "absolute left-1/2 top-full z-100",
  "w-full max-w-[min(1000px,calc(100vw-2rem))]",
  "-translate-x-1/2",
  "rounded-b-md bg-white shadow-md"
);

const navLinkUnderlineClassName =
  "relative flex h-20 items-center after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 group-focus-within:after:scale-x-100";

const LOGIN_OPTIONS = [
  {
    label: "Login to AI SuperCloud",
    href: EXTERNAL_LINKS.aiSupercloudConsole,
    icon: GpuIcon,
    variant: "default" as const,
  },
  {
    label: "Login to CPU Cloud",
    href: EXTERNAL_LINKS.signup,
    icon: CpuIcon,
    variant: "secondary" as const,
  },
  {
    label: "Login to Cloud Storage",
    href: EXTERNAL_LINKS.zataAiSignup,
    icon: DatabaseIcon,
    variant: "deep-blue" as const,
  },
];

function shouldCloseMegaMenuOnClick(target: EventTarget | null): boolean {
  return Boolean(
    target instanceof Element && target.closest("a, button[type='button']")
  );
}

export default function HeaderMenu({ children }: HeaderMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedNavId, setMobileExpandedNavId] =
    useState<HeaderNavId | null>(null);
  const [desktopOpenNavId, setDesktopOpenNavId] = useState<HeaderNavId | null>(
    null
  );

  const closeDesktopMegaMenu = () => setDesktopOpenNavId(null);

  const closeMobileMegaMenu = () => {
    setMobileExpandedNavId(null);
    setIsMobileMenuOpen(false);
  };

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
                    <div
                      className={megaMenuPanelClassName}
                      role="presentation"
                      onClickCapture={(event) => {
                        if (shouldCloseMegaMenuOnClick(event.target)) {
                          closeDesktopMegaMenu();
                        }
                      }}
                    >
                      <MegaMenu />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </div>
        <div className="group relative hidden header-buttons:block">
          <Button
            spacing="md"
            borderRadius="xl"
            className="gap-1.5 flex items-center drop-shadow-[0_0_10px_#58D7A7] px-4 md:px-8 "
          >
            Login
            <ChevronDown
              size={16}
              className="transition-transform duration-200 group-hover:rotate-180"
              aria-hidden
            />
          </Button>
          <div className="mt-0.5 invisible absolute right-0 top-full z-100 p-2 overflow-hidden rounded-md border border-cloud-gray bg-white opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
            {LOGIN_OPTIONS.map(({ label, href, icon: LoginIcon }) => (
              <LinkComponent
                key={label}
                href={href}
                target="_blank"
                variant="ghost"
                spacing="md"
                className="w-full rounded-none flex items-center gap-2 hover:bg-cloud-gray whitespace-nowrap"
              >
                <LoginIcon size={16} aria-hidden />
                {label}
              </LinkComponent>
            ))}
          </div>
        </div>
        <Button
          variant="ghost"
          spacing="none"
          textColor="black"
          className="header-company:hidden pr-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="responsive-navigation-menu"
          onClick={() => {
            setIsMobileMenuOpen((open) => {
              if (open) setMobileExpandedNavId(null);
              return !open;
            });
          }}
        >
          <Menu aria-hidden className="size-4 md:size-6" />
        </Button>
      </div>
      {isMobileMenuOpen && (
        <nav
          id="responsive-navigation-menu"
          className="header-company:hidden absolute left-0 right-0 top-full z-20 mt-1 flex flex-col gap-2 overflow-auto rounded-md border border-cloud-gray bg-white p-2 shadow-md"
          aria-label="Responsive navigation"
        >
          <div className="header-buttons:hidden flex flex-col gap-1">
            {LOGIN_OPTIONS.map(({ label, href, variant }) => (
              <LinkComponent
                key={label}
                href={href}
                target="_blank"
                variant={variant}
                spacing="md"
                className="w-full"
                onClick={closeMobileMegaMenu}
              >
                {label}
              </LinkComponent>
            ))}
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
                    className="flex w-full items-center px-3 py-2.5 text-sm"
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
                <Button
                  variant="ghost"
                  textColor="black"
                  id={hasMegaMenu ? `mobile-nav-${navItem.id}` : undefined}
                  aria-expanded={hasMegaMenu ? isExpanded : undefined}
                  aria-controls={
                    hasMegaMenu ? `mobile-nav-panel-${navItem.id}` : undefined
                  }
                  className={cn("flex w-full items-center justify-between")}
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
                        "shrink-0 text-gray-04 transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )}
                      aria-hidden
                    />
                  ) : null}
                </Button>
                {MobileMegaMenu && isExpanded ? (
                  <div
                    id={`mobile-nav-panel-${navItem.id}`}
                    role="region"
                    aria-labelledby={`mobile-nav-${navItem.id}`}
                    className="max-h-[min(60vh,520px)] overflow-y-auto overscroll-contain border-t border-gray-200 bg-cloud-gray [&>div]:rounded-none [&>div]:p-4 [&>div]:shadow-none"
                    onClickCapture={(event) => {
                      if (shouldCloseMegaMenuOnClick(event.target)) {
                        closeMobileMegaMenu();
                      }
                    }}
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
