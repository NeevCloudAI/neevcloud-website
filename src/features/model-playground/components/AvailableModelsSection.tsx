import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  AVAILABLE_MODEL_CATEGORIES,
  type AvailableModelCategory,
} from "@/features/model-playground/data/available-models";

const AvailableModelsSection = () => {
  return (
    <section className="relative bg-white py-[3vh] md:py-[10vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" weight="semibold" align="center" className="max-w-4xl">
          Available Models
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Across Categories
          </Text>
        </Text>
        <Text align="center" textColor="black" className="mt-2 max-w-2xl">
          Access a curated collection of state-of-the-art models spanning
          language understanding, computer vision, audio processing, and
          specialized domains. Each model includes interactive demos and clear
          documentation.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 md:pt-8">
          {AVAILABLE_MODEL_CATEGORIES.map((category) => (
            <ModelCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

type ModelCategoryCardProps = {
  category: AvailableModelCategory;
};

const ModelCategoryCard = ({ category }: ModelCategoryCardProps) => {
  const Icon = category.icon;

  return (
    <article className="w-full bg-gray-10 p-4 md:p-8 rounded-md flex flex-col gap-2">
      <div className="p-3 bg-white w-fit rounded-md">
        <Icon size={30} className="shrink-0 text-primary pr-1" />
      </div>
      <Text as="h5">{category.badgeLabel}</Text>
      <Text as="h3" weight="semibold">
        {category.title}
      </Text>
      <Text as="h6">{category.description}</Text>
      <ul className="flex list-none flex-col gap-1.5 mt-2 md:mt-4">
        {category.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-2 rounded-md bg-white px-4 py-2"
          >
            <Text as="h6" textColor="primary" className="shrink-0">
              •
            </Text>
            <Text as="h6" textColor="gray-90">
              {feature}
            </Text>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default AvailableModelsSection;
