import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { AI_TEMPLATES_KEY_BENEFITS_ITEMS } from "../data/key-benefits-section.data";

const KeyBenefitsSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="ai-templates-key-benefits-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="ai-templates-key-benefits-heading"
          textColor="black"
          align="center"
        >
          Key
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Benefits
          </Text>
        </Text>

        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {AI_TEMPLATES_KEY_BENEFITS_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default KeyBenefitsSection;
