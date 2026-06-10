import type { Metadata } from "next";
import { TermsConditionComponent } from "@/features/terms-condition";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms & Conditions | NeevCloud",
  description:
    "NeevCloud terms and conditions for using our AI infrastructure platform and services.",
  openGraph: {
    title: "Terms & Conditions | NeevCloud",
    description:
      "NeevCloud terms and conditions for using our AI infrastructure platform and services.",
  },
};

const TermsConditionPage = () => {
  return <TermsConditionComponent />;
};

export default TermsConditionPage;
