"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  GpuIcon,
  CpuIcon,
  DatabaseIcon,
} from "@/shared/icons/lucide-icon-map";
import Container from "@/shared/components/container";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import { cn } from "@/lib/utils";

import type { RemixiconComponentType } from "@remixicon/react";
import {
  RiWindowLine,
  RiCompass3Line,
  RiTrophyLine,
  RiShieldCheckLine,
  RiFlashlightLine,
  RiSparkling2Line,
  RiTerminalBoxLine,
  RiBook2Line,
  RiCpuLine as RiCpuChipLine,
  RiStackLine,
  RiHardDrive2Line,
  RiDatabase2Line,
  RiPriceTag3Line,
  RiCoinsLine,
  RiBankLine,
  RiGovernmentLine,
  RiMovie2Line,
  RiHeartPulseLine,
  RiShieldStarLine,
  RiBrainLine,
  RiMagicLine,
  RiFlowChart,
  RiCodeSSlashLine,
  RiTeamLine,
  RiUserStarLine,
  RiBriefcase4Line,
  RiEmotionHappyLine,
  RiCalendarEventLine,
  RiMailSendLine,
  RiNewspaperLine,
  RiArticleLine,
  RiServerLine,
} from "@remixicon/react";

type NavLink = { label: string; href: string; icon?: RemixiconComponentType };
type NavGroup = { heading?: string; links: NavLink[] };
type NavItem = { label: string; href: string; groups?: NavGroup[] };

const LOGIN_OPTIONS = [
  {
    label: "Login to AI SuperCloud",
    href: EXTERNAL_LINKS.aiSupercloudConsole,
    icon: GpuIcon,
  },
  { label: "Login to CPU Cloud", href: EXTERNAL_LINKS.signup, icon: CpuIcon },
  {
    label: "Login to Cloud Storage",
    href: EXTERNAL_LINKS.zataAiSignup,
    icon: DatabaseIcon,
  },
];

