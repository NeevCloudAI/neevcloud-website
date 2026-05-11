import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
import Image from "next/image";

const NounSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-black"
      aria-labelledby="noun-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/satelite.png')] bg-cover bg-center bg-position-center bg-no-repeat opacity-85"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/70 to-[#020617]/0"
        aria-hidden
      />

      <Container className="relative z-10 py-[3vh] md:py-[7vh]">
        <div className="flex items-center gap-2 md:gap-2 mb-4 md:mb-10 nowrap">
          <Image src="/icons/noun.svg" alt="Noun" width={25} height={25} />
          <Text as="h6" textColor="primary">
            NOUN
          </Text>
          <Divider className="bg-gray-50 h-6 mx-2" />
          <Text as="h3" weight="semibold" textColor="white">
            Connecting People, Places, and Things.
          </Text>
        </div>

        <div className="flex flex-col gap-2 md:gap-4 w-full md:w-1/2">
          <div className="flex flex-wrap flex-row md:flex-col whitespace-nowrap  gap-1 md:gap-4">
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

          <Text textColor="white" className="my-2 md:my-6">
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
          className="bg-linear-to-r from-primary to-transparent my-4 w-full md:w-1/4"
        />
        <Text as="h3" weight="semibold" textColor="white">
          If NeevCloud is the Foundation,
        </Text>

        <Text weight="semibold" textColor="primary" as="h3">
          Project Noun
          <Text weight="semibold" textColor="white" as="span" variant="h3">
            is the
          </Text>
          Horizon
          <Text weight="semibold" textColor="white" as="span" variant="h3">
            .
          </Text>
        </Text>
        <Divider
          orientation="horizontal"
          className="bg-linear-to-r from-primary to-transparent my-4 w-full md:w-1/3"
        />
        <Button spacing="lg" borderRadius="sm" className="mt-4 md:mt-8">
          Explore Project Noun
        </Button>
      </Container>
    </section>
  );
};

export default NounSection;
