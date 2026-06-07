import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import GpuTransparentPricingPanel from "./GpuTransparentPricingPanel";

const GpuTransparentPricingSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="gpu-transparent-pricing-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-transparent-pricing-section-heading"
          align="center"
          textColor="primary"
          className="max-w-4xl"
        >
          Available
          <Text as="span" variant="h2" textColor="white">
            GPU Configurations
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="gray-75"
          align="center"
          className="mt-2.5 max-w-3xl"
        >
          Real workloads from real institutions, fraud, risk, trading, claims,
          and compliance, running on GPU infrastructure with data sovereignty.
        </Text>

        <div
          className="mt-4 w-full rounded-lg border border-white-10 bg-white-5 font-mono shadow-sm backdrop-blur-md md:mt-12.5"
          role="region"
          aria-label="Available GPU configurations terminal"
        >
          <GpuTransparentPricingPanel />
        </div>
      </Container>
    </section>
  );
};

export default GpuTransparentPricingSection;
