import type { Metadata } from "next";
import { AboutUsComponent } from "@/features/about-us";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us | NeevCloud",
  description:
    "NeevCloud is india's first AI SuperCloud, infrastructure designed from the ground up to make advanced AI computing accessible to anyone with the ambition to build.",
  openGraph: {
    title: "About Us | NeevCloud",
    description:
      "NeevCloud is india's first AI SuperCloud, infrastructure designed from the ground up to make advanced AI computing accessible to anyone with the ambition to build.",
  },
};

const AboutUsRoutePage = () => {
  return <AboutUsComponent />;
};

export default AboutUsRoutePage;