// Structure and links mirror the sitewide mega-menus (src/shared/components/
// header/mega-menus) so the homepage nav matches every other page.
const NAV_ITEMS: NavItem[] = [
  {
    label: "AI SuperCloud",
    href: "/why-ai-supercloud",
    groups: [
      {
        heading: "AI SuperCloud",
        links: [
          {
            label: "Visit the Platform",
            href: "/visit-platform",
            icon: RiWindowLine,
          },
          {
            label: "Why AI SuperCloud",
            href: "/why-ai-supercloud",
            icon: RiCompass3Line,
          },
          {
            label: "NeevCloud Arena",
            href: "/neevcloud-arena",
            icon: RiTrophyLine,
          },
          {
            label: "Trust Center",
            href: "/trust-center",
            icon: RiShieldCheckLine,
          },
        ],
      },
    ],
  },
  {
    label: "Inference Hub",
    href: "/ai-inference",
    groups: [
      {
        heading: "Inference Hub",
        links: [
          {
            label: "Serverless Inference",
            href: "/serverless-inference",
            icon: RiFlashlightLine,
          },
          {
            label: "Model Playground",
            href: "/model-playground",
            icon: RiSparkling2Line,
          },
          { label: "Model APIs", href: "/model-api", icon: RiTerminalBoxLine },
          { label: "Model Catalog", href: "/model-catalog", icon: RiBook2Line },
        ],
      },
    ],
  },
  {
    label: "Product",
    href: "/gpu-cluster",
    groups: [
      {
        heading: "Compute",
        links: [
          { label: "CPU Instance", href: "/cpu-cluster", icon: RiCpuChipLine },
          { label: "GPU Instance", href: "/gpu-cluster", icon: RiServerLine },
        ],
      },
      {
        heading: "Storage",
        links: [
          {
            label: "High-Performance NVMe",
            href: "/nvme",
            icon: RiHardDrive2Line,
          },
          {
            label: "Object Storage",
            href: "/object-storage",
            icon: RiDatabase2Line,
          },
        ],
      },
      {
        heading: "Orchestration",
        links: [
          {
            label: "Managed Kubernetes",
            href: "/managed-kubernetes",
            icon: RiStackLine,
          },
        ],
      },
      {
        heading: "Available GPUs",
        links: [
          { label: "H100", href: "/nvidia-h100", icon: RiCpuChipLine },
          { label: "H200", href: "/nvidia-h200", icon: RiCpuChipLine },
          { label: "B200", href: "/nvidia-b200", icon: RiCpuChipLine },
          { label: "B300", href: "/nvidia-b300", icon: RiCpuChipLine },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/public-sector",
    groups: [
      {
        heading: "By Industry",
        links: [
          {
            label: "Public Sector",
            href: "/public-sector",
            icon: RiGovernmentLine,
          },
          { label: "BFSI", href: "/bfsi", icon: RiBankLine },
          { label: "Media & VFX", href: "/media-vfx", icon: RiMovie2Line },
          { label: "Healthcare", href: "/healthcare", icon: RiHeartPulseLine },
          { label: "Defence", href: "/defence", icon: RiShieldStarLine },
        ],
      },
      {
        heading: "By Tech",
        links: [
          {
            label: "LLM Fine-Tuning",
            href: "/llm-training",
            icon: RiBrainLine,
          },
          { label: "Generative AI", href: "/generative-ai", icon: RiMagicLine },
          {
            label: "Agentic Workflows",
            href: "/agentic-workflow",
            icon: RiFlowChart,
          },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/gpu-pricing",
    groups: [
      {
        heading: "Pricing",
        links: [
          { label: "GPU Compute", href: "/gpu-pricing", icon: RiPriceTag3Line },
          { label: "CPU Compute", href: "/cpu-pricing", icon: RiCoinsLine },
          {
            label: "AI Inference",
            href: "/ai-inference",
            icon: RiFlashlightLine,
          },
        ],
      },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
    groups: [
      {
        heading: "Developers",
        links: [
          {
            label: "Developers Hub",
            href: "/developers",
            icon: RiCodeSSlashLine,
          },
          { label: "Model APIs", href: "/model-api", icon: RiTerminalBoxLine },
          {
            label: "Agentic Workflows",
            href: "/agentic-workflow",
            icon: RiFlowChart,
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/about-us",
    groups: [
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about-us", icon: RiTeamLine },
          { label: "Leadership", href: "/leadership", icon: RiUserStarLine },
          { label: "Career", href: "/careers", icon: RiBriefcase4Line },
          {
            label: "Life at NeevCloud",
            href: "/life-at-neevcloud",
            icon: RiEmotionHappyLine,
          },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Newsroom", href: "/newsroom", icon: RiNewspaperLine },
          { label: "Events", href: "/events", icon: RiCalendarEventLine },
          { label: "Blogs", href: EXTERNAL_LINKS.blogs, icon: RiArticleLine },
          {
            label: "Contact Us",
            href: "/contact-neevcloud#contact-form",
            icon: RiMailSendLine,
          },
        ],
      },
    ],
  },
];

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  // which mobile nav group is expanded (Taito-style accordion)
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Desktop dropdowns are ONE shared Stripe-style panel: it glides to the
  // hovered item and resizes to its content instead of separate per-item
  // panels cross-fading.
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [panelBox, setPanelBox] = useState({ x: 0, w: 0, h: 0 });
  // true once the panel is already showing — switches glide, first open snaps
  const glideRef = useRef(false);
  const closeTimerRef = useRef(0);
  const triggerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const openPanel = (label: string) => {
    window.clearTimeout(closeTimerRef.current);
    setOpenNav(label);
  };
  const cancelClose = () => window.clearTimeout(closeTimerRef.current);
  const scheduleClose = () => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpenNav(null), 140);
  };

  useEffect(() => {
    if (!openNav) {
      glideRef.current = false;
      return;
    }
    const measure = () => {
      const trigger = triggerRefs.current[openNav];
      const content = contentRefs.current[openNav];
      if (trigger && content) {
        setPanelBox({
          x: trigger.offsetLeft,
          w: content.offsetWidth,
          h: content.offsetHeight,
        });
      }
    };
    measure();
    // keep the floating panel aligned if the viewport/zoom changes while open
    window.addEventListener("resize", measure);
    // once the first position/size has painted, later switches animate
    const id = requestAnimationFrame(() => {
      glideRef.current = true;
    });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", measure);
    };
  }, [openNav]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  // While the mobile menu is open: lock the page scroller (body), close on
  // Escape, move focus into the dialog (restoring it on close), and close
  // if the viewport grows past xl — otherwise the hidden menu would leave
  // the body scroll-locked on desktop.
  useEffect(() => {
    if (!isOpen) {
      setOpenGroup(null);
      return;
    }
    const opener = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document
      .querySelector<HTMLElement>("#home-mobile-nav [aria-label='Close menu']")
      ?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      // keep Tab cycling inside the full-screen menu (it covers the page)
      if (e.key !== "Tab") return;
      const nav = document.getElementById("home-mobile-nav");
      if (!nav) return;
      const els = [
        ...nav.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ].filter((el) => !el.closest("[inert]"));
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !nav.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !nav.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1280px)");
    const onDesktop = () => {
      if (mq.matches) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onDesktop);
      opener?.focus();
    };
  }, [isOpen]);

  return (
    // Mobile: fixed (sticky) frosted bar so the nav is always reachable;
    // desktop keeps the transparent absolute bar over the hero.
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/[0.12] xl:absolute">
      {/* Frost lives on an overlay, not the <header> — backdrop-filter on the
          header would become the containing block for the fixed full-screen
          mobile menu and trap it inside the bar. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#0d1110]/70 backdrop-blur-xl xl:hidden"
      />
      <Container className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/icons/logo-white-with-name.svg"
              alt="NeevCloud"
              width={130}
              height={24}
              className="h-6 w-auto"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="relative hidden items-center gap-5 xl:flex"
            onPointerEnter={cancelClose}
            onPointerLeave={scheduleClose}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpenNav(null);
            }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setOpenNav(null);
              }
            }}
          >
            {NAV_ITEMS.map((item) =>
              item.groups ? (
                <div
                  key={item.label}
                  ref={(el) => {
                    triggerRefs.current[item.label] = el;
                  }}
                >
                  <Link
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={openNav === item.label}
                    onPointerEnter={() => openPanel(item.label)}
                    onFocus={() => openPanel(item.label)}
                    onKeyDown={(e) => {
                      // ArrowDown steps keyboard focus into the open panel
                      // (the panel sits after all triggers in DOM order)
                      if (e.key !== "ArrowDown") return;
                      e.preventDefault();
                      openPanel(item.label);
                      requestAnimationFrame(() => {
                        contentRefs.current[item.label]
                          ?.querySelector<HTMLElement>("a")
                          ?.focus();
                      });
                    }}
                    className="flex items-center gap-1 whitespace-nowrap text-[13px] font-medium leading-6 tracking-[-0.02em] text-white transition-opacity hover:opacity-70"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      aria-hidden
                      className={cn(
                        "text-white transition-transform duration-200",
                        openNav === item.label && "rotate-180"
                      )}
                    />
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onPointerEnter={scheduleClose}
                  className="flex items-center gap-1 whitespace-nowrap text-[13px] font-medium leading-6 tracking-[-0.02em] text-white transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Shared floating panel (Stripe-style): pt-3 bridges the hover
                gap; the glass box glides on X and morphs width/height while
                the per-item contents cross-fade inside it. */}
            <div
              className={cn(
                "absolute left-0 top-full z-50 pt-3",
                glideRef.current
                  ? "transition-[translate,transform,opacity,visibility] duration-200"
                  : "transition-[translate,opacity,visibility] duration-200",
                openNav
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-1 opacity-0"
              )}
              style={{ transform: `translateX(${panelBox.x}px)` }}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-white/10 bg-[#1c1f1e]/70 shadow-[0_24px_60px_#00000059] backdrop-blur-2xl",
                  glideRef.current
                    ? "transition-[width,height] duration-300 ease-out"
                    : "transition-none"
                )}
                style={{
                  width: panelBox.w || undefined,
                  height: panelBox.h || undefined,
                }}
              >
                {NAV_ITEMS.filter(
                  (i): i is NavItem & { groups: NavGroup[] } => !!i.groups
                ).map((item) => (
                  <div
                    key={item.label}
                    ref={(el) => {
                      contentRefs.current[item.label] = el;
                    }}
                    aria-hidden={openNav !== item.label}
                    inert={openNav !== item.label || undefined}
                    className={cn(
                      "absolute left-0 top-0 w-max p-2 transition-opacity duration-200",
                      item.groups.length > 1
                        ? "grid min-w-[440px] grid-cols-2 gap-x-2"
                        : "min-w-[240px]",
                      openNav === item.label
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    )}
                  >
                    {item.groups.map((group) => (
                      <div key={group.heading ?? item.label}>
                        {group.heading && (
                          <p className="px-3 pb-1 pt-2.5 text-[11px] font-medium uppercase tracking-[0.08em] text-white/40">
                            {group.heading}
                          </p>
                        )}
                        {group.links.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            tabIndex={openNav === item.label ? 0 : -1}
                            className="flex items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[14px] font-normal leading-5 tracking-[-0.02em] text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {sub.icon && (
                              <sub.icon
                                size={15}
                                aria-hidden
                                className="shrink-0 text-neev-green/80"
                              />
                            )}
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="group/login relative">
            <button
              type="button"
              className="flex items-center gap-1 bg-[#FFFFFF29] px-3 py-1 text-[13px] font-medium leading-6 tracking-[-0.02em] text-white outline outline-1 -outline-offset-1 outline-white transition-colors hover:bg-white/25"
            >
              Login
              <ChevronDown
                size={14}
                aria-hidden
                className="transition-transform duration-200 group-hover/login:rotate-180 group-focus-within/login:rotate-180"
              />
            </button>
            {/* pt-2 bridges the button→panel gap so hover isn't lost mid-move */}
            <div className="invisible absolute right-0 top-full z-50 w-max translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover/login:visible group-hover/login:translate-y-0 group-hover/login:opacity-100 group-focus-within/login:visible group-focus-within/login:translate-y-0 group-focus-within/login:opacity-100">
              {/* Frosted glass panel — matches the primary nav dropdowns */}
              <div className="rounded-2xl border border-white/10 bg-[#1c1f1e]/70 p-1.5 shadow-[0_24px_60px_#00000059] backdrop-blur-2xl">
                {LOGIN_OPTIONS.map(({ label, href, icon: LoginIcon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[14px] font-normal leading-5 tracking-[-0.02em] text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <LoginIcon
                      size={16}
                      aria-hidden
                      className="text-neev-green"
                    />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/contact-neevcloud"
            className="bg-white px-3 py-1 text-[13px] font-medium leading-6 tracking-[-0.02em] text-[#2D9D80] transition-colors hover:bg-white/90"
          >
            Contact Sales
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="home-mobile-nav"
          onClick={() => setIsOpen((v) => !v)}
          className="-m-2 grid size-11 place-items-center text-white xl:hidden"
        >
          <Menu size={24} aria-hidden />
        </button>
      </Container>

      {isOpen && (
        <nav
          id="home-mobile-nav"
          aria-label="Mobile"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] xl:hidden"
        >
          {/* Taito-style full-screen card */}
          <div className="flex h-full flex-col overflow-hidden bg-[#0d1110] px-5 pb-8 pt-4">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/icons/logo-white-with-name.svg"
                  alt="NeevCloud"
                  width={130}
                  height={24}
                  className="h-6 w-auto"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="grid size-11 place-items-center text-white"
              >
                {/* simple X */}
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <ul className="mt-8 flex flex-1 list-none flex-col overflow-y-auto overscroll-contain">
              {NAV_ITEMS.map((item) =>
                item.groups ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={openGroup === item.label}
                      onClick={() =>
                        setOpenGroup((g) =>
                          g === item.label ? null : item.label
                        )
                      }
                      className="flex w-full items-center justify-between py-3 text-left text-[26px] font-normal leading-tight text-white"
                    >
                      {item.label}
                      <ChevronDown
                        size={22}
                        aria-hidden
                        className={cn(
                          "text-white/70 transition-transform duration-200",
                          openGroup === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      aria-hidden={openGroup !== item.label}
                      // inert keeps the visually-collapsed links out of the
                      // keyboard tab order and accessibility tree
                      inert={openGroup !== item.label || undefined}
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        openGroup === item.label
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      )}
                    >
                      {/* grouped like the desktop panels: section label +
                          icon rows */}
                      <div className="min-h-0 overflow-hidden">
                        {item.groups.map((group) => (
                          <div key={group.heading ?? item.label}>
                            {group.heading && (
                              <p className="pb-1 pl-4 pt-3 text-[11px] font-medium uppercase tracking-[0.08em] text-white/40">
                                {group.heading}
                              </p>
                            )}
                            {group.links.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2.5 py-2 pl-4 text-[16px] text-white/70"
                              >
                                {sub.icon && (
                                  <sub.icon
                                    size={16}
                                    aria-hidden
                                    className="shrink-0 text-neev-green/80"
                                  />
                                )}
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-[26px] font-normal leading-tight text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/contact-neevcloud"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-white py-3.5 text-center text-[16px] font-medium text-black"
              >
                Contact Sales
              </Link>
              <Link
                href={LOGIN_OPTIONS[0].href}
                onClick={() => setIsOpen(false)}
                className="py-2.5 text-center text-[16px] font-medium text-white"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
