// ModelApiPricingSection.tsx
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import ModelApiPricingTerminal from "./ModelApiPricingTerminal";
import ModelApiPricingCalculator from "./ModelApiPricingCalculator";

export default function ModelApiPricingSection() {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div className="absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[55%] top-20 right-[-5%] opacity-40 md:opacity-100" />
      <div className="absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl" />

      <Container className="flex flex-col items-center justify-center gap-8">
        {/* Heading */}
        <div className="text-center">
          <Text as="h2" textColor="white" weight="semibold">
            Pay for what you use.
          </Text>
          <Text as="h2" textColor="primary" weight="semibold">
            Nothing more.
          </Text>
        </div>

        {/* Two panels */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <ModelApiPricingTerminal />
          <ModelApiPricingCalculator />
        </div>
      </Container>
    </section>
  );
}
