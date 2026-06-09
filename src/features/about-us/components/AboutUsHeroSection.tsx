import { Button, Text } from "@/shared/ui-lib";
import { ABOUT_US_HERO } from "../data/about-us-page.data";
import Container from "@/shared/components/container";
import Image from "next/image";

const AboutUsHeroSection = () => {
  return (
    <section className="relative bg-white py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-70"
          className="bg-primary-20 p-1 rounded-md border border-primary-30"
        >
          {ABOUT_US_HERO.badgeText}
        </Text>

        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          Building the Foundation
          <Text as="span" variant="h1" textColor="primary">
            for AI
          </Text>
        </Text>

        <Text as="h6" className="mt-2.5 max-w-3xl" align="center">
          {ABOUT_US_HERO.description}
        </Text>

        <div className="flex gap-4 mt-4 md:mt-7.5 z-10">
          <Button spacing="lg">{ABOUT_US_HERO.primaryCta}</Button>
          <Button variant="outline" textColor="black" spacing="lg">
            {ABOUT_US_HERO.secondaryCta}
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 md:mt-12.5 w-full">
          {ABOUT_US_HERO.trustBadges.map((badge, index) => (
            <div key={badge} className="flex items-center gap-3">
              <span className="text-foreground text-sm whitespace-nowrap">
                {badge}
              </span>
              {index < ABOUT_US_HERO.trustBadges.length - 1 && (
                <span className="text-foreground text-sm">•</span>
              )}
            </div>
          ))}
        </div>

        <div className="w-full min-h-50 md:min-h-[80vh] mt-4 md:mt-12.5 rounded-2xl relative">
          <Image
            src="/images/about-us.png"
            alt="About Us"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHeroSection;
