import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { MODEL_CATALOG_HERO } from "../constants/model-catalog-page.constants";

const ModelCatalogHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-4xl mt-4 md:mt-6">
          20+ production-Ready AI models.
          <Text variant="h1" as="span" textColor="primary">
            One platform.
          </Text>
        </Text>
      }
      {...MODEL_CATALOG_HERO}
    />
  );
};

export default ModelCatalogHeroSection;
