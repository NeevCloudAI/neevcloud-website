import { VisitPlatformComponent } from "@/features/visit-platform";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "AI SuperCloud Platform | NeevCloud",
  description:
    "Deploy GPUs, manage inference, control storage, and monitor workloads through a unified console. Everything you need to build AI, accessible in one place.",
});

const VisitPlatformPage = () => {
  return <VisitPlatformComponent />;
};

export default VisitPlatformPage;
