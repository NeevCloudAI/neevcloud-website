import { RiArrowRightLine } from "@remixicon/react";
import Container from "@/shared/components/container";
import { BLOG_POSTS, BLOG_SECTION } from "../data/blog.data";

// Latest posts from blog.neevcloud.com — Jeton-style cards (cover + pill,
// title, date) in NeevCloud styling.
export default function BlogSection() {
  return (
    <section
      aria-labelledby="blog-heading"
      className="bg-gray-light py-16 md:py-24"
    >
      <Container className="flex flex-col gap-10 md:gap-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="blog-heading"
            className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {BLOG_SECTION.title.split("Blog")[0]}
            <span className="text-[#00A78A]">Blog</span>
          </h2>
          <a
            href={BLOG_SECTION.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] font-medium uppercase tracking-[-0.02em] text-[#00A78B] transition-colors hover:text-primary-90"
          >
            {BLOG_SECTION.ctaLabel}
            <RiArrowRightLine size={16} aria-hidden />
          </a>
        </div>

        {/* Snap carousel — up to 10 posts */}
        <ul className="flex list-none snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
          {BLOG_POSTS.map((post) => (
            <li key={post.href} className="w-[280px] shrink-0 snap-start sm:w-[320px]">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4"
              >
                <div className="relative overflow-hidden rounded-lg">
                  {/* external Hashnode CDN cover — plain img, lazy */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-[12px] font-medium text-black">
                    Blog
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[18px] font-medium leading-[132%] tracking-[-0.01em] text-black transition-colors group-hover:text-[#00A78B]">
                    {post.title}
                  </h3>
                  <p className="text-[13px] font-normal leading-[142%] text-gray-04">
                    {post.date}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
