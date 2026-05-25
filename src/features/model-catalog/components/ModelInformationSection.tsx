import Container from "@/shared/components/container";
import ModelInfoCard from "@/shared/components/ModelInfoCard";
import { Text } from "@/shared/ui-lib";
import { MODEL_INFORMATION } from "@/features/model-catalog/data/model-information-data";

const ModelInformationSection = () => {
  return (
    <section className="relative bg-white py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col">
        <Text as="h2" align="center">
          Detailed Model Information
        </Text>
        <div className="model-info-masonry mt-4 md:mt-12.5">
          {MODEL_INFORMATION.map((model) => (
            <div key={model.id} className="model-info-masonry__item">
              <ModelInfoCard model={model} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ModelInformationSection;
