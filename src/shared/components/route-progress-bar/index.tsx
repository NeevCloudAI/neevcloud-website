"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// globals.css makes <body> overflow-y-auto with a fixed height, so it (not
// the window/documentElement) is often the real scroller — same quirk
// StackScrollClient works around. Find whichever element actually scrolls.
function getScroller(): Element {
  return (
    [document.scrollingElement, document.body].find(
      (s): s is Element => !!s && s.scrollHeight - s.clientHeight > 1,
    ) ?? document.documentElement
  );
}

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
      if (url.origin !== window.location.origin) return;

      if (url.pathname === pathname) {
        // Same page: Next won't navigate, so usePathname's effect below
        // never re-fires. Scroll manually, unless the link targets a hash
        // (that scroll is its own job).
        if (!url.hash) getScroller().scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        return;
      }

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

  useEffect(() => {
    // A link to a #hash target handles its own scroll — don't fight it.
    // Next's built-in scroll-to-top on navigation no-ops when <body> is the
    // real scroller (see getScroller), so reset it ourselves.
    if (window.location.hash) return;
    getScroller().scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
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
