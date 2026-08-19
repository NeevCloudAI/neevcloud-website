import { notFound } from "next/navigation";
import Container from "@/shared/components/container";
import JsonLd from "@/shared/components/JsonLd";
import FaqSection from "@/shared/components/faq/faq-section";
import { LinkComponent, Text } from "@/shared/ui-lib";
import { extractHeadings, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog.server";
import { BLOG_TYPE_LABELS } from "@/lib/blog-types";
import { initialsFor } from "@/lib/initials";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHowToSchema,
} from "@/lib/seo";
import BlogCard from "./BlogCard";
import BlogContent from "./BlogContent";
import PostImage from "./PostImage";

type BlogPostPageProps = { slug: string };

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.type, 3);
  const headings = extractHeadings(post.content);
  const authorName = post.authorInfo?.name ?? "NeevCloud Team";
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
        <header className="pb-6 pt-10 md:pt-14">
          <Container size="article" className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-black/15 px-3 py-1 text-[13px] font-medium text-black/80">
                {BLOG_TYPE_LABELS[post.type]}
              </span>
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/15 px-3 py-1 text-[13px] font-medium text-black/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-blog text-[34px] font-bold leading-[118%] tracking-tight text-black md:text-[46px]">
              {post.title}
            </h1>
            <p className="text-[18px] leading-[145%] text-black/55 md:text-[20px]">
              {post.excerpt}
            </p>
            <div className="mt-1 flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-[14px] font-semibold text-white">
                {initialsFor(authorName)}
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-black">{authorName}</span>
                <span className="text-[13px] text-black/50">
                  {post.readingMinutes} min read &middot; {post.date}
                </span>
              </div>
            </div>
          </Container>
        </header>

        <Container size="article" className="relative mt-4">
          <div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <PostImage src={post.image} alt={post.title} fill priority className="object-cover" />
            </div>

            <BlogContent content={post.content} />

            {post.howToSteps && post.howToSteps.length > 0 && (
              <section className="mt-10 flex flex-col gap-4">
                <h2 className="text-[23px] font-bold leading-[132%] text-black md:text-[27px]">
                  How to
                </h2>
                <ol className="flex flex-col gap-3 pl-5 font-blog">
                  {post.howToSteps.map((step) => (
                    <li key={step.name} className="list-decimal text-[19px] leading-[170%] text-black/85 md:text-[20px]">
                      <span className="font-semibold text-black">{step.name}.</span> {step.text}
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
          </div>

          {/* Pinned outside the (header-matching) content column rather than
              sharing a grid track with it — that's what keeps this column's
              own width identical to the header's. Only shown once the
              viewport is wide enough (1xl, matching the site's max-w-screen-1xl
              container cap) to fit beside it without overflowing. */}
          {headings.length > 1 && (
            <div className="hidden 1xl:absolute 1xl:top-0 1xl:left-full 1xl:ml-12 1xl:block 1xl:h-full 1xl:w-55">
              <aside className="sticky top-24 h-fit">
                <span className="text-[11px] font-medium uppercase tracking-wide text-black/40">
                  On this page
                </span>
                <ul className="mt-3 flex flex-col gap-2.5 border-l border-black/10 pl-4">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-[13px] leading-[140%] text-black/55 hover:text-primary"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
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
