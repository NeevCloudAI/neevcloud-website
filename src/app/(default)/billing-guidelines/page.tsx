import type { Metadata } from "next";
import { BillingGuidelinesComponent } from "@/features/billing-guidelines";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Billing Guidelines | NeevCloud",
  description: "NeevCloud billing guidelines for pricing, invoicing, and payment terms.",
  openGraph: {
    title: "Billing Guidelines | NeevCloud",
    description: "NeevCloud billing guidelines for pricing, invoicing, and payment terms.",
  },
};

const BillingGuidelinesPage = () => {
  return <BillingGuidelinesComponent />;
};

export default BillingGuidelinesPage;
