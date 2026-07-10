"use client";

import { useEffect, useRef, useState } from "react";
import { RiCloudLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

function NeevMark() {
  return (
    <svg
      viewBox="0 0 21.3 21.3"
      width="14"
      height="14"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M14.992 3.959V.31c0-.171-.139-.31-.31-.31H6.615c-.171 0-.31.139-.31.31v5.672c0 .151-.106.281-.253.312L.246 7.505A.31.31 0 0 0 0 7.808v13.184c0 .171.139.31.31.31h5.691c.171 0 .309-.139.309-.31V6.54c0-.151.106-.281.253-.312l8.038-1.695a.318.318 0 0 1 .384.312v16.147c0 .171.139.31.31.31h5.691c.171 0 .309-.139.309-.31V3.418a.31.31 0 0 0-.373-.303l-5.546 1.156a.318.318 0 0 1-.384-.312Z"
        fill="#00A78B"
      />
    </svg>
  );
}

function CloudMark() {
  return (
    <RiCloudLine size={16} aria-hidden className="shrink-0 text-[#34504B]" />
  );
}

// New stats-card bars (Paper JUD-0): fixed 160px label (icon + name) beside a
// solid bar that grows to its width the first time the card scrolls into view.
function Bar({
  label,
  value,
  tone,
  shown,
  delay,
}: {
  label: string;
  value: number;
  tone: "neev" | "legacy";
  shown: boolean;
  delay: number;
}) {
  return (
    <div className="flex w-full items-center gap-4">
      <span className="flex w-[160px] shrink-0 items-center gap-2">
        {tone === "neev" ? <NeevMark /> : <CloudMark />}
        <span
          className={cn(
            "text-[16px] font-semibold leading-6",
            tone === "neev"
              ? "bg-gradient-to-br from-[#59D8A7] to-[#00A78B] bg-clip-text text-transparent"
              : "text-[#34504B]",
          )}
        >
          {label}
        </span>
      </span>
      <div
        className={cn(
          "h-4 transition-[width] duration-[1200ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          tone === "neev"
            ? "bg-[linear-gradient(126deg,#00A78B_9%,#00A78B_69%,#59D8A7_99%)]"
            : "bg-[#CADAD7]",
        )}
        style={{ width: shown ? `${value}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

export default function LeverageBarsClient({
  neev,
  legacy,
}: {
  neev: number;
  legacy: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex w-full flex-col gap-4">
      <Bar label="NeevCloud" value={neev} tone="neev" shown={shown} delay={0} />
      <Bar
        label="Legacy Cloud"
        value={legacy}
        tone="legacy"
        shown={shown}
        delay={140}
      />
    </div>
  );
}
