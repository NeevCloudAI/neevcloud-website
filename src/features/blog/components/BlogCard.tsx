import Image from "next/image";
import Link from "next/link";
import { Text } from "@/shared/ui-lib";
import { BLOG_TYPE_LABELS, type BlogCardPost } from "@/lib/blog-types";

type BlogCardProps = { post: BlogCardPost };

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-md bg-white"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-md bg-cloud-gray">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 pt-4">
        <span className="text-[12px] font-medium uppercase tracking-wide text-primary">
          {BLOG_TYPE_LABELS[post.type]}
        </span>
        <Text as="h3" weight="semibold" textColor="black">
          {post.title}
        </Text>
        <Text as="p" textColor="black/60">
          {post.excerpt}
        </Text>
        <div className="mt-auto flex items-center gap-2 pt-2 text-[12px] text-black/50">
          <span>{post.date}</span>
          <span aria-hidden>&middot;</span>
          <span>{post.readingMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
