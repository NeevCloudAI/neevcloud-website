Neevcloud website

sliders images
header

"use client";

import { useState } from "react";
import { Button, Divider, Text } from "@/shared/ui-lib";
import Image from "next/image";
import Container from "./container";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
id: string;
label: string;
desktopVisibilityClass: string;
menuVisibilityClass: string;
};

const NAV_ITEMS: NavItem[] = [
{
id: "inference-hub",
label: "Inference Hub",
desktopVisibilityClass: "hidden header-inference:block",
menuVisibilityClass: "header-inference:hidden",
},
{
id: "product",
label: "Product",
desktopVisibilityClass: "hidden header-product:block",
menuVisibilityClass: "header-product:hidden",
},
{
id: "solutions",
label: "Solutions",
desktopVisibilityClass: "hidden header-solutions:block",
menuVisibilityClass: "header-solutions:hidden",
},
{
id: "pricing",
label: "Pricing",
desktopVisibilityClass: "hidden header-pricing:block",
menuVisibilityClass: "header-pricing:hidden",
},
{
id: "developers",
label: "Developers",
desktopVisibilityClass: "hidden header-developers:block",
menuVisibilityClass: "header-developers:hidden",
},
{
id: "resources",
label: "Resources",
desktopVisibilityClass: "hidden header-resource:block",
menuVisibilityClass: "header-resource:hidden",
},
{
id: "company",
label: "Company",
desktopVisibilityClass: "hidden header-company:block",
menuVisibilityClass: "header-company:hidden",
},
];

const HeaderComponent = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return (
<Container className="relative flex min-h-16 gap-3 py-3 md:min-h-20 items-center justify-between md:py-0">
<div className="flex items-center gap-3 md:gap-4">
<Image
src={"/icons/logo-black.svg"}
alt="logo"
width={100}
height={100}
className="h-7 w-auto"
/>
<Text weight="semibold" className="whitespace-nowrap ml-2 md:ml-4">
AI SuperCloud
</Text>
<Divider className="min-h-8 hidden header-buttons:block" />
<nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
{NAV_ITEMS.map((navItem) => (
<div
key={navItem.label}
className={cn("relative group", navItem.desktopVisibilityClass)} >
<div className=" pb-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 group-focus-within:after:scale-x-100">
<Button variant="ghost" textColor="black" spacing="none">
{navItem.label}
</Button>
</div>
<div
                className="absolute left-0 top-full z-20 rounded-b-md bg-white pt-1 opacity-0 shadow-md transition-opacity duration-150 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
                role="presentation"
              >
<div className="w-full flex flex-col p-8 gap-4 shadow-sm">
<div className="flex gap-4 md:gap-8">
<div className="min-w-[350px]">
<Text textColor="blue-40">COMPUTE</Text>
<Divider
                        orientation="horizontal"
                        className="my-2 bg-gray-60"
                      />
<div className="flex items-center gap-2 mt-6">
<div className="bg-gray-60 rounded-sm h-10 min-w-10 flex items-center justify-center">
<Image
                            src="/icons/cpu-instance.svg"
                            alt="compute"
                            width={20}
                            height={20}
                          />
</div>
<div className="flex flex-col gap-1 whitespace-nowrap ">
<Text weight="semibold">CPU Instance</Text>
<Text as="small" textColor="gray-75">
Burstable & Dedicated Nodes
</Text>
</div>
</div>

                      <div className="flex items-center gap-2 mt-6">
                        <div className="bg-gray-60 rounded-sm h-10 min-w-10 flex items-center justify-center">
                          <Image
                            src="/icons/gpu-instance.svg"
                            alt="compute"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1 whitespace-nowrap ">
                          <Text weight="semibold">CPU Instance</Text>
                          <Text as="small" textColor="gray-75">
                            Burstable & Dedicated Nodes
                          </Text>
                        </div>
                      </div>

                      <Text textColor="blue-40" className="mt-4 md:mt-10">
                        ORCHESTRATION
                      </Text>
                      <Divider
                        orientation="horizontal"
                        className="my-2 bg-gray-60"
                      />

                      <div className="flex items-center gap-2 mt-6">
                        <div className="bg-gray-60 rounded-sm h-10 min-w-10 flex items-center justify-center">
                          <Image
                            src="/icons/managed-k8s.svg"
                            alt="compute"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1 whitespace-nowrap ">
                          <Text weight="semibold">Managed Kubernetes</Text>
                          <Text as="small" textColor="gray-75">
                            NKE · GPU-aware scheduling
                          </Text>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-[350px]">
                      <Text textColor="blue-40">STORAGE</Text>
                      <Divider
                        orientation="horizontal"
                        className="my-2 bg-gray-60"
                      />
                      <div className="flex items-center gap-2 mt-6">
                        <div className="bg-gray-60 rounded-sm h-10 min-w-10 flex items-center justify-center">
                          <Image
                            src="/icons/nvme.svg"
                            alt="compute"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1 whitespace-nowrap ">
                          <Text weight="semibold">High-Performance NVMe</Text>
                          <Text as="small" textColor="gray-75">
                            Sub-Millisecond Latency
                          </Text>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-6">
                        <div className="bg-gray-60 rounded-sm h-10 min-w-10 flex items-center justify-center">
                          <Image
                            src="/icons/object-storage.svg"
                            alt="compute"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1 whitespace-nowrap ">
                          <Text weight="semibold">Object Storage</Text>
                          <Text as="small" textColor="gray-75">
                            S3-compatible . India-resident
                          </Text>
                        </div>
                      </div>

                      <Text textColor="blue-40" className="mt-4 md:mt-10">
                        AI SERVICES
                      </Text>
                      <Divider
                        orientation="horizontal"
                        className="my-2 bg-gray-60"
                      />

                      <div className="flex items-center gap-2 mt-6">
                        <div className="bg-gray-60 rounded-sm h-10 min-w-10 flex items-center justify-center">
                          <Image
                            src="/icons/serverless-api.svg"
                            alt="compute"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1 whitespace-nowrap ">
                          <Text weight="semibold">Serverless APIs</Text>
                          <Text as="small" textColor="gray-75">
                            Inference Without Infra
                          </Text>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-6">
                        <div className="bg-gray-60 rounded-sm h-10 min-w-10 flex items-center justify-center">
                          <Image
                            src="/icons/model-playground.svg"
                            alt="compute"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex flex-col gap-1 whitespace-nowrap ">
                          <Text weight="semibold">Model Playground</Text>
                          <Text as="small" textColor="gray-75">
                            Browser-Based Testing
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider orientation="horizontal" />
                  <div className="flex justify-between items-center">
                    <Text textColor="blue-40">
                      H100 &nbsp; · &nbsp; H200 &nbsp; · &nbsp; B200 &nbsp; ·
                      &nbsp; B300 &nbsp; · &nbsp; A30 &nbsp; · &nbsp; MI300X
                    </Text>
                    <Button
                      variant="ghost"
                      className="text-gray-75"
                      spacing="none"
                    >
                      Compare GPUs -&gt;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
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
          setIsMobileMenuOpen((prev) => !prev);
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
              className={`overflow-hidden rounded-md border border-gray-200 ${navItem.menuVisibilityClass}`}
            >
              {navItem.id === "product" ? (
                <>
                  <button
                    type="button"
                    id={`mobile-nav-${navItem.id}`}
                    className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm font-medium text-black-80"
                  >
                    {navItem.label}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm"
                >
                  {navItem.label}
                </button>
              )}
            </div>
          ))}
        </nav>
      )}
    </Container>

);
};

export default HeaderComponent;
