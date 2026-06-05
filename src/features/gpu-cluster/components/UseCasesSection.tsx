import Container from "@/shared/components/container";
import UseCasesSectionClient from "./UseCasesSectionClient";
import { Text } from "@/shared/ui-lib";

const UseCasesSection = () => {
  return (
    <section aria-labelledby="gpu-use-cases-section-heading">
      <Container className="bg-white flex flex-col items-center py-8 md:py-25">
        <Text as="h2" id="gpu-use-cases-section-heading">
          Use
          <Text as="span" variant="h2" textColor="primary">
            Cases
          </Text>
        </Text>
        <Text as="h6" textColor="black-5">
          Built for Every AI Workload
        </Text>
        <UseCasesSectionClient />
      </Container>
    </section>
  );
};

export default UseCasesSection;
