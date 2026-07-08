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

type NavItem = { label: string; href: string; dropdown?: boolean };

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

// Order + labels taken from the Paper navbar (node 3-0).
const NAV_ITEMS: NavItem[] = [
  { label: "AI SuperCloud", href: "/why-ai-supercloud" },
  { label: "Inference Hub", href: "/ai-inference", dropdown: true },
  { label: "Product", href: "/gpu-cluster", dropdown: true },
  { label: "Solutions", href: "/public-sector", dropdown: true },
  { label: "Developers", href: "/developers", dropdown: true },
  { label: "Resources", href: "/newsroom", dropdown: true },
  { label: "Company", href: "/about-us", dropdown: true },
  { label: "Pricing", href: "/gpu-pricing" },
];

export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

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
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap text-[13px] font-medium leading-6 tracking-[-0.02em] text-white transition-opacity hover:opacity-70"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown size={14} aria-hidden className="text-white" />
                )}
              </Link>
            ))}
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
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-max translate-y-1 rounded-md border border-cloud-gray bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover/login:visible group-hover/login:translate-y-0 group-hover/login:opacity-100 group-focus-within/login:visible group-focus-within/login:translate-y-0 group-focus-within/login:opacity-100">
              {LOGIN_OPTIONS.map(({ label, href, icon: LoginIcon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 whitespace-nowrap rounded px-3 py-2 text-[13px] font-medium leading-6 tracking-[-0.02em] text-black transition-colors hover:bg-cloud-gray"
                >
                  <LoginIcon size={16} aria-hidden className="text-primary" />
                  {label}
                </Link>
              ))}
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
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="text-white xl:hidden"
        >
          <Menu size={24} aria-hidden />
        </button>
      </Container>

      {isOpen && (
        <nav
          aria-label="Mobile"
          className="mx-4 flex flex-col gap-1 rounded-xl border border-white/10 bg-black/95 p-3 backdrop-blur xl:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-md px-3 py-2.5 text-[15px] text-white/90 hover:bg-white/10",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
            <Link
              href="#"
              className="rounded-md border border-white/20 px-4 py-2.5 text-center text-[14px] font-medium text-white"
            >
              Login
            </Link>
            <Link
              href="#"
              className="rounded-md bg-white px-4 py-2.5 text-center text-[14px] font-medium text-black"
            >
              Contact Sales
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
