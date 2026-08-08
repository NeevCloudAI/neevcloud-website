import { OffersComponent } from "@/features/offers";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/offers",
  title: "Offers - Independence Day Special | NeevCloud",
  description:
    "Flexible CPU instances for data preprocessing, APIs, databases, and orchestration. Deploy in seconds with transparent per-hour pricing.",
});

const OffersRoutePage = () => {
  return <OffersComponent />;
};

export default OffersRoutePage;
