"use client";

import { LinkComponent, Text } from "@/shared/ui-lib";
import { EXTERNAL_LINKS } from "../constants/external-links.constants";

export default function AnnouncementSection() {
  return (
    <section
      className="bg-primary p-2.5 text-white flex flex-col md:flex-row items-center justify-center"
      aria-label="Announcement"
    >
      <Text align="center">
        Sign up today and get ₹15,000 free CPU Cloud credits, valid for 10 days
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
