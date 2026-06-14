import Container from "@/shared/components/container";
import { CategoryFeatureCard } from "@/shared/components/category-feature-card";
import { Text } from "@/shared/ui-lib";
import { ML_WORKFLOW_CATEGORIES } from "../data/ml-workflows-section.data";

const MlWorkflowsSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="object-storage-ml-workflows-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="object-storage-ml-workflows-section-heading"
          align="center"
          className="max-w-4xl"
        >
          Built for
          <Text as="span" variant="h2" textColor="primary">
            ML Workflows
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black/82" className="max-w-3xl">
          Versioning, replication, fine-grained access control, and intelligent
          performance optimization, designed from the ground up for production
          ML pipelines.
        </Text>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 md:pt-12.5 list-none p-0 m-0 w-full">
          {ML_WORKFLOW_CATEGORIES.map(({ category, hover }) => (
            <li key={category.title}>
              <CategoryFeatureCard category={category} hover={hover} hasHover />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default MlWorkflowsSection;
