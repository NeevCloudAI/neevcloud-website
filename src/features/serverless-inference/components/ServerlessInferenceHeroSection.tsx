import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { SERVERLESS_INFERENCE_HERO } from "@/features/serverless-inference/constants/serverless-inference-page.constants";

const ServerlessInferenceHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" className="max-w-4xl text-center mt-4 md:mt-6">
          Run Any Model. Pay Per Token.
          <Text as="span" variant="h1" textColor="primary">
            No GPUs
          </Text>
          to Manage.
        </Text>
      }
      description={SERVERLESS_INFERENCE_HERO.description}
      button1Text={SERVERLESS_INFERENCE_HERO.button1Text}
      button2Text={SERVERLESS_INFERENCE_HERO.button2Text}
      badgeText={SERVERLESS_INFERENCE_HERO.badgeText}
      image={SERVERLESS_INFERENCE_HERO.image}
    />
  );
};

export default ServerlessInferenceHeroSection;
