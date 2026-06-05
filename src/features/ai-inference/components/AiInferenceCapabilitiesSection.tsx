import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AI_INFERENCE_CAPABILITIES_ITEMS } from "../data/capabilities-section.data";

const AiInferenceCapabilitiesSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-25"
      aria-labelledby="ai-inference-capabilities-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="ai-inference-capabilities-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          From Model to
          <Text as="span" variant="h2" textColor="primary">
            Production API
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-4xl"
        >
          Going from a fine-tuned model to a production API shouldn&apos;t
          require a dedicated infrastructure team. NeevCloud AI Inference
          provides managed endpoints for your custom or open-source models, with
          OpenAI-compatible schemas, optimized GPU serving, and compliant
          India-based hosting.
        </Text>
        <ul className="m-0 grid w-full list-none grid-cols-1 gap-5 p-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {AI_INFERENCE_CAPABILITIES_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AiInferenceCapabilitiesSection;
