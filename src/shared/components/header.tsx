"use client";

import { useState } from "react";
import { Button, Divider, Text } from "@/shared/ui-lib";
import Image from "next/image";
import Container from "./container";
import { Menu } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  items: string[];
  desktopVisibilityClass: string;
  menuVisibilityClass: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    id: "inference-hub",
    label: "Inference Hub",
    items: ["Serverless Inference", "Dedicated Endpoints", "Model Library"],
    desktopVisibilityClass: "hidden header-inference:block",
    menuVisibilityClass: "header-inference:hidden",
  },
  {
    id: "product",
    label: "Product",
    items: ["GPU Cloud", "CPU Cloud", "Kubernetes", "Storage"],
    desktopVisibilityClass: "hidden header-product:block",
    menuVisibilityClass: "header-product:hidden",
  },
  {
    id: "solutions",
    label: "Solutions",
    items: ["Startups", "Enterprises", "Research Labs"],
    desktopVisibilityClass: "hidden header-solutions:block",
    menuVisibilityClass: "header-solutions:hidden",
  },
  {
    id: "pricing",
    label: "Pricing",
    items: ["GPU Pricing", "CPU Pricing", "Enterprise Plans"],
    desktopVisibilityClass: "hidden header-pricing:block",
    menuVisibilityClass: "header-pricing:hidden",
  },
  {
    id: "developers",
    label: "Developers",
    items: ["Docs", "API Reference", "SDKs", "Status"],
    desktopVisibilityClass: "hidden header-developers:block",
    menuVisibilityClass: "header-developers:hidden",
  },
  {
    id: "resources",
    label: "Resources",
    items: ["Blog", "Case Studies", "Guides"],
    desktopVisibilityClass: "hidden header-resource:block",
    menuVisibilityClass: "header-resource:hidden",
  },
  {
    id: "company",
    label: "Company",
    items: ["About Us", "Careers", "Contact"],
    desktopVisibilityClass: "hidden header-company:block",
    menuVisibilityClass: "header-company:hidden",
  },
];

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenuDropdown, setOpenMenuDropdown] = useState<string | null>(null);

  const toggleMenuDropdown = (label: string) => {
    setOpenMenuDropdown((currentValue) =>
      currentValue === label ? null : label
    );
  };

  return (
    <Container className="relative flex min-h-16 gap-3 py-3 md:min-h-20 items-center justify-between md:py-0">
      <div className="flex w-full items-center justify-between md:w-auto md:justify-start">
        <div className="flex items-center gap-3 md:gap-4">
          <Image
            src={"/icons/logo-black.svg"}
            alt="logo"
            width={120}
            height={120}
            className="h-8 w-auto md:h-10"
          />
          <Text
            weight="semibold"
            className="text-sm md:text-base whitespace-nowrap"
          >
            AI SuperCloud
          </Text>
          <Divider className="min-h-8 hidden header-buttons:block" />
          <div className="hidden items-center gap-4 md:flex">
            {NAV_ITEMS.map((navItem) => (
              <div
                key={navItem.label}
                className={`group relative ${navItem.desktopVisibilityClass}`}
              >
                <Button variant="ghost" textColor="black" spacing="none">
                  {navItem.label}
                </Button>
                <div className="invisible absolute left-0 top-full z-20 mt-2 rounded-md border border-gray-200 bg-white p-2 opacity-0 shadow-md duration-200 group-hover:visible group-hover:opacity-100">
                  {navItem.id === "product" ? (
                    <div className="flex flex-col gap-2 p-8">
                      <p>mAk</p>
                    </div>
                  ) : (
                    <></>
                  )}
                  {/* {navItem.items.map((dropdownItem) => (
                    <Button
                      variant="ghost"
                      textColor="black"
                      spacing="sm"
                      key={dropdownItem}
                    >
                      {dropdownItem}
                    </Button>
                  ))} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden header-buttons:flex w-full items-center gap-2 sm:gap-3 md:w-auto md:gap-4">
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
          setIsMobileMenuOpen((prevState) => !prevState);
          setOpenMenuDropdown(null);
        }}
      />
      {isMobileMenuOpen && (
        <nav
          id="responsive-navigation-menu"
          className="absolute left-0 right-0 top-full z-20 mt-1 flex max-h-[70vh] flex-col gap-2 overflow-y-auto rounded-md border border-gray-10 bg-white p-2 shadow-md header-company:hidden"
          aria-label="Responsive navigation"
        >
          <div className="w-full items-center gap-2 flex header-buttons:hidden ">
            <Button variant="secondary" className="flex-1 whitespace-nowrap">
              Login to CPU Cloud
            </Button>
            <Button className="flex-1 whitespace-nowrap">
              Login to AI Cloud
            </Button>
          </div>
          {NAV_ITEMS.map((navItem) => (
            <div
              key={navItem.label}
              className={`rounded-md border border-gray-200 ${navItem.menuVisibilityClass}`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm"
                aria-expanded={openMenuDropdown === navItem.label}
                onClick={() => toggleMenuDropdown(navItem.label)}
              >
                {navItem.label}
                <span className="text-xs">
                  {openMenuDropdown === navItem.label ? "−" : "+"}
                </span>
              </button>
              {openMenuDropdown === navItem.label ? (
                <div className="border-t border-gray-200 p-1">
                  {navItem.items.map((dropdownItem) => (
                    <button
                      key={dropdownItem}
                      type="button"
                      className="block w-full rounded px-2 py-2 text-left text-sm transition-colors hover:bg-gray-90"
                    >
                      {dropdownItem}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      )}
    </Container>
  );
};

export default HeaderComponent;
