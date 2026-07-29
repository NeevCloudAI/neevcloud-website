import NvidiaB300 from "@/features/gpu/components/NvidiaB300";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-b300",
  title: "NVIDIA DGX B300 | NeevCloud",
  description:
    "NVIDIA DGX B300 delivers enterprise AI innovation with Blackwell Ultra GPUs for faster inference and training.",
});

const NvidiaB300RoutePage = () => {
  return <NvidiaB300 />;
};

export default NvidiaB300RoutePage;
