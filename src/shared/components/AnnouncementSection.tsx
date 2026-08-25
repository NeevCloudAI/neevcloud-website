"use client";

import { LinkComponent, Text } from "@/shared/ui-lib";
import { EXTERNAL_LINKS } from "../constants/external-links.constants";

export default function AnnouncementSection() {
  return (
    <section
      className="p-2.5 text-white font-semibold flex flex-col md:flex-row items-center justify-center gap-1 bg-primary"
      aria-label="Announcement"
    >
      <Text align="center">
        Sign up today and claim ₹2,000 in FREE CPU Cloud credits, valid for 7
        days.
      </Text>
      <LinkComponent
        variant="link"
        href={EXTERNAL_LINKS.signup}
        target="/blank"
        className="hover:shadow-none py-0 px-2"
      >
        Click here
      </LinkComponent>
    </section>
  );
}
