import Container from "@/shared/components/container";
import PaySectionTerminal from "./pay/PaySectionTerminal";
import PricingCalculator from "./PricingCalculator";
import { Text } from "@/shared/ui-lib";

const PaySection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="model-api-pay-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-[50%] top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="model-api-pay-section-heading"
          textColor="white"
          weight="semibold"
          className="max-w-4xl"
        >
          Pay for what you use.
          <Text as="span" variant="h2" textColor="primary">
            Nothing more.
          </Text>
        </Text>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-12.5 w-full">
          <PaySectionTerminal />
          <div className="w-full rounded-xl border border-black-5 bg-white p-4 md:px-7.5 md:py-10 ">
            <PricingCalculator />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaySection;
