import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { GPU_COST_CALCULATOR_SECTION } from "../data/cost-calculator-section.data";
import GpuCostCalculatorClient from "./GpuCostCalculatorClient";

const GpuCostCalculatorSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="gpu-cost-calculator-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-primary-30 bg-primary-20 px-2 py-1">
          <span
            className="size-1.5 rounded-full bg-primary"
            aria-hidden="true"
          />
          <Text as="small" textColor="primary-70">
            {GPU_COST_CALCULATOR_SECTION.badgeText}
          </Text>
        </span>

        <Text
          as="h2"
          id="gpu-cost-calculator-section-heading"
          align="center"
          className="mt-4 max-w-4xl"
        >
          {GPU_COST_CALCULATOR_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {GPU_COST_CALCULATOR_SECTION.titleHighlight}
          </Text>
        </Text>

        <Text
          as="h6"
          textColor="gray-85"
          align="center"
          className="mt-2.5 max-w-3xl"
        >
          {GPU_COST_CALCULATOR_SECTION.description}
        </Text>

        <div className="mt-4 w-full md:mt-12.5">
          <GpuCostCalculatorClient />
        </div>
      </Container>
    </section>
  );
};

export default GpuCostCalculatorSection;
