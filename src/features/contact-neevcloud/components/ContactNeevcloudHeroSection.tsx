"use client";

import { Text, LinkComponent } from "@/shared/ui-lib";
import { CONTACT_NEEVCLOUD_HERO } from "../data/contact-neevcloud-page.data";
import Container from "@/shared/components/container";
import { CircleCheck } from "@/shared/icons/lucide-icon-map";
import Image from "next/image";

const ContactNeevcloudHeroSection = () => {
  return (
    <section className="relative bg-black py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-90"
          className="bg-primary-90/6 p-1 rounded-md border border-primary-90"
        >
          {CONTACT_NEEVCLOUD_HERO.badgeText}
        </Text>

        <Text
          as="h1"
          align="center"
          className="max-w-5xl mt-4 md:mt-6"
          textColor={"white"}
        >
          Let&apos;s Build
        </Text>

        <Text
          as="h1"
          align="center"
          className="max-w-5xl"
          textColor={"primary"}
        >
          Your AI Infrastructure
        </Text>

        <Text
          as="h6"
          className="mt-2.5 max-w-xl"
          align="center"
          textColor={"white"}
        >
          {CONTACT_NEEVCLOUD_HERO.description}
        </Text>

        <div className="flex gap-4 mt-4 md:mt-7.5 z-10">
          <LinkComponent
            href={CONTACT_NEEVCLOUD_HERO.primaryCtaRoute ?? ""}
            spacing="lg"
            onClick={() => {
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {CONTACT_NEEVCLOUD_HERO.primaryCta}
          </LinkComponent>
          <LinkComponent
            href={CONTACT_NEEVCLOUD_HERO.secondaryCtaRoute ?? ""}
            variant="outline-primary"
            target={CONTACT_NEEVCLOUD_HERO.secondaryCtaTarget}
            spacing="lg"
          >
            {CONTACT_NEEVCLOUD_HERO.secondaryCta}
          </LinkComponent>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 md:mt-12.5 w-full">
          {CONTACT_NEEVCLOUD_HERO.trustBadges.map((badge, index) => (
            <div key={badge} className="flex items-center gap-3">
              {CONTACT_NEEVCLOUD_HERO.badgeIcon && <CircleCheck size={16} />}
              <span className="text-white text-sm whitespace-nowrap">
                {badge}
              </span>
              {!CONTACT_NEEVCLOUD_HERO.badgeIcon &&
                index < CONTACT_NEEVCLOUD_HERO.trustBadges.length - 1 && (
                  <span className="text-white text-sm">•</span>
                )}
            </div>
          ))}
        </div>

        <div className="w-full min-h-50 md:min-h-80 mt-4 md:mt-12.5 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/webp/contact.webp"
            alt="Gradient Background"
            fill
            className="object-contain"
            priority
          />
        </div>

        <Text
          as="h3"
          weight="medium"
          className="mt-4 md:mt-12.5 italic"
          textColor={"white"}
        >
          Built for ideas that demand scale.
        </Text>
      </Container>
    </section>
  );
};

export default ContactNeevcloudHeroSection;
