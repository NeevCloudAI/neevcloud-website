"use client";

import { useEffect } from "react";
import {
  GTM_ID,
  GA_ID,
  CLARITY_ID,
} from "@/shared/constants/analytics.constants";

// Loads GTM / GA / Clarity AFTER the page is interactive: on the first user
// interaction, or a few seconds after the load event — whichever comes first.
// Keeps ~900KB of third-party JS off the critical path (mobile TBT/LCP win)
// without dropping any tracking for real sessions.
export default function DeferredAnalytics() {
  useEffect(() => {
    let fired = false;

    const inject = () => {
      if (fired) return;
      fired = true;

      if (GTM_ID) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });
        const s = document.createElement("script");
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
        document.head.appendChild(s);
      }

      if (GA_ID) {
        const s = document.createElement("script");
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function gtag(...args: any[]) {
          // eslint-disable-next-line prefer-rest-params
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", GA_ID);
      }

      if (CLARITY_ID) {
        const s = document.createElement("script");
        s.async = true;
        s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).clarity =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).clarity ||
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function (...args: any[]) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ((window as any).clarity.q = (window as any).clarity.q || []).push(
              args,
            );
          };
        document.head.appendChild(s);
      }

      events.forEach((e) =>
        window.removeEventListener(e, inject, { capture: true }),
      );
    };

    // capture:true — the page scrolls inside <body>, so a plain window scroll
    // listener never fires (scroll doesn't bubble).
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    events.forEach((e) =>
      window.addEventListener(e, inject, {
        once: true,
        passive: true,
        capture: true,
      }),
    );

    let timer: number | undefined;
    const armTimer = () => {
      timer = window.setTimeout(inject, 3500);
    };
    if (document.readyState === "complete") {
      armTimer();
    } else {
      window.addEventListener("load", armTimer, { once: true });
    }

    return () => {
      window.removeEventListener("load", armTimer);
      if (timer) window.clearTimeout(timer);
      events.forEach((e) =>
        window.removeEventListener(e, inject, { capture: true }),
      );
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}
