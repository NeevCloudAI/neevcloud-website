"use client";

import { useState } from "react";
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

// All dropdown links for a nav item, flattened (used by the mobile menu).
function flatLinks(item: NavItem): NavLink[] {
  return item.groups?.flatMap((g) => g.links) ?? [];
}

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
          { label: "Visit the Platform", href: "/visit-platform", icon: RiWindowLine },
          { label: "Why AI SuperCloud", href: "/why-ai-supercloud", icon: RiCompass3Line },
          { label: "NeevCloud Arena", href: "/neevcloud-arena", icon: RiTrophyLine },
          { label: "Trust Center", href: "/trust-center", icon: RiShieldCheckLine },
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
          { label: "Serverless Inference", href: "/serverless-inference", icon: RiFlashlightLine },
          { label: "Model Playground", href: "/model-playground", icon: RiSparkling2Line },
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
          { label: "High-Performance NVMe", href: "/nvme", icon: RiHardDrive2Line },
          { label: "Object Storage", href: "/object-storage", icon: RiDatabase2Line },
        ],
      },
      {
        heading: "Orchestration",
        links: [
          { label: "Managed Kubernetes", href: "/managed-kubernetes", icon: RiStackLine },
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
          { label: "Public Sector", href: "/public-sector", icon: RiGovernmentLine },
          { label: "BFSI", href: "/bfsi", icon: RiBankLine },
          { label: "Media & VFX", href: "/media-vfx", icon: RiMovie2Line },
          { label: "Healthcare", href: "/healthcare", icon: RiHeartPulseLine },
          { label: "Defence", href: "/defence", icon: RiShieldStarLine },
        ],
      },
      {
        heading: "By Tech",
        links: [
          { label: "LLM Fine-Tuning", href: "/llm-training", icon: RiBrainLine },
          { label: "Generative AI", href: "/generative-ai", icon: RiMagicLine },
          { label: "Agentic Workflows", href: "/agentic-workflow", icon: RiFlowChart },
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
          { label: "AI Inference", href: "/ai-inference", icon: RiFlashlightLine },
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
          { label: "Developers Hub", href: "/developers", icon: RiCodeSSlashLine },
          { label: "Model APIs", href: "/model-api", icon: RiTerminalBoxLine },
          { label: "Agentic Workflows", href: "/agentic-workflow", icon: RiFlowChart },
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
          { label: "Life at NeevCloud", href: "/life-at-neevcloud", icon: RiEmotionHappyLine },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Newsroom", href: "/newsroom", icon: RiNewspaperLine },
          { label: "Events", href: "/events", icon: RiCalendarEventLine },
          { label: "Blogs", href: EXTERNAL_LINKS.blogs, icon: RiArticleLine },
          { label: "Contact Us", href: "/contact-neevcloud#contact-form", icon: RiMailSendLine },
        ],
      },
    ],
  },
];

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  // which mobile nav group is expanded (Taito-style accordion)
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-white/[0.12]">
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
            className="hidden items-center gap-5 xl:flex"
          >
            {NAV_ITEMS.map((item) =>
              item.groups ? (
                <div key={item.label} className="group/nav relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 whitespace-nowrap text-[13px] font-medium leading-6 tracking-[-0.02em] text-white transition-opacity hover:opacity-70"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      aria-hidden
                      className="text-white transition-transform duration-200 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180"
                    />
                  </Link>
                  {/* pt-3 bridges the gap so hover isn't lost moving to the panel */}
                  <div className="invisible absolute left-0 top-full z-50 w-max translate-y-1 pt-3 opacity-0 transition-all duration-150 delay-150 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-hover/nav:delay-0 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                    {/* Legora-style frosted glass panel — grouped rows with
                        section labels + icons, mirroring the site mega-menus */}
                    <div
                      className={cn(
                        "rounded-2xl border border-white/10 bg-[#1c1f1e]/70 p-2 shadow-[0_24px_60px_#00000059] backdrop-blur-2xl",
                        item.groups.length > 1
                          ? "grid min-w-[440px] grid-cols-2 gap-x-2"
                          : "min-w-[240px]",
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
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap text-[13px] font-medium leading-6 tracking-[-0.02em] text-white transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ),
            )}
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
                    <LoginIcon size={16} aria-hidden className="text-neev-green" />
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

            <ul className="mt-8 flex flex-1 list-none flex-col overflow-y-auto">
              {NAV_ITEMS.map((item) =>
                item.groups ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={openGroup === item.label}
                      onClick={() =>
                        setOpenGroup((g) =>
                          g === item.label ? null : item.label,
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
                          openGroup === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        openGroup === item.label
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]",
                      )}
                    >
                      <ul className="min-h-0 list-none overflow-hidden">
                        {flatLinks(item).map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 pl-4 text-[16px] text-white/70"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
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
                ),
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
