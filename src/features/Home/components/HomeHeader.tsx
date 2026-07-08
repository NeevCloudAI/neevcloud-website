"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "@/shared/icons/lucide-icon-map";
import Container from "@/shared/components/container";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string; dropdown?: boolean };

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
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <Container className="flex items-center justify-between gap-4 py-5">
        <Link href="/" className="shrink-0">
          <Image
            src="/icons/logo-white-with-name.svg"
            alt="NeevCloud"
            width={130}
            height={28}
            className="h-6 w-auto md:h-7"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex xl:gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-[15px] font-normal text-white/90 transition-colors hover:text-white"
            >
              {item.label}
              {item.dropdown && (
                <ChevronDown size={14} aria-hidden className="text-white/60" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#"
            className="flex items-center gap-1.5 rounded-md border border-white/20 px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
          >
            Login
            <ChevronDown size={14} aria-hidden />
          </Link>
          <Link
            href="/contact-neevcloud"
            className="rounded-md bg-white px-4 py-2 text-[14px] font-medium text-black transition-colors hover:bg-white/90"
          >
            Contact Sales
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          <Menu size={24} aria-hidden />
        </button>
      </Container>

      {isOpen && (
        <nav
          aria-label="Mobile"
          className="mx-4 flex flex-col gap-1 rounded-xl border border-white/10 bg-black/95 p-3 backdrop-blur lg:hidden"
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
