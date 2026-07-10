"use client";

import { useEffect, useRef, useState } from "react";

// Count-up "number loading" effect: the stat animates from 0 to its value the
// first time the card scrolls into view (paired with the bar reveal).
export default function LeverageStatClient({
  value,
  unit,
}: {
  value: number;
  unit: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  // SSR/no-JS shows the real value; the count-up resets to 0 only when
  // the card scrolls into view (below the fold, so the reset is invisible).
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const run = () => {
      setDisplay(0);
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutCubic for a natural settle.
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <p ref={ref} className="flex items-baseline">
      <span className="text-[72px] font-normal capitalize leading-[90%] tracking-[-0.01em] text-black">
        {display}
      </span>
      <span className="text-[72px] font-normal capitalize leading-[90%] tracking-[-0.01em] text-black">
        {unit}
      </span>
    </p>
  );
}
