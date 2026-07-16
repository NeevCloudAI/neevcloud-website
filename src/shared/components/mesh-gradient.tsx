"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

// Code-split the WebGL shader library out of the initial bundle — it only
// loads once a Mesh actually renders on the client.
const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false },
);

// Client wrapper around Paper's WebGL MeshGradient shader so it can be dropped
// into server-component sections. The shader is EXPENSIVE (GLSL compile +
// WebGL context), so it isn't even mounted until the wrapper nears the
// viewport; once mounted it pauses (speed 0) while off-screen and under
// prefers-reduced-motion. Keeps ~6s of script eval off the initial load.
export default function Mesh({
  speed = 1,
  className,
  style,
  ...props
}: ComponentProps<typeof MeshGradient>) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const io = new IntersectionObserver(
      ([entry]) => {
        // display:none ancestors report non-intersecting with zero rects, so
        // this also keeps the hidden mobile/desktop variants unmounted.
        if (entry.isIntersecting) setMounted(true);
        setRunning(entry.isIntersecting && !reduced.matches);
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)} style={style}>
      {mounted && (
        <MeshGradient
          {...props}
          speed={running ? speed : 0}
          className="h-full w-full"
        />
      )}
    </div>
  );
}
