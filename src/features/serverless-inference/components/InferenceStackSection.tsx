import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { INFERENCE_STACK_SECTION_FEATURES } from "../data/inference-stack-data";
import { FeatureCard } from "@/shared/components/feature-card";

const InferenceStackSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black pb-[3vh] md:pb-[7vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          textColor="white"
          weight={"semibold"}
          lineHeight="xl"
          className="hidde<DeployInstanceSectionn md:block"
        >
          Real Applications,
          <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
            Production Ready
          </Text>
        </Text>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8">
          {INFERENCE_STACK_SECTION_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              theme="dark"
              className="bg-gray-120 backdrop-blur-xs"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InferenceStackSection;
