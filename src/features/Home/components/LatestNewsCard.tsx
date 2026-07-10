import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import type { LatestNewsItem } from "../types/latest-news.types";

type LatestNewsCardProps = {
  item: LatestNewsItem;
  priority?: boolean;
};

// Matches Paper node 2C-0: the product image is a background layer sized 112%×199%
// and offset so it sits prominent in the upper area; a scrim fades only the bottom
// half (to the card's theme colour) so the title reads without washing the image out.
export default function LatestNewsCard({ item, priority }: LatestNewsCardProps) {
  const isDark = item.theme === "dark";

  return (
    <Link
      href={item.href}
      className="group relative flex h-[266px] w-[324px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-md bg-[#00000099] p-4 outline outline-1 -outline-offset-1 outline-white/[0.12] transition-all duration-500 sm:h-[227px] sm:w-[360px] sm:hover:justify-center sm:focus-visible:justify-center lg:w-[412px]"
    >
      {/* Same geometry as the old CSS background layer, but served through
          next/image so mobile gets a properly-sized webp instead of raw JPEG. */}
      <div
        aria-hidden
        className="absolute left-[46.7%] top-[18.5%] h-[199%] w-[112%] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      >
        <Image
          src={item.image}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 320px, 470px"
          className="object-cover object-center"
        />
      </div>
      {/* Base bottom scrim keeps the title legible over the image in the default
          (non-hover) state; it fades out as the solid fill takes over on hover. */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 bottom-0 top-1/2 transition-opacity duration-500 ease-out group-hover:opacity-0",
          isDark
            ? "bg-gradient-to-b from-transparent to-black"
            : "bg-gradient-to-b from-transparent to-[#e9f3f3]",
        )}
      />
      {/* Solid colour fills the whole card on hover, covering the image
          (Accenture-style) so the revealed copy sits on a clean panel. */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100",
          isDark ? "bg-deep-forest" : "bg-[#e9f3f3]",
        )}
      />
      {/* Title always visible (default: bottom-left). On hover the whole block
          moves to the card's centre (justify-center on the card) while the text
          stays left-aligned, and subtext + CTA reveal (Accenture-style). */}
      <div className="relative flex flex-col items-start text-left">
        <h3
          className={cn(
            "text-[20px] font-normal capitalize leading-[120%] tracking-[-0.01em]",
            isDark ? "text-white" : "text-black",
          )}
        >
          {item.title}
        </h3>

        {/* Mobile (no hover): subtext + CTA always visible; from sm they
            collapse and reveal on hover (Accenture behaviour). */}
        <div className="grid grid-rows-[1fr] opacity-100 transition-all duration-500 ease-out sm:grid-rows-[0fr] sm:opacity-0 sm:group-hover:grid-rows-[1fr] sm:group-hover:opacity-100 sm:group-focus-visible:grid-rows-[1fr] sm:group-focus-visible:opacity-100">
          <div className="flex flex-col items-start gap-3 overflow-hidden pt-2">
            {/* Paper mobile card (JXB-0): title + Learn more only — the
                description appears from sm up. */}
            <p
              className={cn(
                "hidden text-[13px] font-normal leading-[142%] tracking-[-0.02em] sm:block",
                isDark ? "text-white/75" : "text-black/70",
              )}
            >
              {item.description}
            </p>
            <span
              className={cn(
                "flex items-center gap-2 text-[14px] font-medium uppercase tracking-[-0.02em]",
                isDark ? "text-neev-green" : "text-primary-90",
              )}
            >
              Learn more
              <RiArrowRightLine size={16} aria-hidden className="shrink-0" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
