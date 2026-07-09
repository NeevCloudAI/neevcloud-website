"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Tone = "neev" | "legacy";

function Bar({
  label,
  value,
  tone,
  shown,
  delay,
}: {
  label: string;
  value: number;
  tone: Tone;
  shown: boolean;
  delay: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={
          tone === "neev"
            ? "w-32 shrink-0 text-[18px] font-medium leading-tight text-primary-90"
            : "w-32 shrink-0 text-[18px] leading-tight text-gray-03"
        }
      >
        {label}
      </span>
      <div className="h-[18px] flex-1 overflow-hidden rounded-full bg-cloud-gray">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-[1200ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            tone === "neev"
              ? "bg-gradient-to-r from-primary to-neev-green"
              : "bg-[#8f949b]",
          )}
          style={{ width: shown ? `${value}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

// Apple Mac-Studio-style reveal: the comparison bars grow from 0 to their
// value the first time the row scrolls into view.
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
    <div ref={ref} className="flex flex-col justify-center gap-5">
      <Bar label="With NeevCloud" value={neev} tone="neev" shown={shown} delay={0} />
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
