import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { GENERATIVE_AI_DEPLOYMENT_SECTION } from "../data/deployment-section.data";
import GenerativeAiDeploymentSectionClient from "./GenerativeAiDeploymentSectionClient";

const GenerativeAiDeploymentSection = () => {
  return (
    <section
      className="bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="generative-ai-deployment-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="generative-ai-deployment-section-heading"
          textColor="black"
          className="max-w-4xl"
          align="center"
        >
          {GENERATIVE_AI_DEPLOYMENT_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {GENERATIVE_AI_DEPLOYMENT_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black-5"
          align="center"
          className="max-w-3xl mt-2.5 mb-6 md:mb-12.5"
        >
          {GENERATIVE_AI_DEPLOYMENT_SECTION.description}
        </Text>
        <GenerativeAiDeploymentSectionClient />
      </Container>
    </section>
  );
};

export default GenerativeAiDeploymentSection;
