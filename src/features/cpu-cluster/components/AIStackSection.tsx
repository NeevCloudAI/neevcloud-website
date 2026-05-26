import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { AI_STACK_SECTION_FEATURES } from "../data/ai-stack-section.data";

const AIStackSection = () => {
  return (
    <section
      className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black pb-8 md:pb-16 2xl:pb-25"
      aria-labelledby="cpu-ai-stack-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="cpu-ai-stack-section-heading"
          textColor="white"
          align="center"
          className="max-w-2xl"
        >
          Where CPU Fits in an
          <Text as="span" variant="h2" textColor="primary">
            AI Stack.
          </Text>
        </Text>

        <ul className="w-full grid grid-cols-1 md:grid-cols-6 gap-4 mt-4 md:mt-12.5 list-none p-0 m-0">
          {AI_STACK_SECTION_FEATURES.map((feature, index) => (
            <li
              key={feature.title}
              className={cn(
                "md:col-span-2",
                index === 3 && "md:col-start-2",
                index === 4 && "md:col-start-4"
              )}
            >
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

export default AIStackSection;
