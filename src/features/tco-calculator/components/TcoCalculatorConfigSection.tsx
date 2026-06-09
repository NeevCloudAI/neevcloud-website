import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { TCO_CALCULATOR_SECTION } from "../data/calculator-section.data";
import TcoCalculatorConfigClient from "./calculator/TcoCalculatorConfigClient";

const TcoCalculatorConfigSection = () => {
  return (
    <section
      id="tco-calculator-tool"
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="tco-calculator-config-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="tco-calculator-config-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          {TCO_CALCULATOR_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {TCO_CALCULATOR_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="gray-10"
          align="center"
          className="mt-2.5 max-w-3xl"
        >
          {TCO_CALCULATOR_SECTION.description}
        </Text>

        <div className="mt-4 w-full md:mt-12.5">
          <TcoCalculatorConfigClient />
        </div>
      </Container>
    </section>
  );
};

export default TcoCalculatorConfigSection;
