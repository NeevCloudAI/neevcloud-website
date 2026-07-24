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

  // Once near, the <source> below renders — load() makes the browser pick it
  // up (a <source> added on its own is ignored by an already-parsed video).
  useEffect(() => {
    if (near) ref.current?.load();
  }, [near]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // reduced-motion users keep the static poster (WCAG 2.2.2)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Keep observing (don't disconnect after the first hit) so the video can
    // also be paused once it scrolls back out of view, and resumed if it
    // scrolls back in — otherwise the decode runs forever in the background.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
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
