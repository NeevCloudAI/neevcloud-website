import FooterCard from "@/shared/components/footer-card";
import StepsTabsSection from "@/shared/components/StepsTabsSection";
import { EXPLORE_API_STEPS } from "@/features/model-api/data/explore-api-steps";
import ExploreApiStepPreview from "@/features/model-api/components/ExploreApiStepPreview";
import { Text } from "@/shared/ui-lib";

const EXPLORE_API_PREVIEWS = EXPLORE_API_STEPS.map((_, index) => (
  <ExploreApiStepPreview key={index} stepIndex={index} />
));

const ExploreApiSection = () => {
  return (
    <StepsTabsSection
      ariaLabel="Model API setup steps"
      tabIdPrefix="explore-api"
      steps={EXPLORE_API_STEPS}
      previews={EXPLORE_API_PREVIEWS}
      heading={
        <Text as="h2" weight="semibold" align="center">
          Start Exploring
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Models Now
          </Text>
        </Text>
      }
      description={
        <Text as="h6" align="center" textColor="black" className="mt-2">
          Getting started is simple, five steps from first browse to production
          deployment.
        </Text>
      }
    >
      <FooterCard
        title="Model Documentation"
        description="Each model includes detailed documentation explaining architecture, training data, intended use cases, and known limitations."
        button1Text="Browse Model Playground Docs"
      />
    </StepsTabsSection>
  );
};

export default ExploreApiSection;
