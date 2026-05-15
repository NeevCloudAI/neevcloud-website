import Container from "@/shared/components/container";
import ModelInfoCard from "@/shared/components/ModelInfoCard";
import { Text } from "@/shared/ui-lib";
import { MODEL_INFORMATION } from "@/features/model-catalog/data/model-information-data";

const ModelInformationSection = () => {
  return (
    <section className="relative bg-white py-[3vh] md:py-[10vh]">
      <Container className="flex flex-col gap-6 md:gap-10">
        <Text as="h2" weight="semibold" align="center">
          Detailed Model Information
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODEL_INFORMATION.map((model) => (
            <ModelInfoCard key={model.id} model={model} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ModelInformationSection;
