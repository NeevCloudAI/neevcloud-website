import { ContactNeevcloudPage } from "@/features/contact-neevcloud";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/contact-neevcloud",
  title: "Contact NeevCloud | Get in Touch",
  description:
    "Connect with NeevCloud for AI cloud solutions, GPU access, and enterprise support. Let's build your next big idea.",
});

const ContactNeevcloudRoutePage = () => {
  return <ContactNeevcloudPage />;
};

export default ContactNeevcloudRoutePage;
