import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_WORKFLOW_DEPLOYMENT_SECTION } from "../data/deployment-section.data";
import AgenticWorkflowDeploymentSectionClient from "./AgenticWorkflowDeploymentSectionClient";

const AgenticWorkflowDeploymentSection = () => {
  return (
    <section
      className="bg-gray-10 py-8 md:py-25"
      aria-labelledby="agentic-workflow-deployment-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="agentic-workflow-deployment-section-heading"
          textColor="black"
          className="max-w-4xl"
          align="center"
        >
          {AGENTIC_WORKFLOW_DEPLOYMENT_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {AGENTIC_WORKFLOW_DEPLOYMENT_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black-5"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          {AGENTIC_WORKFLOW_DEPLOYMENT_SECTION.description}
        </Text>
        <AgenticWorkflowDeploymentSectionClient />
      </Container>
    </section>
  );
};

export default AgenticWorkflowDeploymentSection;
