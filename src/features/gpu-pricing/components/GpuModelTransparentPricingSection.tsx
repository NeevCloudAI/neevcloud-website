import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import GpuModelTransparentPricingPanel from "./GpuModelTransparentPricingPanel";

const GpuModelTransparentPricingSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="gpu-model-transparent-pricing-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 top-20 right-[-5%] h-[60%] w-full bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat opacity-40 md:w-[30%] md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-model-transparent-pricing-section-heading"
          align="center"
          textColor="primary"
          className="max-w-4xl"
        >
          Transparent
          <Text as="span" variant="h2" textColor="white">
            GPU Pricing
          </Text>
        </Text>

        <div
          className="mt-4 w-full rounded-lg border border-white/12 bg-white/6 font-mono shadow-sm backdrop-blur-md md:mt-12.5"
          role="region"
          aria-label="Transparent GPU pricing terminal"
        >
          <GpuModelTransparentPricingPanel />
        </div>
      </Container>
    </section>
  );
};

export default GpuModelTransparentPricingSection;
