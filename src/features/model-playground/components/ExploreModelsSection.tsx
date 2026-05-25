import StepsTabsSection from "@/shared/components/StepsTabsSection";
import { EXPLORE_MODELS_STEPS } from "@/features/model-playground/data/explore-models-steps";
import ExploreModelsStepPreview from "@/features/model-playground/components/ExploreModelsStepPreview";
import { Text } from "@/shared/ui-lib";
import FooterCard from "@/shared/components/footer-card";

const EXPLORE_MODELS_PREVIEWS = EXPLORE_MODELS_STEPS.map((_, index) => (
  <ExploreModelsStepPreview key={index} stepIndex={index} />
));

const ExploreModelsSection = () => {
  return (
    <StepsTabsSection
      ariaLabel="Model playground setup steps"
      tabIdPrefix="explore-models"
      steps={EXPLORE_MODELS_STEPS}
      previews={EXPLORE_MODELS_PREVIEWS}
      heading={
        <Text as="h2" align="center">
          Start Exploring
          <Text as="span" variant="h2" textColor="primary">
            Models Now
          </Text>
        </Text>
      }
      description={
        <Text as="h6" align="center" textColor="black-5">
          Getting started is simple, five steps from first browse to production
          deployment.
        </Text>
      }
    >
      <div className="w-full pt-4 md:pt-12.5">
        <FooterCard
          title="Model Documentation"
          description="Each model includes detailed documentation explaining architecture, training data, intended use cases, and known limitations."
          button1Text="Browse Model Playground Docs"
        />
      </div>
    </StepsTabsSection>
  );
};

export default ExploreModelsSection;
