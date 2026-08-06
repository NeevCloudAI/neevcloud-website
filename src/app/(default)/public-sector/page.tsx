import { PublicSectorComponent } from "@/features/public-sector";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/public-sector",
  title: "Public Sector AI Infrastructure | NeevCloud",
  description:
    "Indigenous AI infrastructure for government. Data sovereignty, compliance-ready, aligned with India AI Mission. Support national priorities.",
});

const PublicSectorPage = () => {
  return <PublicSectorComponent />;
};

export default PublicSectorPage;
