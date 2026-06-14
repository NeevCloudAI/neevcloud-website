import { TermsConditionComponent } from "@/features/terms-condition";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Terms & Conditions | NeevCloud",
  description:
    "NeevCloud terms and conditions for using our AI infrastructure platform and services.",
});

const TermsConditionPage = () => {
  return <TermsConditionComponent />;
};

export default TermsConditionPage;
