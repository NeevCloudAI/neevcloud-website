import type { Metadata } from "next";
import { BlogPostPage } from "@/features/blog";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog.server";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: `Post not found | ${SITE_NAME}` };

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    keywords: post.tags.length ? post.tags.join(", ") : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      images: [{ url: image, width: 1920, height: 1080 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

const BlogPostRoute = async ({ params }: PageProps) => {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
};

export default BlogPostRoute;
