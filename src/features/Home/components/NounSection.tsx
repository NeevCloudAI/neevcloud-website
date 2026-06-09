import Container from "@/shared/components/container";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import { Divider, Text } from "@/shared/ui-lib";
import LinkComponent from "@/shared/ui-lib/link";
import Image from "next/image";

const NounSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="noun-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/satelite.png')] bg-cover bg-center bg-position-center bg-no-repeat opacity-85"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/70 to-[#020617]/0  after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/2 after:bg-linear-to-t after:from-black after:to-transparent"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="flex items-center gap-2 md:gap-2 nowrap">
          <Image src="/icons/noun.svg" alt="Noun" width={30} height={30} />
          <Text as="h4" textColor="primary" weight="semibold">
            NOUN
          </Text>
          <Divider className="bg-gray-75 h-6 mx-2" />
          <Text as="h3" weight="semibold" textColor="white">
            Connecting People, Places, and Things.
          </Text>
        </div>

        <div className="flex flex-col gap-2 md:gap-4 w-full">
          <div className="flex flex-wrap flex-row md:flex-col whitespace-nowrap gap-1 md:gap-4 mt-4 md:mt-12.5">
            <Text as="h1" textColor="white">
              Introducing
            </Text>
            <Text as="h1" textColor="primary">
              Project Noun:
            </Text>
            <Text as="h1" textColor="white">
              AI Infrastructure
            </Text>
            <Text as="h1" textColor="white">
              Without Limits
            </Text>
          </div>

          <Text as="h6" textColor="gray-10" className="mt-2 md:mt-5 max-w-2xl">
            Project Noun is NeevCloud&apos;s leap beyond traditional
            infrastructure, removing the limits of geography and latency to
            redefine how AI is deployed and scaled. Built as a next-gen layer,
            it enables globally distributed execution, ultra-low latency
            inference, and seamless compute access, bringing AI closer to users
            and powering the future of real-time, borderless intelligence.
          </Text>
        </div>

        <Divider
          orientation="horizontal"
          className="bg-linear-to-r from-primary to-transparent mt-4 md:mt-10 mb-2 md:mb-5 w-full max-w-lg"
        />
        <Text as="h3" weight="semibold" textColor="white">
          If NeevCloud is the Foundation,
        </Text>

        <Text weight="semibold" textColor="primary" as="h3">
          Project Noun
          <Text
            weight="semibold"
            textColor="white"
            as="span"
            variant="h3"
            className="mx-1 md:mx-2"
          >
            is the
          </Text>
          Horizon
          <Text
            weight="semibold"
            textColor="white"
            as="span"
            variant="h3"
            className="mx-0 md:mx-0"
          >
            .
          </Text>
        </Text>
        <Divider
          orientation="horizontal"
          className="bg-linear-to-r from-primary to-transparent mt-5 mb-4 md:mb-15 w-full md:w-1/3"
        />
        <LinkComponent
          href={EXTERNAL_LINKS.projectOrion}
          target="_blank"
          spacing="lg"
        >
          Explore Project Noun
        </LinkComponent>
      </Container>
    </section>
  );
};

export default NounSection;
