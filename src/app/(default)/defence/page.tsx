import { DefenceComponent } from "@/features/defence";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/defence",
  title: "National Security & Defence | NeevCloud",
  description:
    "Defence and strategic workloads require infrastructure that guarantees complete data sovereignty, operates under Indian jurisdiction, and provides total isolation from foreign-controlled systems.",
  openGraphDescription:
    "Indigenous AI infrastructure for national security with complete data sovereignty, Indian jurisdiction, and air-gapped deployment options.",
});

const DefencePage = () => {
  return <DefenceComponent />;
};

export default DefencePage;
