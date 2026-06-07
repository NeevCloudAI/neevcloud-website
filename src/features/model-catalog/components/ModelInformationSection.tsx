import Container from "@/shared/components/container";
import ModelInfoCard from "@/shared/components/ModelInfoCard";
import { MODEL_INFORMATION } from "../data/model-information-section.data";
import { Text } from "@/shared/ui-lib";

const ModelInformationSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="model-catalog-information-section-heading"
    >
      <Container className="flex flex-col">
        <Text
          as="h2"
          id="model-catalog-information-section-heading"
          align="center"
        >
          Detailed Model Information
        </Text>
        <ul className="model-info-masonry mt-4 md:mt-12.5 list-none p-0 m-0">
          {MODEL_INFORMATION.map((model) => (
            <li key={model.id} className="model-info-masonry__item">
              <ModelInfoCard model={model} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ModelInformationSection;
