import Container from "@/shared/components/container";
import TokenPricingSectionActions from "./token-pricing/TokenPricingSectionActions";
import TokenPricingTerminal from "./token-pricing/TokenPricingTerminal";
import { Text } from "@/shared/ui-lib";

const TokenPricingSection = () => {
  return (
    <section
      className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="token-pricing-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="token-pricing-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          Token pricing.
          <Text as="span" variant="h2" textColor="primary">
            No Surprises.
          </Text>
        </Text>
        <Text as="h6" textColor="gray-10" align="center" className="max-w-3xl">
          Pay per token, input and output billed separately. All charges in INR.
          Volume discounts unlock automatically above 10M tokens per month.
          Reserved inference capacity available for high-volume workloads.
        </Text>

        <div className="mt-4 md:mt-12.5 w-full">
          <TokenPricingTerminal />
        </div>

        <TokenPricingSectionActions />
      </Container>
    </section>
  );
};

export default TokenPricingSection;
