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
      {/* 3D SuperCloud render — animated loop, poster for fast first paint */}
      <video
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        poster="/images/home/hero-supercloud.jpg"
        className="absolute inset-0 h-full w-full origin-center -translate-y-[12%] scale-[0.75] object-cover object-center [mask-image:linear-gradient(to_left,transparent_0%,#000_16%)]"
      >
        <source src="/images/home/hero-supercloud.mp4" type="video/mp4" />
      </video>
      {/* teal scrim for depth + text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-deep-forest/40"
      />

      <Container className="relative z-10 flex flex-col items-start gap-14 pb-20 pt-28 md:min-h-[810px] md:gap-24 md:pt-[145px]">
        <div className="flex w-full flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1
              id="hero-heading"
              className="hero-in text-[40px] font-normal capitalize leading-[110%] tracking-[-0.01em] text-white sm:text-[54px] md:text-[64px] lg:text-[74px] xl:whitespace-nowrap"
            >
              {HERO.headline}
            </h1>
            <p
              className="hero-in text-[16px] font-normal leading-[132%] tracking-[-0.02em] text-white/90 sm:text-[18px] md:text-[22px] xl:whitespace-nowrap"
              style={{ animationDelay: "0.12s" }}
            >
              {HERO.subheadline}
            </p>
          </div>
          <div className="hero-in" style={{ animationDelay: "0.24s" }}>
            <HeroGetStartedButton label={HERO.ctaLabel} href={HERO.ctaHref} />
          </div>
        </div>

        <section
          aria-labelledby="latest-news-heading"
          className="hero-in flex w-full flex-col gap-4"
          style={{ animationDelay: "0.36s" }}
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
