import type { Metadata } from "next";
import { PrivacyPolicyComponent } from "@/features/privacy-policy";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy | NeevCloud",
  description:
    "NeevCloud privacy policy describing how we collect, use, and protect your data.",
  openGraph: {
    title: "Privacy Policy | NeevCloud",
    description:
      "NeevCloud privacy policy describing how we collect, use, and protect your data.",
  },
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicyComponent />;
};

export default PrivacyPolicyPage;
