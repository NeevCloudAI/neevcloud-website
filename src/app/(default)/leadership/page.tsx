import { LeadershipPage } from "@/features/leadership";

import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Leadership | NeevCloud",
  description:
    "Meet the leadership team behind NeevCloud, driving innovation and building the future of AI infrastructure.",
  openGraph: {
    title: "Leadership | NeevCloud",
    description:
      "Meet the leadership team behind NeevCloud, driving innovation and building the future of AI infrastructure.",
  },
};

const LeadershipRoutePage = () => {
  return <LeadershipPage />;
};

export default LeadershipRoutePage;
