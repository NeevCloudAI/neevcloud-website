import type { Metadata } from "next";
import { CpuPricingComponent } from "@/features/cpu-pricing";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "CPU Pricing | NeevCloud",
  description:
    "General-purpose, compute-optimized, and memory-optimized CPU instances on-demand in India. Container or VM modes with on-demand and reserved plans and per-second billing.",
  openGraph: {
    title: "CPU Pricing | NeevCloud",
    description:
      "CPU compute designed for AI infrastructure. Transparent pricing for general-purpose and optimized instances in India datacenters.",
  },
};

const CpuPricingRoutePage = () => {
  return <CpuPricingComponent />;
};

export default CpuPricingRoutePage;
