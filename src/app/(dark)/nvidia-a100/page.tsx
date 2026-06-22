import NvidiaA100 from "@/features/gpu/components/NvidiaA100";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-a100",
  title: "NVIDIA A100 | NeevCloud",
  description:
    "NVIDIA A100 is a high-performance GPU designed for AI and machine learning workloads.",
});

const NvidiaA100RoutePage = () => {
  return <NvidiaA100 />;
};

export default NvidiaA100RoutePage;
