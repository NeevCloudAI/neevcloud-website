"use client";

import { LinkComponent, Text } from "@/shared/ui-lib";
import { EXTERNAL_LINKS } from "../constants/external-links.constants";

export default function AnnouncementSection() {
  return (
    <section
      className="p-2.5 text-[#0a1a3c] font-semibold flex flex-col md:flex-row items-center justify-center gap-1 bg-[linear-gradient(to_right,#A6540A,#FFFFFF,#074D1A)]"
      aria-label="Announcement"
    >
      <Text align="center">
        🇮🇳 This Independence Day, claim ₹15,000 in free CPU Cloud credits,
        valid for 10 days. Sign up today.
      </Text>
      <LinkComponent
        variant="link"
        href="/offers"
        className="hover:shadow-none py-0 px-2"
      >
        Click here
      </LinkComponent>
    </section>
  );
}
