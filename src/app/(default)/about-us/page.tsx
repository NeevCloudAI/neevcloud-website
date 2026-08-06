import { AboutUsComponent } from "@/features/about-us";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/about-us",
  title: "About NeevCloud | AI Native SuperCloud",
  description:
    "NeevCloud is india's first AI SuperCloud, infrastructure designed from the ground up to make advanced AI computing accessible to anyone with the ambition to build.",
});

const AboutUsRoutePage = () => {
  return <AboutUsComponent />;
};

export default AboutUsRoutePage;
