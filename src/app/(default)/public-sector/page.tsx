import type { Metadata } from "next";
import { PublicSectorComponent } from "@/features/public-sector";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Public Sector | NeevCloud",
  description:
    "Public sector AI initiatives require infrastructure that respects data sovereignty, meets compliance standards, and supports strategic autonomy. NeevCloud provides Indian-built infrastructure designed for government and public sector requirements.",
  openGraph: {
    title: "Public Sector | NeevCloud",
    description:
      "Indian-built AI infrastructure for government and public sector with data sovereignty, compliance standards, and strategic autonomy.",
  },
};

const PublicSectorPage = () => {
  return <PublicSectorComponent />;
};

export default PublicSectorPage;
