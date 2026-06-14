import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AI_INFERENCE_SCENARIO_ITEMS } from "../data/scenarios-section.data";
import AiInferenceScenarioCard from "./AiInferenceScenarioCard";

const AiInferenceScenariosSection = () => {
  return (
    <section
      className="relative bg-cloud-gray pb-8 md:pb-16 2xl:pb-25"
      aria-labelledby="ai-inference-scenarios-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="ai-inference-scenarios-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Production
          <Text as="span" variant="h2" textColor="primary">
            Inference Scenarios
          </Text>
        </Text>
        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-y-8.75 gap-x-5 p-0 md:mt-12.5 md:grid-cols-3">
          {AI_INFERENCE_SCENARIO_ITEMS.map((item) => (
            <li key={item.id}>
              <AiInferenceScenarioCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AiInferenceScenariosSection;
