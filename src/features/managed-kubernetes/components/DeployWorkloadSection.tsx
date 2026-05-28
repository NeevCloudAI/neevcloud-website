import Container from "@/shared/components/container";
import DeployWorkloadSectionClient from "./DeployWorkloadSectionClient";
import { Text } from "@/shared/ui-lib";

const DeployWorkloadSection = () => {
  return (
    <section
      className="bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="deploy-workload-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="deploy-workload-section-heading"
          textColor="black"
          className="max-w-4xl"
          align="center"
        >
          Deploy Your
          <Text as="span" variant="h2" textColor="primary">
            First Workload
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black-5"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          Four primitives, create, deploy, train, scale. Same CLI surface, same
          auth, same cluster.
        </Text>
        <DeployWorkloadSectionClient />
      </Container>
    </section>
  );
};

export default DeployWorkloadSection;
