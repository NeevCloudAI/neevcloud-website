import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import CpuTransparentPricingPanel from "./CpuTransparentPricingPanel";

const CpuTransparentPricingSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="cpu-transparent-pricing-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="cpu-transparent-pricing-section-heading"
          align="center"
          textColor="primary"
          className="max-w-4xl"
        >
          Transparent
          <Text as="span" variant="h2" textColor="white">
            CPU Pricing
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="gray-75"
          align="center"
          className="mt-2.5 max-w-3xl"
        >
          All instances billed per hour. No hidden fees. Pay only for what you
          use.
        </Text>

        <div
          className="mt-4 w-full rounded-lg border border-white-10 bg-white-5 font-mono shadow-sm backdrop-blur-md md:mt-12.5"
          role="region"
          aria-label="Transparent CPU pricing terminal"
        >
          <CpuTransparentPricingPanel />
        </div>
      </Container>
    </section>
  );
};

export default CpuTransparentPricingSection;
