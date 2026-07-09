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

// Matches Paper node 2C-0: the product image is a background layer sized 112%×199%
// and offset so it sits prominent in the upper area; a scrim fades only the bottom
// half (to the card's theme colour) so the title reads without washing the image out.
export default function LatestNewsCard({ item }: LatestNewsCardProps) {
  const isDark = item.theme === "dark";

  return (
    <Link
      href={item.href}
      className="group relative flex h-[227px] w-[280px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-md bg-[#00000099] p-4 outline outline-1 -outline-offset-1 outline-white/[0.12] sm:w-[360px] lg:w-[412px]"
    >
      <div
        aria-hidden
        className="absolute left-[46.7%] top-[18.5%] h-[199%] w-[112%] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      {/* Scrim: covers the bottom half by default, grows to cover more on hover
          so the revealed subtext stays legible (Accenture-style reveal). */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 bottom-0 top-[49%] transition-all duration-500 ease-out group-hover:top-[24%]",
          isDark
            ? "bg-gradient-to-b from-transparent to-black"
            : "bg-gradient-to-b from-transparent to-[#e9f3f3]",
        )}
      />
      {/* Title always visible; on hover the block lifts and reveals subtext + CTA. */}
      <div className="relative flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
        <h3
          className={cn(
            "text-[20px] font-normal capitalize leading-[120%] tracking-[-0.01em]",
            isDark ? "text-white" : "text-black",
          )}
        >
          {item.title}
        </h3>

        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
          <div className="flex flex-col gap-3 overflow-hidden pt-2">
            <p
              className={cn(
                "text-[13px] font-normal leading-[142%] tracking-[-0.02em]",
                isDark ? "text-white/75" : "text-black/70",
              )}
            >
              {item.description}
            </p>
            <span
              className={cn(
                "flex items-center gap-2 text-base font-medium tracking-[-0.02em]",
                isDark ? "text-neev-green" : "text-primary-90",
              )}
            >
              Learn more
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
