import ExploreApiStepPreview from "./explore-api/ExploreApiStepPreview";
import ExploreApiStepsTabsClient from "./explore-api/ExploreApiStepsTabsClient";
import { EXPLORE_API_STEPS } from "../data/explore-api-section.data";
import FooterCard from "@/shared/components/footer-card";
import { Text } from "@/shared/ui-lib";

const EXPLORE_API_PREVIEWS = EXPLORE_API_STEPS.map((_, index) => (
  <ExploreApiStepPreview key={index} stepIndex={index} />
));

const ExploreApiSection = () => {
  return (
    <ExploreApiStepsTabsClient
      ariaLabel="Model API setup steps"
      tabIdPrefix="explore-api"
      steps={EXPLORE_API_STEPS}
      previews={EXPLORE_API_PREVIEWS}
      heading={
        <Text as="h2" align="center" id="explore-api-section-heading">
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
    </ExploreApiStepsTabsClient>
  );
};

export default ExploreApiSection;
