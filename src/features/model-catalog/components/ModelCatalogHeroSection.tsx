import HeroSection from "@/shared/components/HeroSection";
import { MODEL_CATALOG_HERO } from "@/features/model-catalog/constants/model-catalog-page.constants";
import { Text } from "@/shared/ui-lib";

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
      description={MODEL_CATALOG_HERO.description}
      button1Text={MODEL_CATALOG_HERO.button1Text}
      button2Text={MODEL_CATALOG_HERO.button2Text}
      badgeText={MODEL_CATALOG_HERO.badgeText}
      image={MODEL_CATALOG_HERO.image}
      trustBadges={[...MODEL_CATALOG_HERO.trustBadges]}
    />
  );
};

export default ModelCatalogHeroSection;
