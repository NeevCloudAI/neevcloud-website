import Image from "next/image";
import Container from "@/shared/components/container";
import HeroGetStartedButton from "./HeroGetStartedButton";
import LatestNewsCarouselClient from "./LatestNewsCarouselClient";
import { HERO } from "../constants/hero.constants";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-black"
    >
      {/* 3D SuperCloud render */}
      <Image
        src="/images/home/hero-supercloud.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* teal scrim for depth + text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-deep-forest/40"
      />

      <Container className="relative z-10 flex flex-col items-start gap-14 pb-20 pt-32 md:min-h-[810px] md:gap-24 md:pt-44">
        <div className="hero-in flex w-full flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1
              id="hero-heading"
              className="text-[40px] font-normal capitalize leading-[110%] tracking-[-0.01em] text-white sm:text-[54px] md:text-[64px] lg:text-[74px] xl:whitespace-nowrap"
            >
              {HERO.headline}
            </h1>
            <p className="text-[16px] font-normal leading-[132%] tracking-[-0.02em] text-white/90 sm:text-[18px] md:text-[22px] xl:whitespace-nowrap">
              {HERO.subheadline}
            </p>
          </div>
          <HeroGetStartedButton label={HERO.ctaLabel} href={HERO.ctaHref} />
        </div>

        <section
          aria-labelledby="latest-news-heading"
          className="hero-in flex w-full flex-col gap-4"
          style={{ animationDelay: "0.2s" }}
        >
          <h2
            id="latest-news-heading"
            className="text-[18px] font-normal leading-[132%] tracking-[-0.02em] text-white md:text-[20px]"
          >
            Latest at NeevCloud
          </h2>
          <LatestNewsCarouselClient />
        </section>
      </Container>
    </section>
  );
}
