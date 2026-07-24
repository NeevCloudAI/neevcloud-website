import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { SERVERLESS_INFERENCE_HERO } from "../constants/serverless-inference-page.constants";

const ServerlessInferenceHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            className="max-w-5xl text-center mt-4 md:mt-6"
            textColor={"white"}
          >
            Run Any Model. Pay Per Token.
          </Text>
          <Text as="h1" className="max-w-5xl text-center" textColor={"primary"}>
            No GPUs
            <Text as="span" variant="h1" textColor="white">
              to Manage.
            </Text>
          </Text>
        </>
      }
      {...SERVERLESS_INFERENCE_HERO}
    />
  );
};

export default ServerlessInferenceHeroSection;
