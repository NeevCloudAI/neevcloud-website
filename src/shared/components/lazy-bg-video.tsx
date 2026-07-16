"use client";

import { useEffect, useRef, useState } from "react";

// Decorative autoplay background video that only starts downloading once the
// host section nears the viewport — the poster shows until then.
export default function LazyBgVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // reduced-motion users keep the static poster (WCAG 2.2.2)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      // remount when the source appears so the browser picks it up
      key={near ? "live" : "poster"}
      ref={ref}
      aria-hidden
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
    >
      {near && <source src={src} type="video/mp4" />}
    </video>
  );
}
