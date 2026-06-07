import { NeevcloudArenaPage } from "@/features/neevcloud-arena";

import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NeevCloud Arena | NeevCloud",
  description:
    "NeevCloud ARENA lets you test models, run workloads, and validate performance on production infrastructure, before making decisions.",
  openGraph: {
    title: "NeevCloud Arena | NeevCloud",
    description:
      "NeevCloud ARENA lets you test models, run workloads, and validate performance on production infrastructure, before making decisions.",
  },
};

const NeevcloudArenaRoutePage = () => {
  return <NeevcloudArenaPage />;
};

export default NeevcloudArenaRoutePage;
