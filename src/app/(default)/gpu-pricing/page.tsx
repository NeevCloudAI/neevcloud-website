import type { Metadata } from "next";
import { GpuPricingComponent } from "@/features/gpu-pricing";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "GPU Pricing | NeevCloud",
  description:
    "General-purpose, compute-optimized, and memory-optimized GPU instances on-demand in India. Container or VM modes with on-demand and reserved plans and per-second billing.",
  openGraph: {
    title: "GPU Pricing | NeevCloud",
    description:
      "GPU compute designed for AI infrastructure. Transparent pricing for general-purpose and optimized instances in India datacenters.",
  },
};

const GpuPricingRoutePage = () => {
  return <GpuPricingComponent />;
};

export default GpuPricingRoutePage;
