"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Top-of-page loading bar. Starts a trickle on internal link clicks (Next
 * resolves the new page asynchronously, so the click itself has no signal
 * for completion) and snaps to 100% once `usePathname` reports the route
 * actually changed.
 */
export default function RouteProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number>(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download"))
        return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === pathname)
        return;

      window.clearInterval(intervalRef.current);
      setProgress(15);
      intervalRef.current = window.setInterval(() => {
        setProgress((p) => (p >= 90 ? p : p + (90 - p) / 10));
      }, 200);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  useEffect(() => {
    window.clearInterval(intervalRef.current);
    setProgress((p) => (p > 0 ? 100 : 0));
    const hide = window.setTimeout(() => setProgress(0), 300);
    return () => window.clearTimeout(hide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (progress === 0) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[100] h-0.5 bg-neev-green transition-[width,opacity] duration-300 ease-out"
      style={{ width: `${progress}%`, opacity: progress >= 100 ? 0 : 1 }}
    />
  );
}
