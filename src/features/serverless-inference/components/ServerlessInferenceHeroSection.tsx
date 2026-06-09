import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { SERVERLESS_INFERENCE_HERO } from "../constants/serverless-inference-page.constants";

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
      primaryCta={SERVERLESS_INFERENCE_HERO.primaryCta}
      secondaryCta={SERVERLESS_INFERENCE_HERO.secondaryCta}
      badgeText={SERVERLESS_INFERENCE_HERO.badgeText}
      image={SERVERLESS_INFERENCE_HERO.image}
    />
  );
};

export default ServerlessInferenceHeroSection;
