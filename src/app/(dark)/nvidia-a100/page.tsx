import type { Metadata } from "next";
import NvidiaA100 from "@/features/gpu/components/NvidiaA100";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVIDIA A100 | NeevCloud",
  description:
    "NVIDIA A100 is a high-performance GPU designed for AI and machine learning workloads.",
  openGraph: {
    title: "NVIDIA A100 | NeevCloud",
    description:
      "NVIDIA A100 is a high-performance GPU designed for AI and machine learning workloads.",
  },
};

const NvidiaA100RoutePage = () => {
  return <NvidiaA100 />;
};

export default NvidiaA100RoutePage;
