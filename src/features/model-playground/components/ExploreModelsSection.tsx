"use client";

import { useState } from "react";
import Container from "@/shared/components/container";
import FooterCard from "@/shared/components/footer-card";
import { EXPLORE_MODELS_STEPS } from "@/features/model-playground/data/explore-models-steps";
import ExploreModelsStepPreview from "@/features/model-playground/components/ExploreModelsStepPreview";
import { Divider, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";

const STEP_TAB_IDS = EXPLORE_MODELS_STEPS.map(
  (_, index) => `explore-models-tab-${index}`
);
const STEP_PANEL_IDS = EXPLORE_MODELS_STEPS.map(
  (_, index) => `explore-models-panel-${index}`
);

const ExploreModelsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = EXPLORE_MODELS_STEPS[activeStep];

  return (
    <section className="relative bg-gray-10 py-[3vh] md:py-[10vh]">
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-radial-[at_50%_0%] from-teal-300/30 via-transparent to-transparent blur-xs"
        aria-hidden="true"
      />

      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" weight={"semibold"} align="center">
          Start Exploring
          <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
            Models Now
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black" className="mt-2">
          Getting started is simple, five steps from first browse to production
          deployment.
        </Text>

        <div
          className="my-4 flex z-2 flex-row flex-wrap items-center justify-center gap-0 md:my-8"
          role="tablist"
          aria-label="Model playground setup steps"
        >
          {EXPLORE_MODELS_STEPS.map((_, index) => (
            <div key={STEP_TAB_IDS[index]} className="flex items-center">
              <button
                type="button"
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
                    : "bg-gray-60 text-black hover:bg-gray-65 hover:text-white"
                )}
              >
                {index + 1}
              </button>
              {index < EXPLORE_MODELS_STEPS.length - 1 ? (
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
              className="w-full bg-white p-4 md:rounded-l-lg md:p-8"
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
              <ul className="mt-4 flex list-none flex-col gap-4 md:mt-8">
                {current.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 rounded-md bg-gray-20 px-4 py-2"
                  >
                    <Text as="h6" textColor="primary" className="shrink-0">
                      •
                    </Text>
                    <Text as="h6" textColor="gray-90">
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
            <ExploreModelsStepPreview stepIndex={activeStep} />
          </div>
        </div>

        <FooterCard
          title1="Model"
          title2="Documentation"
          description1="Each model includes detailed documentation explaining architecture,"
          description2="training data, intended use cases, and known limitations."
          button1Text="Browse Model Playground Docs"
        />
      </Container>
    </section>
  );
};

export default ExploreModelsSection;
