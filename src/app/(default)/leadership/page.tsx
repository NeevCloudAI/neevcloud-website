import { LeadershipPage } from "@/features/leadership";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Leadership | NeevCloud",
  description:
    "Meet the leadership team behind NeevCloud, driving innovation and building the future of AI infrastructure.",
});

const LeadershipRoutePage = () => {
  return <LeadershipPage />;
};

export default LeadershipRoutePage;
