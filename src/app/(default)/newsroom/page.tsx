import { NewsroomComponent } from "@/features/newsroom";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/newsroom",
  title: "Press & Media - NeevCloud News and Resources",
  description:
    "Press releases, media resources, and brand assets for NeevCloud. Contact our media team for inquiries and interview requests.",
});

const NewsroomPage = () => {
  return <NewsroomComponent />;
};

export default NewsroomPage;
