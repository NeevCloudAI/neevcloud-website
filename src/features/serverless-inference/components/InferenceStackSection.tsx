import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { INFERENCE_STACK_SECTION_FEATURES } from "../data/inference-stack-section.data";
import { Text } from "@/shared/ui-lib";

const InferenceStackSection = () => {
  return (
    <section
      className="relative bg-black pb-[3vh] md:pb-[7vh]"
      aria-labelledby="inference-stack-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="inference-stack-section-heading"
          textColor="white"
          align="center"
        >
          Real Applications,
          <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
            Production Ready
          </Text>
        </Text>

        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-8 list-none p-0 m-0">
          {INFERENCE_STACK_SECTION_FEATURES.map((feature) => (
            <li key={feature.title}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                theme="dark"
                className="bg-gray-120"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default InferenceStackSection;
