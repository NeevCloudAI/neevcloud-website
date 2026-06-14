import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { GENERATIVE_AI_INFRASTRUCTURE_ITEMS } from "../data/infrastructure-section.data";

const GenerativeAiInfrastructureSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="generative-ai-infrastructure-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="generative-ai-infrastructure-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Infrastructure Built for
          <Text as="span" variant="h2" textColor="primary">
            GenAI Products
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black/82"
          className="max-w-3xl mt-2.5"
        >
          Building generative AI applications means managing large model
          weights, variable load, and tight latency requirements. NeevCloud
          gives product teams and AI startups the infrastructure to develop,
          deploy, and scale GenAI products, with India-native data handling.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:items-stretch md:pt-12.5">
          {GENERATIVE_AI_INFRASTRUCTURE_ITEMS.map((item) => (
            <li key={item.id} className="h-full">
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default GenerativeAiInfrastructureSection;
