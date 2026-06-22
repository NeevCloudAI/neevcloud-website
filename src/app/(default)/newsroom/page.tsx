import { NewsroomComponent } from "@/features/newsroom";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/newsroom",
  title: "Newsroom | NeevCloud",
  description:
    "News, updates, and resources for media and press covering NeevCloud.",
  openGraphDescription:
    "Download the NeevCloud media kit and find press resources, company news, and updates for journalists and media professionals.",
});

const NewsroomPage = () => {
  return <NewsroomComponent />;
};

export default NewsroomPage;
