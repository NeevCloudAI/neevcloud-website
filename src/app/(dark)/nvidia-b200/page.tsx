import type { Metadata } from "next";
import NvidiaB200 from "@/features/gpu/components/NvidiaB200";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVIDIA DGX B200 | NeevCloud",
  description:
    "NVIDIA DGX B200 is a Blackwell-powered GPU designed for next-generation AI reasoning and trillion-parameter foundation models.",
  openGraph: {
    title: "NVIDIA DGX B200 | NeevCloud",
    description:
      "NVIDIA DGX B200 is a Blackwell-powered GPU designed for next-generation AI reasoning and trillion-parameter foundation models.",
  },
};

const NvidiaB200RoutePage = () => {
  return <NvidiaB200 />;
};

export default NvidiaB200RoutePage;
