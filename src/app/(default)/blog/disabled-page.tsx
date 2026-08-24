import { BlogIndexPage } from "@/features/blog";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/blog",
  title: "Blog | NeevCloud",
  description:
    "Engineering notes, product updates, and guides on running AI workloads at scale on NeevCloud.",
});

const BlogPage = () => {
  return <BlogIndexPage />;
};

export default BlogPage;
