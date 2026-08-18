import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/shared/components/container";
import JsonLd from "@/shared/components/JsonLd";
import FaqSection from "@/shared/components/faq/faq-section";
import { LinkComponent, Text } from "@/shared/ui-lib";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog.server";
import { BLOG_TYPE_LABELS } from "@/lib/blog-types";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHowToSchema,
} from "@/lib/seo";
import BlogCard from "./BlogCard";
import BlogContent from "./BlogContent";

type BlogPostPageProps = { slug: string };

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.type, 3);
  const path = `/blog/${post.slug}`;
  const faqItems = post.faqs?.map((faq, index) => ({ id: index, ...faq }));

  return (
    <div className="bg-white">
      <JsonLd
        data={buildBlogPostingSchema({
          title: post.title,
          description: post.excerpt,
          path,
          image: post.image,
          datePublished: post.rawDate,
          authorName: post.authorInfo?.name,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ])}
      />
      {faqItems && faqItems.length > 0 && <JsonLd data={buildFaqSchema(faqItems)} />}
      {post.howToSteps && post.howToSteps.length > 0 && (
        <JsonLd data={buildHowToSchema(post.title, post.howToSteps)} />
      )}

      <article className="pb-16 md:pb-24">
        <header className="bg-cloud-gray py-12 md:py-16">
          <Container className="flex max-w-[820px] flex-col gap-4">
            <span className="text-[12px] font-medium uppercase tracking-wide text-primary">
              {BLOG_TYPE_LABELS[post.type]}
            </span>
            <Text as="h1" variant="h1" textColor="black">
              {post.title}
            </Text>
            <Text as="p" textColor="black/60" className="max-w-[70ch]">
              {post.excerpt}
            </Text>
            <div className="flex items-center gap-2 text-[13px] text-black/50">
              {post.authorInfo?.name && (
                <>
                  <span>{post.authorInfo.name}</span>
                  <span aria-hidden>&middot;</span>
                </>
              )}
              <span>{post.date}</span>
              <span aria-hidden>&middot;</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </Container>
        </header>

        <Container className="mt-8 max-w-[820px]">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" />
          </div>

          <BlogContent content={post.content} />

          {post.howToSteps && post.howToSteps.length > 0 && (
            <section className="mt-10 flex flex-col gap-4">
              <Text as="h2" weight="semibold" textColor="black">
                How to
              </Text>
              <ol className="flex flex-col gap-3 pl-5">
                {post.howToSteps.map((step) => (
                  <li key={step.name} className="list-decimal text-[15px] leading-[170%] text-gray-05">
                    <span className="font-medium text-black">{step.name}.</span> {step.text}
                  </li>
                ))}
              </ol>
            </section>
          )}

          <div className="mt-10 rounded-lg border-l-4 border-primary bg-cloud-gray px-5 py-5">
            <Text as="p" weight="medium" textColor="black">
              Ready to run this on NeevCloud?
            </Text>
            <LinkComponent href="/contact-neevcloud" variant="default" className="mt-3">
              Talk to us
            </LinkComponent>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-cloud-gray px-3 py-1 text-[12px] text-black/70">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Container>
      </article>

      {faqItems && faqItems.length > 0 && <FaqSection items={faqItems} showFooter={false} />}

      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <Container className="flex flex-col gap-6">
            <Text as="h2" variant="h4" weight="semibold" textColor="black">
              Related posts
            </Text>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
