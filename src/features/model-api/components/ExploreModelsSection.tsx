"use client";

import { useState } from "react";
import Container from "@/shared/components/container";
import FooterCard from "@/shared/components/footer-card";
import { EXPLORE_MODELS_API } from "@/features/model-api/data/explore-models-api";
import ExploreModelsStepPreview from "@/features/model-api/components/ExploreModelsStepPreview";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";

const STEP_TAB_IDS = EXPLORE_MODELS_API.map(
  (_, index) => `explore-models-tab-${index}`
);
const STEP_PANEL_IDS = EXPLORE_MODELS_API.map(
  (_, index) => `explore-models-panel-${index}`
);

const ExploreModelsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = EXPLORE_MODELS_API[activeStep];

  return (
    <section className="relative bg-white py-[3vh] md:py-[10vh]">

      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" weight={"semibold"} align="center">
          Start Making Predictions in
          <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
            Minutes
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black" className="mt-2">
          Integration follows a simple pattern: authenticate, send your data,
          receive predictions. Whether
        </Text>
        <Text as="h6" align="center" textColor="black" className="mt-2">
          you're building a prototype or production system, the process stays
          the same.
        </Text>

        <div
          className="my-4 flex z-2  flex-row flex-wrap items-center justify-center gap-0 md:my-8"
          role="tablist"
          aria-label="Model playground setup steps"
        >
          {EXPLORE_MODELS_API.map((_, index) => (
            <div key={STEP_TAB_IDS[index]} className="flex items-center">
              <Button
                variant="ghost"
                role="tab"
                id={STEP_TAB_IDS[index]}
                aria-selected={activeStep === index}
                aria-controls={STEP_PANEL_IDS[index]}
                tabIndex={0}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  activeStep === index
                    ? "bg-primary text-white"
                    : "bg-gray-60 text-black hover:bg-gray-65 hover:text-white",
                )}
              >
                {index + 1}
              </Button>
              {index < EXPLORE_MODELS_API.length - 1 ? (
                <Divider
                  orientation="horizontal"
                  className="mx-2 w-8 md:w-10"
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-lg mb-8 px-4 md:px-16">
          <div className="flex flex-col md:flex-row">
            <div
              role="tabpanel"
              id={STEP_PANEL_IDS[activeStep]}
              aria-labelledby={STEP_TAB_IDS[activeStep]}
              className="w-full bg-gray-10 p-4 md:rounded-l-lg md:p-8"
            >
              <Text
                as="small"
                className="inline-block rounded-full bg-primary px-3 py-1 text-white"
              >
                • &nbsp; Step {activeStep + 1} - {current.badgeLabel}
              </Text>
              <Text as="h2" weight="semibold" className="mb-2 mt-4 md:mt-8">
                {current.title}
              </Text>
              <Text as="h6">{current.description}</Text>
            </div>
            <ExploreModelsStepPreview stepIndex={activeStep} />
          </div>
        </div>

        <FooterCard
          title1="Documentation and"
          title2="Resources"
          description1="Detailed reference documentation for every endpoint, including request"
          description2="parameters, response formats, error codes, and usage examples."
          button1Text="View Full Model API Docs"
        />
      </Container>
    </section>
  );
};

export default ExploreModelsSection;
