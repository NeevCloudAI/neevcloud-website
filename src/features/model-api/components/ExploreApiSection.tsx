import FooterCard from "@/shared/components/footer-card";
import { EXPLORE_API_STEPS } from "@/features/model-api/data/explore-api-steps";
import ExploreApiStepPreview from "@/features/model-api/components/ExploreApiStepPreview";
import { Text } from "@/shared/ui-lib";
import ExploreTabsSection from "./ExploreTabsSection";

const EXPLORE_API_PREVIEWS = EXPLORE_API_STEPS.map((_, index) => (
  <ExploreApiStepPreview key={index} stepIndex={index} />
));

const ExploreApiSection = () => {
  return (
    <ExploreTabsSection
      ariaLabel="Model API setup steps"
      tabIdPrefix="explore-api"
      steps={EXPLORE_API_STEPS}
      previews={EXPLORE_API_PREVIEWS}
      heading={
        <Text as="h2" align="center">
          Start Making Predictions in Minutes
          <Text as="span" variant="h2" textColor="primary">
            Minutes
          </Text>
        </Text>
      }
      description={
        <Text as="h6" align="center" textColor="black-5" className="max-w-3xl">
          {`Integration follows a simple pattern: authenticate, send your data,
          receive predictions. Whether you're building a prototype or production
          system, the process stays the same.`}
        </Text>
      }
    >
      <div className="w-full pt-4 md:pt-12.5">
        <FooterCard
          title="Documentation and Resources"
          description="Detailed reference documentation for every endpoint, including request parameters, response formats, error codes, and usage examples."
          button1Text="View Full Model API Docs"
        />
      </div>
    </ExploreTabsSection>
  );
};

export default ExploreApiSection;
