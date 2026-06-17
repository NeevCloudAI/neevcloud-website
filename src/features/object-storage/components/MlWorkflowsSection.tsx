import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import MlWorkflowCard from "./ml-workflows/MlWorkflowCard";
import { ML_WORKFLOW_CARDS } from "../data/ml-workflows-section.data";

const MlWorkflowsSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="object-storage-ml-workflows-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="object-storage-ml-workflows-section-heading"
          align="center"
          className="max-w-4xl"
        >
          Built for
          <Text as="span" variant="h2" textColor="primary">
            ML Workflows
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black/82" className="max-w-3xl">
          Versioning, replication, fine-grained access control, and intelligent
          performance optimization, designed from the ground up for production
          ML pipelines.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 md:mt-12.5 list-none w-full">
          {ML_WORKFLOW_CARDS.map((card) => (
            <MlWorkflowCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MlWorkflowsSection;
