import Container from "@/shared/components/container";
import { Divider, Text, LinkComponent } from "@/shared/ui-lib";
import { LEADERSHIP_HERO } from "../data/leadership-page.data";
import Image from "next/image";
import { MoveRight } from "@/shared/icons/lucide-icon-map";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

const LeaderShipHeroSection = () => {
  return (
    <section className="relative bg-black py-8 md:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-90"
          className="bg-primary-90/6 p-1 rounded-md border border-primary-90"
        >
          {LEADERSHIP_HERO.badgeText}
        </Text>

        <Text
          as="h1"
          align="center"
          className="max-w-5xl mt-4 md:mt-6"
          textColor={"white"}
        >
          The
          <Text as="span" variant="h1" textColor="primary">
            Team
          </Text>
        </Text>

        <Text
          as="h6"
          className="mt-2.5 max-w-2xl"
          align="center"
          textColor={"white"}
        >
          {LEADERSHIP_HERO.description}
        </Text>

        <div className="flex gap-4 mt-4 md:mt-7.5 z-10">
          <LinkComponent
            href={LEADERSHIP_HERO.primaryCtaRoute ?? ""}
            target={LEADERSHIP_HERO.primaryCtaTarget}
            spacing="lg"
          >
            {LEADERSHIP_HERO.primaryCta}
          </LinkComponent>
        </div>

        <div className=" mt-6 md:mt-20 rounded-lg bg-linear-to-r from-[#c8ebe4] via-[#e9efef] to-[#eef2f2] flex flex-col gap-8 md:gap-20 md:flex-row items-center justify-center shadow-lg">
          <div className="p-4 md:pl-15 ">
            <Text as="h3" className="text-30" weight="semibold">
              Narendra Sen
            </Text>
            <div className="w-fit">
              <Text
                as="h6"
                className="mt-5"
                weight="semibold"
                textColor="gray-05"
              >
                Founder & CEO
              </Text>
              <Divider
                orientation="horizontal"
                className="mt-1 bg-primary-105"
              />
            </div>
            <Text as="h6" className="mt-5 max-w-md">
              As Founder and CEO of NeevCloud, Narendra Sen is redefining how
              nations build and own AI infrastructure. His vision places India
              at the center of the Global AI Landscape through platforms that
              are secure, scalable, and sovereign by design.
            </Text>
            <Text as="h6" className="mt-2.5 max-w-md">
              By pioneering India’s first AI SuperCloud, he is laying the
              foundation for a digital future powered by innovation,
              independence, and long-term resilience.
            </Text>

            <a
              href={EXTERNAL_LINKS.narendraSenLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex mt-4 items-center gap-2 bg-primary/15 hover:bg-linear-to-r from-[#5CB7A8] to-[#92EFE0] p-1.5 rounded-md"
              aria-label={`Narendra Sen on LinkedIn`}
            >
              <Image
                src="/icons/linkedin-bg.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
              <Text weight="semibold" textColor="gray-100">
                Narendra Sen
              </Text>
              <MoveRight className="size-6" />
            </a>
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
                src="/images/webp/narendra-sen.webp"
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
