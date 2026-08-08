import { OffersComponent } from "@/features/offers";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/offers",
  title: "Independence Day Offer: ₹15,000 Free CPU Cloud Credits | NeevCloud",
  description:
    "Celebrate Independence Day with ₹15,000 in free CPU Cloud credits, valid for 10 days. Deploy CPU instances for APIs, and databases on sovereign Indian infrastructure. Sign up today.",
});

const OffersRoutePage = () => {
  return <OffersComponent />;
};

export default OffersRoutePage;
