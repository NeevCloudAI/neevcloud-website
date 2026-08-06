import { DefenceComponent } from "@/features/defence";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/defence",
  title: "Sovereign AI Infrastructure for Defence | NeevCloud",
  description:
    "Indigenous AI infrastructure for defence and strategic applications. Complete data sovereignty, air-gapped deployments, ISO 27001 certified.",
});

const DefencePage = () => {
  return <DefenceComponent />;
};

export default DefencePage;
