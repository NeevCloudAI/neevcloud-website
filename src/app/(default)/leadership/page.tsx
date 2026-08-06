import { LeadershipPage } from "@/features/leadership";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/leadership",
  title: "Leadership - Meet Our Team | NeevCloud",
  description:
    "Meet the team building India's first AI Supercloud. Leadership committed to making AI infrastructure accessible to all.",
});

const LeadershipRoutePage = () => {
  return <LeadershipPage />;
};

export default LeadershipRoutePage;
