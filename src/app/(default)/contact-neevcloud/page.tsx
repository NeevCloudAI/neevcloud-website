import { ContactNeevcloudPage } from "@/features/contact-neevcloud";

import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact NeevCloud | NeevCloud",
  description:
    "Whether you're scaling AI, exploring the cloud, or need expert guidance, our team is here to help you move forward.",
  openGraph: {
    title: "Contact NeevCloud | NeevCloud",
    description:
      "Whether you're scaling AI, exploring the cloud, or need expert guidance, our team is here to help you move forward.",
  },
};

const ContactNeevcloudRoutePage = () => {
  return <ContactNeevcloudPage />;
};

export default ContactNeevcloudRoutePage;
