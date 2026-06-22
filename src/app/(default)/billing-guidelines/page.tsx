import { BillingGuidelinesComponent } from "@/features/billing-guidelines";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/billing-guidelines",
  title: "Billing Guidelines | NeevCloud",
  description:
    "NeevCloud billing guidelines for pricing, invoicing, and payment terms.",
});

const BillingGuidelinesPage = () => {
  return <BillingGuidelinesComponent />;
};

export default BillingGuidelinesPage;
