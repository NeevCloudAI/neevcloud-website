import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import StoragePricingCalculator from "./StoragePricingCalculator";
import TransparentPricingTerminal from "./pricing/TransparentPricingTerminal";

const TransparentPricingSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="object-storage-transparent-pricing-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="object-storage-transparent-pricing-section-heading"
          align="center"
          className="max-w-4xl"
        >
          Simple
          <Text as="span" variant="h2" textColor="primary">
            Storage
          </Text>
          Pricing
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="gray-05"
          className="max-w-3xl mt-2.5"
        >
          No minimum storage duration, No retrieval charges for Standard tier,
          No per-request pricing, No charges for data transfer within region
        </Text>
        <div className="mt-4 flex w-full flex-col gap-4 md:gap-5 md:mt-12.5 md:flex-row">
          <TransparentPricingTerminal />
          <div className="w-full rounded-md bg-white p-4 md:p-10">
            <StoragePricingCalculator />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TransparentPricingSection;
