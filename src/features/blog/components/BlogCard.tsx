import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import { Text } from "@/shared/ui-lib";
import { BLOG_TYPE_LABELS, type BlogCardPost } from "@/lib/blog-types";
import PostImage from "./PostImage";

type BlogCardProps = { post: BlogCardPost; variant?: "grid" | "tile" };

export default function BlogCard({ post, variant = "grid" }: BlogCardProps) {
  // Dark tile: image, bold white title, gray excerpt, meta — no card
  // background of its own, the parent grid supplies the hairline dividers.
  if (variant === "tile") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col gap-4 bg-[#0a0d0c] p-6 transition-colors hover:bg-white/3"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-white/5">
          <PostImage
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] font-bold leading-[128%] text-white">{post.title}</h3>
          <p className="line-clamp-2 text-[14px] leading-[150%] text-white/55">{post.excerpt}</p>
          <div className="mt-1 flex items-center gap-2 text-[12px] text-white/40">
            <span>{post.date}</span>
            <span aria-hidden>&middot;</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/6 bg-white shadow-[0_1px_2px_rgba(16,24,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-black/10 hover:shadow-[0_12px_24px_-8px_rgba(16,24,32,0.12)]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-cloud-gray">
        <PostImage
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="w-fit rounded-full bg-cloud-gray px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-primary">
          {BLOG_TYPE_LABELS[post.type]}
        </span>
        <Text as="h3" weight="semibold" textColor="black">
          {post.title}
        </Text>
        <Text as="p" textColor="black/60">
          {post.excerpt}
        </Text>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[12px] text-black/50">
          <span className="flex items-center gap-2">
            <span>{post.date}</span>
            <span aria-hidden>&middot;</span>
            <span>{post.readingMinutes} min read</span>
          </span>
          <RiArrowRightUpLine
            size={16}
            className="shrink-0 text-black/30 transition-all duration-200 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
