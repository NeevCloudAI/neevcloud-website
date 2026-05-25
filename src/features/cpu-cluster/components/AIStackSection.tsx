import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { AI_STACK_SECTION_FEATURES } from "../data/ai-stack-section-data";

const AIStackSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black pb-8 md:pb-16 2xl:pb-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" align="center" className="max-w-2xl">
          Where CPU Fits in an
          <Text as="span" variant="h2" textColor="primary">
            AI Stack.
          </Text>
        </Text>

        <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-4 mt-4 md:mt-12.5">
          {AI_STACK_SECTION_FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              theme="dark"
              className={cn(
                "bg-gray-120 backdrop-blur-xs md:col-span-2",
                index === 3 && "md:col-start-2",
                index === 4 && "md:col-start-4"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AIStackSection;
