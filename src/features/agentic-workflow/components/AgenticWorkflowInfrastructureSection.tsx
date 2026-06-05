import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_WORKFLOW_INFRASTRUCTURE_ITEMS } from "../data/infrastructure-section.data";

const AgenticWorkflowInfrastructureSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-25"
      aria-labelledby="agentic-workflow-infrastructure-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="agentic-workflow-infrastructure-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Infrastructure for
          <Text as="span" variant="h2" textColor="primary">
            Agentic AI
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          NeevCloud&apos;s GPU AI Service provides the Kubernetes-native
          foundation to orchestrate agent workflows at scale, from research
          agents to production workflow automation, without the infrastructure
          overhead.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:items-stretch md:pt-12.5">
          {AGENTIC_WORKFLOW_INFRASTRUCTURE_ITEMS.map((item) => (
            <li key={item.id} className="h-full">
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AgenticWorkflowInfrastructureSection;
