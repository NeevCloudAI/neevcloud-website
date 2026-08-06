import { LifeAtNeevcloudPage } from "@/features/life-at-neevcloud";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/life-at-neevcloud",
  title: "Life at NeevCloud | Culture, Team & Workplace",
  description:
    "Explore life at NeevCloud. A workplace built on innovation, collaboration, and celebrations that bring our team together.",
});

const LifeAtNeevcloudRoutePage = () => {
  return <LifeAtNeevcloudPage />;
};

export default LifeAtNeevcloudRoutePage;
