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
// into server-component sections. Same props as the Paper design export, plus:
// the shader is paused (speed 0) while scrolled off-screen and under
// prefers-reduced-motion, so it doesn't burn GPU/battery when not visible.
export default function Mesh({
  speed = 1,
  className,
  style,
  ...props
}: ComponentProps<typeof MeshGradient>) {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const io = new IntersectionObserver(
      ([entry]) => setRunning(entry.isIntersecting && !reduced.matches),
      { rootMargin: "160px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)} style={style}>
      <MeshGradient
        {...props}
        speed={running ? speed : 0}
        className="h-full w-full"
      />
    </div>
  );
}
