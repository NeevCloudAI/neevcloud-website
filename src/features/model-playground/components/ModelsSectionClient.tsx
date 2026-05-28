"use client";

import { useState } from "react";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { DEFAULT_MODELS_SECTION_STEP_INDEX } from "../constants/models-section.constants";
import { MODELS_SECTION_STEPS } from "../data/models-section.data";
import { MODELS_SECTION_STEP_PANELS } from "./models-in-action/models-section-step-panels";
import ModelsSectionStepContent from "./models-in-action/ModelsSectionStepContent";

const ModelsSectionClient = () => {
  const [activeStep, setActiveStep] = useState(
    DEFAULT_MODELS_SECTION_STEP_INDEX
  );
  const step = MODELS_SECTION_STEPS[activeStep];
  const ActivePanel = MODELS_SECTION_STEP_PANELS[activeStep];

  return (
    <>
      <div className="w-full relative mt-6 md:mt-10">
        <div
          className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-0"
          role="tablist"
          aria-label="Model playground capabilities"
        >
          {MODELS_SECTION_STEPS.map((s, i) => (
            <div key={s.number} className="flex w-full items-center">
              <Button
                id={`models-in-action-tab-${i}`}
                role="tab"
                type="button"
                size="full"
                aria-selected={activeStep === i}
                aria-controls={`models-in-action-panel-${i}`}
                tabIndex={activeStep === i ? 0 : -1}
                variant={activeStep === i ? "default" : "white"}
                className="w-full text-left px-5 py-2.5"
                onClick={() => setActiveStep(i)}
              >
                <Text
                  as="h6"
                  textColor={activeStep === i ? "gray-10" : "gray-90"}
                >
                  {s.label}
                </Text>
                <Text
                  as="h3"
                  weight="semibold"
                  textColor={activeStep === i ? "white" : "black"}
                >
                  {s.title}
                </Text>
              </Button>
              {i < MODELS_SECTION_STEPS.length - 1 && (
                <Divider
                  orientation="horizontal"
                  className="hidden shrink-0 bg-blue-40 w-5 md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <ModelsSectionStepContent step={step} />
        <div
          id={`models-in-action-panel-${activeStep}`}
          role="tabpanel"
          aria-labelledby={`models-in-action-tab-${activeStep}`}
        >
          <ActivePanel />
        </div>
      </div>
    </>
  );
};

export default ModelsSectionClient;
