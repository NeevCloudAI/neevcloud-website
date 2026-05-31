import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { LLM_TRAINING_INFRASTRUCTURE_ITEMS } from "../data/infrastructure-section.data";

const LlmTrainingInfrastructureSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="llm-training-infrastructure-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="llm-training-infrastructure-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Infrastructure Built for
          <Text as="span" variant="h2" textColor="primary">
            Fine-Tuning
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          Adapting a foundation model to your domain requires serious compute,
          fast storage, and a platform that doesn&apos;t get in the way.
          NeevCloud provides H100 and A100 configurations, single to
          multi-node, with framework freedom.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:items-stretch md:pt-12.5">
          {LLM_TRAINING_INFRASTRUCTURE_ITEMS.map((item) => (
            <li key={item.id} className="h-full">
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default LlmTrainingInfrastructureSection;
