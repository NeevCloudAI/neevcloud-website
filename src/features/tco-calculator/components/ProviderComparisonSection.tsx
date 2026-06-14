import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import ProviderComparisonTable from "./provider-comparison/ProviderComparisonTable";

const ProviderComparisonSection = () => {
  return (
    <section
      aria-labelledby="provider-comparison-section-heading"
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      id="provider-comparison-section"
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
          textColor="cloud-gray"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          Monthly cost breakdown across all providers, based on your configured
          workload.
        </Text>

        <div
          className="mt-4 md:mt-12.5 bg-white/6 backdrop-blur-md rounded-lg w-full shadow-sm font-mono border border-white/12 overflow-x-auto classy"
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
