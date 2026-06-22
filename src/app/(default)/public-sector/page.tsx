import { PublicSectorComponent } from "@/features/public-sector";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/public-sector",
  title: "Public Sector | NeevCloud",
  description:
    "Public sector AI initiatives require infrastructure that respects data sovereignty, meets compliance standards, and supports strategic autonomy. NeevCloud provides Indian-built infrastructure designed for government and public sector requirements.",
  openGraphDescription:
    "Indian-built AI infrastructure for government and public sector with data sovereignty, compliance standards, and strategic autonomy.",
});

const PublicSectorPage = () => {
  return <PublicSectorComponent />;
};

export default PublicSectorPage;
