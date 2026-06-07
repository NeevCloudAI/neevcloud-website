import type { Metadata } from "next";
import NvidiaB300 from "@/features/gpu/components/NvidiaB300";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVIDIA DGX B300 | NeevCloud",
  description:
    "NVIDIA DGX B300 delivers enterprise AI innovation with Blackwell Ultra GPUs for faster inference and training.",
  openGraph: {
    title: "NVIDIA DGX B300 | NeevCloud",
    description:
      "NVIDIA DGX B300 delivers enterprise AI innovation with Blackwell Ultra GPUs for faster inference and training.",
  },
};

const NvidiaB300RoutePage = () => {
  return <NvidiaB300 />;
};

export default NvidiaB300RoutePage;
