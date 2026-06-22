import { PrivacyPolicyComponent } from "@/features/privacy-policy";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy | NeevCloud",
  description:
    "NeevCloud privacy policy describing how we collect, use, and protect your data.",
});

const PrivacyPolicyPage = () => {
  return <PrivacyPolicyComponent />;
};

export default PrivacyPolicyPage;
