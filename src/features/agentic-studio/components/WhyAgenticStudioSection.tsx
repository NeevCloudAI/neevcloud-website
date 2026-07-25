import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_STUDIO_WHY_ITEMS } from "../data/why-agentic-studio-section.data";

const WhyAgenticStudioSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="agentic-studio-why-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="agentic-studio-why-heading"
          textColor="black"
          align="center"
          className="max-w-3xl"
        >
          Purpose-Built for
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            AI Agents
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black/82"
          align="center"
          className="mt-2.5 max-w-2xl"
        >
          AI agents need secure, isolated environments to execute code.
          Managing infrastructure, securing untrusted code, and ensuring
          reproducibility creates significant operational overhead. Agentic
          Studio removes that burden.
        </Text>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {AGENTIC_STUDIO_WHY_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WhyAgenticStudioSection;
