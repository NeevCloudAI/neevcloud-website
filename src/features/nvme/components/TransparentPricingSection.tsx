import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import TransparentPricingTerminal from "./pricing/TransparentPricingTerminal";
import StoragePricingCalculator from "./StoragePricingCalculator";

const TransparentPricingSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="nvme-transparent-pricing-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="nvme-transparent-pricing-section-heading"
          textColor="white"
          className="max-w-4xl"
        >
          Simple,
          <Text as="span" variant="h2" textColor="primary">
            Transparent
          </Text>
          Pricing
        </Text>
        <Text
          as="h6"
          textColor="gray-10"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          25GB included free with every GPU instance. Pay only for additional
          capacity you provision.
        </Text>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-12.5 w-full">
          <TransparentPricingTerminal />
          <div className="w-full rounded-xl border border-black-5 bg-primary-5 p-4 md:p-10">
            <StoragePricingCalculator />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TransparentPricingSection;
