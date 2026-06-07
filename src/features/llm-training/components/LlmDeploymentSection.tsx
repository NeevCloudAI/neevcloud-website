import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { LLM_DEPLOYMENT_SECTION } from "../data/deployment-section.data";
import LlmDeploymentSectionClient from "./LlmDeploymentSectionClient";

const LlmDeploymentSection = () => {
  return (
    <section
      className="bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="llm-deployment-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="llm-deployment-section-heading"
          textColor="black"
          className="max-w-4xl"
          align="center"
        >
          {LLM_DEPLOYMENT_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {LLM_DEPLOYMENT_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black-5"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          {LLM_DEPLOYMENT_SECTION.description}
        </Text>
        <LlmDeploymentSectionClient />
      </Container>
    </section>
  );
};

export default LlmDeploymentSection;
