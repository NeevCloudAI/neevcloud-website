"use client";

import { useEffect, useState } from "react";

// Hero background loop. On desktop the video mounts right away; on mobile it
// waits until after the load event (+ a beat) so the 1.9MB file stays off the
// critical path — the poster paints instantly either way.
export default function HeroBgVideoClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setReady(true);
      return;
    }
    let timer: number | undefined;
    const arm = () => {
      timer = window.setTimeout(() => setReady(true), 2500);
    };
    if (document.readyState === "complete") {
      arm();
    } else {
      window.addEventListener("load", arm, { once: true });
    }
    return () => {
      window.removeEventListener("load", arm);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <video
      // remount when the source appears so the browser picks it up
      key={ready ? "live" : "poster"}
      aria-hidden
      autoPlay
      loop
      muted
      playsInline
      poster="/images/home/hero-supercloud.jpg"
      // Mobile placement from Paper JW8-0: a 575x490 block bleeding 123px off
      // the left edge, 238px from the top. Desktop keeps the original framing.
      className="absolute -left-[123px] top-[238px] h-[490px] w-[575px] max-w-none origin-center object-cover md:inset-0 md:left-0 md:top-0 md:h-full md:w-full md:translate-x-[12%] md:-translate-y-[7%] md:scale-[0.75] md:object-center md:[mask-image:linear-gradient(to_left,transparent_0%,#000_16%)]"
    >
      {ready && (
        <source src="/images/home/hero-supercloud.mp4" type="video/mp4" />
      )}
    </video>
  );
}
