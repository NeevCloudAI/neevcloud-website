import { VisitPlatformComponent } from "@/features/visit-platform";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/visit-platform",
  title: "Platform - AI Supercloud Console | NeevCloud",
  description:
    "Access the NeevCloud console. Deploy GPUs, manage inference, and control your AI infrastructure. Start building in minutes.",
});

const VisitPlatformPage = () => {
  return <VisitPlatformComponent />;
};

export default VisitPlatformPage;
