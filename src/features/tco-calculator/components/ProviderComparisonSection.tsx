import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import ProviderComparisonTable from "./provider-comparison/ProviderComparisonTable";

const ProviderComparisonSection = () => {
  return (
    <section
      id="provider-comparison-section"
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="provider-comparison-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="provider-comparison-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          Provider Cost
          <Text as="span" variant="h2" textColor="primary">
            Comparison
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="gray-10"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          Monthly cost breakdown across all providers, based on your configured
          workload.
        </Text>

        <div
          className="mt-4 md:mt-12.5 bg-white-5 backdrop-blur-md rounded-lg w-full shadow-sm font-mono border border-white-10"
          role="region"
          aria-label="Provider cost comparison terminal"
        >
          <ProviderComparisonTable />
        </div>
      </Container>
    </section>
  );
};

export default ProviderComparisonSection;
