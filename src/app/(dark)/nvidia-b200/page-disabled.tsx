import NvidiaB200 from "@/features/gpu/components/NvidiaB200";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/nvidia-b200",
  title: "NVIDIA DGX B200 | NeevCloud",
  description:
    "NVIDIA DGX B200 is a Blackwell-powered GPU designed for next-generation AI reasoning and trillion-parameter foundation models.",
});

const NvidiaB200RoutePage = () => {
  return <NvidiaB200 />;
};

export default NvidiaB200RoutePage;
