import Container from "@/shared/components/container";
import { CategoryFeatureCard } from "@/shared/components/category-feature-card";
import { Text } from "@/shared/ui-lib";
import { AVAILABLE_MODEL_CATEGORIES } from "../data/available-models-section.data";

const AvailableModelsSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="available-models-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="available-models-section-heading"
          align="center"
          className="max-w-4xl"
        >
          Available Models
          <Text as="span" variant="h2" textColor="primary">
            Across Categories
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5" className="max-w-3xl">
          Access a curated collection of state-of-the-art models spanning
          language understanding, computer vision, audio processing, and
          specialized domains. Each model includes interactive demos and clear
          documentation.
        </Text>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 md:pt-12.5 list-none p-0 m-0 w-full">
          {AVAILABLE_MODEL_CATEGORIES.map(({ category, hover }) => (
            <li key={category.title}>
              <CategoryFeatureCard category={category} hover={hover} hasHover />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AvailableModelsSection;
