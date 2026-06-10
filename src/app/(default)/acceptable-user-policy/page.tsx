import type { Metadata } from "next";
import { AcceptableUserPolicyComponent } from "@/features/acceptable-user-policy";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Acceptable User Policy | NeevCloud",
  description:
    "NeevCloud acceptable use policy for platform and infrastructure services.",
  openGraph: {
    title: "Acceptable User Policy | NeevCloud",
    description:
      "NeevCloud acceptable use policy for platform and infrastructure services.",
  },
};

const AcceptableUserPolicyPage = () => {
  return <AcceptableUserPolicyComponent />;
};

export default AcceptableUserPolicyPage;
