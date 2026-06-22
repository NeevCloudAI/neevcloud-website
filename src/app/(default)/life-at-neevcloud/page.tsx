import { LifeAtNeevcloudPage } from "@/features/life-at-neevcloud";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/life-at-neevcloud",
  title: "Life at NeevCloud | NeevCloud",
  description:
    "At NeevCloud, we're building a culture where ideas move fast, teams grow together, and every day feels dynamic. Discover what it's like to work on AI infrastructure that matters.",
});

const LifeAtNeevcloudRoutePage = () => {
  return <LifeAtNeevcloudPage />;
};

export default LifeAtNeevcloudRoutePage;
