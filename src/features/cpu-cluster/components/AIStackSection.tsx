import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { AI_STACK_SECTION_FEATURES } from "../data/ai-stack-section-data";

const AIStackSection = () => {
  return (
    <section className="pointer-events-none relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black pb-[3vh] md:pb-[7vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" weight={"semibold"} lineHeight="xl">
          Where CPU Fits in
        </Text>
        <Text as="h2" weight={"semibold"} textColor="white">
          an
          <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
            AI Stack.
          </Text>
        </Text>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8">
          {AI_STACK_SECTION_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              theme="dark"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AIStackSection;
