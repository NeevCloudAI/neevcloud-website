import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { AI_SUPERCLUSTER_USE_CASES } from "../data/use-cases.data";

const UseCasesSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="ai-supercluster-use-cases-heading"
    >
      <Container>
        <Text as="h2" align="center" id="ai-supercluster-use-cases-heading">
          Built for the workloads
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            India is shipping.
          </Text>
        </Text>

        <div className="mt-6 md:mt-12.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_SUPERCLUSTER_USE_CASES.map((useCase) => (
            <FeatureCard key={useCase.title} theme="light" {...useCase} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UseCasesSection;
