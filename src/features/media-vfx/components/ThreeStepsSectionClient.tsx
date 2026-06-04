"use client";

import { useState } from "react";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { DEFAULT_ACTIVE_STEP_INDEX } from "../constants/four-steps-section.constants";
import { STEPS } from "../data/four-steps-section.data";
import { STEP_PANEL_COMPONENTS } from "./three-steps/step-panels";
import StepContent from "./three-steps/StepContent";

const ThreeStepsSectionClient = () => {
  const [activeStep, setActiveStep] = useState(DEFAULT_ACTIVE_STEP_INDEX);
  const step = STEPS[activeStep];
  const ActivePanel = STEP_PANEL_COMPONENTS[activeStep];

  return (
    <>
      <div className="relative mt-6 md:mt-12.5">
        <div
          className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-0"
          role="tablist"
          aria-label="Serverless inference steps"
        >
          {STEPS.map((s, i) => (
            <div key={s.number} className="flex w-full items-center">
              <Button
                id={`three-steps-tab-${i}`}
                role="tab"
                type="button"
                size="full"
                aria-selected={activeStep === i}
                aria-controls={`three-steps-panel-${i}`}
                tabIndex={activeStep === i ? 0 : -1}
                variant={activeStep === i ? "default" : "gray"}
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
              {i < STEPS.length - 1 && (
                <Divider
                  orientation="horizontal"
                  className="hidden shrink-0 bg-gray-400 w-5 md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 md:mt-12.5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <StepContent step={step} />
        <div
          id={`three-steps-panel-${activeStep}`}
          role="tabpanel"
          aria-labelledby={`three-steps-tab-${activeStep}`}
        >
          <ActivePanel />
        </div>
      </div>
    </>
  );
};

export default ThreeStepsSectionClient;
