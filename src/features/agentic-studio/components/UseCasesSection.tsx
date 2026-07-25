import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_STUDIO_USE_CASES_ITEMS } from "../data/use-cases-section.data";

const UseCasesSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="agentic-studio-use-cases-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="agentic-studio-use-cases-heading"
          textColor="white"
          align="center"
        >
          Where Teams Use
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Agentic Studio
          </Text>
        </Text>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {AGENTIC_STUDIO_USE_CASES_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default UseCasesSection;
