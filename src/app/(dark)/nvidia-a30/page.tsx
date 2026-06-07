import type { Metadata } from "next";
import NvidiaA30 from "@/features/gpu/components/NvidiaA30";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVIDIA A30 | NeevCloud",
  description:
    "NVIDIA A30 is a high-performance GPU designed for AI inference and enterprise virtualization workloads.",
  openGraph: {
    title: "NVIDIA A30 | NeevCloud",
    description:
      "NVIDIA A30 is a high-performance GPU designed for AI inference and enterprise virtualization workloads.",
  },
};

const NvidiaA30RoutePage = () => {
  return <NvidiaA30 />;
};

export default NvidiaA30RoutePage;
