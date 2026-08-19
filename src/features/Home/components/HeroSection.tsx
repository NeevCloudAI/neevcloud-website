import Container from "@/shared/components/container";
import HeroBgVideoClient from "./HeroBgVideoClient";
import HeroGetStartedButton from "./HeroGetStartedButton";
import LatestNewsCarouselClient from "./LatestNewsCarouselClient";
import { HERO } from "../constants/hero.constants";
import { Text } from "@/shared/ui-lib";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-black"
    >
      {/* 3D SuperCloud render — poster paints first; the loop mounts
          immediately on desktop, after load on mobile */}
      <HeroBgVideoClient />
      {/* teal scrim for depth + text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-deep-forest/40"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between gap-14 pb-10 md:gap-24 md:pb-20">
        <Container className="flex flex-col items-start gap-10 pt-28 md:gap-12 md:pt-[145px]">
          <div className="flex flex-col gap-4 md:gap-6">
            <Text
              id="hero-heading"
              as="h1"
              textColor={"white"}
              weight={"normal"}
              className="md:text-[64px] lg:text-[74px]"
            >
              {HERO.headline.split("AI Native SuperCloud")[0]}
              <Text
                as="span"
                variant={"h1"}
                textColor={"primary"}
                weight={"normal"}
                className="mx-0 md:mx-0 md:text-[64px] lg:text-[74px]"
              >
                AI SuperCloud
              </Text>
            </Text>
            <p
              className="hero-in text-[20px] font-normal leading-[132%] tracking-[-0.02em] text-white/90 md:text-[22px] xl:whitespace-nowrap"
              style={{ animationDelay: "0.12s" }}
            >
              {HERO.subheadline}
            </p>
          </div>
          <div className="hero-in" style={{ animationDelay: "0.24s" }}>
            <HeroGetStartedButton
              target="_blank"
              label={HERO.ctaLabel}
              href={HERO.ctaHref}
            />
          </div>
        </Container>

        {/* Full-bleed carousel: heading stays container-aligned, cards run
            edge-to-edge across the viewport. */}
        <section
          aria-labelledby="latest-news-heading"
          className="hero-in flex w-full flex-col gap-4"
          style={{ animationDelay: "0.36s" }}
        >
          {/* <Container>
            <h2
              id="latest-news-heading"
              className="text-[14px] font-normal leading-[132%] tracking-[-0.02em] text-white"
            >
              Latest at NeevCloud
            </h2>
          </Container> */}
          <LatestNewsCarouselClient />
        </section>
      </div>
    </section>
  );
}
