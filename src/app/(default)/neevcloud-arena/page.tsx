import { NeevcloudArenaPage } from "@/features/neevcloud-arena";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "NeevCloud Arena | NeevCloud",
  description:
    "NeevCloud ARENA lets you test models, run workloads, and validate performance on production infrastructure, before making decisions.",
});

const NeevcloudArenaRoutePage = () => {
  return <NeevcloudArenaPage />;
};

export default NeevcloudArenaRoutePage;
