import ApplicationCard from "@/shared/components/application-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_WORKFLOW_APPLICATION_CARDS } from "../data/application-section.data";

const AgenticWorkflowApplicationSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="agentic-workflow-applications-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="agentic-workflow-applications-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          What
          <Text as="span" variant="h2" textColor="primary">
            Agents
          </Text>
          Can Do
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black/82"
          className="max-w-3xl mt-2.5"
        >
          Five strategic capability areas, pick one to explore the specific
          workloads, applications, and deployment patterns NeevCloud supports.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-6 p-0 m-0 pt-4 md:grid-cols-6 md:pt-12.5">
          {AGENTIC_WORKFLOW_APPLICATION_CARDS.map((card) => (
            <li key={card.id} className={card.className}>
              <ApplicationCard
                label={card.label}
                title={card.title}
                description={card.description}
                icon={card.icon}
                theme={card.theme}
                image={card.image}
                imageSpacing={card.imageSpacing}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AgenticWorkflowApplicationSection;
