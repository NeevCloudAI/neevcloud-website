import { Text, LinkComponent } from "@/shared/ui-lib";
import { ABOUT_US_HERO } from "../data/about-us-page.data";
import Container from "@/shared/components/container";
import Image from "next/image";

const AboutUsHeroSection = () => {
  return (
    <section className="relative bg-black pt-8 md:pt-16 2xl:pt-25">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-90"
          className="bg-primary-90/6 p-1 rounded-md border border-primary-90"
        >
          {ABOUT_US_HERO.badgeText}
        </Text>

        <Text
          as="h1"
          align="center"
          className="max-w-5xl mt-4 md:mt-6"
          textColor={"white"}
        >
          Building the Foundation
          <Text as="span" variant="h1" textColor="primary">
            for AI
          </Text>
        </Text>

        <Text
          as="h6"
          className="mt-2.5 max-w-3xl"
          align="center"
          textColor={"white"}
        >
          {ABOUT_US_HERO.description}
        </Text>

        <div className="flex gap-4 mt-4 md:mt-7.5 z-10">
          <LinkComponent
            href={ABOUT_US_HERO.primaryCtaRoute ?? ""}
            target={ABOUT_US_HERO.primaryCtaTarget}
            spacing="lg"
          >
            {ABOUT_US_HERO.primaryCta}
          </LinkComponent>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 md:mt-12.5 w-full">
          {ABOUT_US_HERO.trustBadges.map((badge, index) => (
            <div key={badge} className="flex items-center gap-3">
              <span className="text-white text-sm whitespace-nowrap">
                {badge}
              </span>
              {index < ABOUT_US_HERO.trustBadges.length - 1 && (
                <span className="text-white text-sm">•</span>
              )}
            </div>
          ))}
        </div>

        <div className="w-full min-h-50 md:min-h-[80vh] mt-4 md:mt-12.5 rounded-2xl relative">
          <div className="absolute top-0 right-5 md:right-25 w-full h-full">
            <Image
              src="/images/about-us.png"
              alt="About Us"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHeroSection;
