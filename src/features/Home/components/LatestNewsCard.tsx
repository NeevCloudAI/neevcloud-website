import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LatestNewsItem } from "../types/latest-news.types";

type LatestNewsCardProps = {
  item: LatestNewsItem;
  priority?: boolean;
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 14 8"
      width="16"
      height="10"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M0 4h14M10 0l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LatestNewsCard({
  item,
  priority = false,
}: LatestNewsCardProps) {
  const isDark = item.theme === "dark";

  return (
    <Link
      href={item.href}
      className="group relative flex h-[227px] w-[280px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-md bg-black/60 p-4 outline outline-1 -outline-offset-1 outline-white/12 sm:w-[360px] lg:w-[412px]"
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 412px"
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 bottom-0 h-1/2",
          isDark
            ? "bg-gradient-to-t from-black via-black/70 to-transparent"
            : "bg-gradient-to-t from-white via-white/80 to-transparent",
        )}
      />
      <div className="relative flex flex-col gap-2">
        <h3
          className={cn(
            "text-[20px] font-normal capitalize leading-[120%] tracking-[-0.01em]",
            isDark ? "text-white" : "text-black",
          )}
        >
          {item.title}
        </h3>
        <span className="flex items-center gap-2 text-base font-medium tracking-[-0.02em] text-primary-90">
          Learn more
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
