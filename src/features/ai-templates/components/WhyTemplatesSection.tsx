import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { AI_TEMPLATES_WHY_ITEMS } from "../data/why-templates-section.data";

const WhyTemplatesSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="ai-templates-why-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="ai-templates-why-heading"
          textColor="black"
          align="center"
          className="max-w-3xl"
        >
          End the
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Dependency Hell
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black/82"
          align="center"
          className="mt-2.5 max-w-2xl"
        >
          Setting up CUDA, cuDNN, and framework versions wastes hours and
          breaks with subtle dependency mismatches. Our templates give you
          battle-tested, GPU-optimized environments — ready in seconds.
        </Text>

        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {AI_TEMPLATES_WHY_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WhyTemplatesSection;
