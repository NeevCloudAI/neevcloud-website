import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { OBJECT_STORAGE_HERO } from "../constants/object-storage-page.constants";

const ObjectStorageHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text
          as="h1"
          align="center"
          textColor="black"
          className="max-w-4xl mt-4 md:mt-6"
        >
          Object Storage That Speaks
          <Text variant="h1" as="span" textColor="primary">
            S3
          </Text>
        </Text>
      }
      {...OBJECT_STORAGE_HERO}
    />
  );
};

export default ObjectStorageHeroSection;
