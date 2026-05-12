import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import Image from "next/image";

const PricingSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full  md:w-[30%] h-[55%] top-20 right-[-5%] opacity-40 md:opacity-100"></div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" weight={"semibold"} lineHeight="xxxl">
          Every Workload
        </Text>
        <Text as="h2" weight={"semibold"} textColor="primary">
          Flat rate.
          <Text as="span" variant="h2" textColor="white" weight={"semibold"}>
            Unmetered.
          </Text>
        </Text>
        <Text textColor="gray-10" align="center" className="mt-2">
          Commit and Save. The Longer the Plan, the Lower the Rate.
        </Text>

        <div className="bg-transparent backdrop-blur-xs border border-white-10 p-2 rounded-md mt-4 md:mt-8">
          <Image
            src="/images/pricing.png"
            alt="Pricing"
            width={1000}
            height={1000}
          />
        </div>

        <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4 md:mt-16 mb-2 md:mb-8">
          <Button weight="semibold">View Complete Pricing</Button>
          <Button variant="white" textColor="black" weight="semibold">
            Contact for Custom Plans
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
