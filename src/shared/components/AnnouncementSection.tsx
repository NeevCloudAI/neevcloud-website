"use client";

import { Text } from "@/shared/ui-lib";
import { useEffect, useState } from "react";

const HEADINGS = [
  "Reserve the NVIDIA B200 at lowest price for steady throughput, lower TCO, and reliable production workloads.",
  "Sign up in 60 seconds. $200 in compute credits, no commitment.",
];

export default function AnnouncementSection() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % HEADINGS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="bg-tertiary py-2.5 text-center text-white"
      aria-label="Announcement"
    >
      <span
        className="inline-block h-lh overflow-hidden align-middle"
        aria-live="polite"
      >
        <span
          className="flex flex-col transition-transform duration-300 ease-out"
          style={{ transform: `translateY(-${i}lh)` }}
        >
          {HEADINGS.map((text) => (
            <Text as="span" key={text} className="h-lh leading-lh">
              {text}
            </Text>
          ))}
        </span>
      </span>
    </section>
  );
}
