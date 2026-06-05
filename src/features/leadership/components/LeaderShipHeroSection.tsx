import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { LEADERSHIP_HERO } from "../data/leadership-page.data";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const LeaderShipHeroSection = () => {
  return (
    <section className="relative bg-white py-8 md:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-70"
          className="bg-primary-20 p-1 rounded-md border border-primary-30"
        >
          {LEADERSHIP_HERO.badgeText}
        </Text>

        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          The
          <Text as="span" variant="h1" textColor="primary">
            Team
          </Text>
        </Text>

        <Text as="h6" className="mt-2.5 max-w-2xl" align="center">
          {LEADERSHIP_HERO.description}
        </Text>

        <div className="flex gap-4 mt-4 md:mt-7.5 z-10">
          <Button>{LEADERSHIP_HERO.button1Text}</Button>
          <Button variant="outline" textColor="black">
            {LEADERSHIP_HERO.button2Text}
          </Button>
        </div>
        <div className="rounded-lg bg-gradient-to-r from-[#c8ebe4] via-[#e9efef] to-[#eef2f2]  flex flex-col gap-8 md:gap-20 md:flex-row items-center justify-center shadow-lg">
          <div className="p-4 md:pl-24 ">
            <div className="flex items-center gap-2">
              <Divider orientation="horizontal" className="w-8 bg-primary" />
              <Text textColor="gray-100" as="small">
                FOUNDER & CEO
              </Text>
            </div>
            <Text
              as="h3"
              textColor="gray-100"
              className="mt-5 text-[28px] md:text-[32px]"
              weight="semibold"
            >
              Narendra Sen
            </Text>
            <Text className="mt-5" weight="medium">
              Founder & CEO
            </Text>
            <Text as="h6" className="mt-5 max-w-xs">
              As Founder and CEO of NeevCloud, Narendra Sen is redefining how
              nations build and own AI infrastructure. His vision places India
              at the center of the Global AI …
            </Text>
            <div className="flex items-center gap-1 mt-2.5">
              <Text weight="semibold" textColor="gray-100">
                Read More
              </Text>
              <ChevronDown className="w-4 h-4 font-semibold" />
            </div>
          </div>
          <div className="relative pt-4 md:pt-8">
            <Image
              src="/icons/icon-xl.svg"
              alt="Leadership"
              width={100}
              height={100}
              className="absolute h-full w-full bottom-0 right-0"
            />
            <div className="z-2 relative">
              <Image
                src="/images/narendra-sen.png"
                alt="Leadership"
                width={380}
                height={380}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LeaderShipHeroSection;
