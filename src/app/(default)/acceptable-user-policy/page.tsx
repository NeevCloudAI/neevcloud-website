import { AcceptableUserPolicyComponent } from "@/features/acceptable-user-policy";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/acceptable-user-policy",
  title: "Acceptable User Policy | NeevCloud",
  description:
    "NeevCloud acceptable use policy for platform and infrastructure services.",
});

const AcceptableUserPolicyPage = () => {
  return <AcceptableUserPolicyComponent />;
};

export default AcceptableUserPolicyPage;
