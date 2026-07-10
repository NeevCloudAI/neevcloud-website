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

type NavLink = { label: string; href: string };
type NavItem = { label: string; href: string; items?: NavLink[] };

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

// Order + labels taken from the Paper navbar (node 3-0). Dropdown items link to
// the real inner pages.
const NAV_ITEMS: NavItem[] = [
  { label: "AI SuperCloud", href: "/why-ai-supercloud" },
  {
    label: "Inference Hub",
    href: "/ai-inference",
    items: [
      { label: "AI Inference", href: "/ai-inference" },
      { label: "Serverless Inference", href: "/serverless-inference" },
      { label: "Model Playground", href: "/model-playground" },
      { label: "Model APIs", href: "/model-api" },
      { label: "Model Catalog", href: "/model-catalog" },
    ],
  },
  {
    label: "Product",
    href: "/gpu-cluster",
    items: [
      { label: "GPU Instance", href: "/gpu-cluster" },
      { label: "CPU Instance", href: "/cpu-cluster" },
      { label: "Managed Kubernetes", href: "/managed-kubernetes" },
      { label: "High-Performance NVMe", href: "/nvme" },
      { label: "Object Storage", href: "/object-storage" },
    ],
  },
  {
    label: "Solutions",
    href: "/public-sector",
    items: [
      { label: "Public Sector", href: "/public-sector" },
      { label: "BFSI", href: "/bfsi" },
      { label: "Media & VFX", href: "/media-vfx" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Defence", href: "/defence" },
      { label: "LLM Fine-Tuning", href: "/llm-training" },
      { label: "Generative AI", href: "/generative-ai" },
      { label: "Agentic Workflows", href: "/agentic-workflow" },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
    items: [
      { label: "Developers Hub", href: "/developers" },
      { label: "Model APIs", href: "/model-api" },
      { label: "Agentic Workflows", href: "/agentic-workflow" },
    ],
  },
  {
    label: "Resources",
    href: "/newsroom",
    items: [
      { label: "Newsroom", href: "/newsroom" },
      { label: "Blogs", href: EXTERNAL_LINKS.blogs },
      { label: "Events", href: "/events" },
      { label: "Trust Center", href: "/trust-center" },
      { label: "NeevCloud Arena", href: "/neevcloud-arena" },
    ],
  },
  {
    label: "Company",
    href: "/about-us",
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Leadership", href: "/leadership" },
      { label: "Career", href: "/careers" },
      { label: "Life at NeevCloud", href: "/life-at-neevcloud" },
      { label: "Contact Us", href: "/contact-neevcloud" },
    ],
  },
  { label: "Pricing", href: "/gpu-pricing" },
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
              item.items ? (
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
                  <div className="invisible absolute left-0 top-full z-50 w-max translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                    {/* Legora-style frosted glass panel — compact rows */}
                    <div
                      className={cn(
                        "rounded-2xl border border-white/10 bg-[#1c1f1e]/70 p-1.5 shadow-[0_24px_60px_#00000059] backdrop-blur-2xl",
                        item.items.length > 6
                          ? "grid grid-cols-2 gap-x-1"
                          : "min-w-[210px]",
                      )}
                    >
                      {item.items.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block whitespace-nowrap rounded-lg px-3 py-1.5 text-[14px] font-normal leading-5 tracking-[-0.02em] text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {sub.label}
                        </Link>
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
                item.items ? (
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
                        {item.items.map((sub) => (
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
