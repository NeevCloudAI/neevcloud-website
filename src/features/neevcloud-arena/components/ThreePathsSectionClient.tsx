"use client";

import { useState } from "react";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { DEFAULT_ACTIVE_STEP_INDEX } from "../constants/three-paths-section.constants";
import { PATHS_STEPS } from "../data/three-paths-section.data";
import StepContent from "./three-paths/StepContent";
import { STEP_PANEL_COMPONENTS } from "./three-paths/step-panels";

const ThreePathsSectionClient = () => {
  const [activeStep, setActiveStep] = useState(DEFAULT_ACTIVE_STEP_INDEX);
  const step = PATHS_STEPS[activeStep];
  const ActivePanel = STEP_PANEL_COMPONENTS[activeStep];

  return (
    <>
      <div className="relative mt-6 md:mt-12.5">
        <div
          className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-0"
          role="tablist"
          aria-label="NeevCloud Arena paths"
        >
          {PATHS_STEPS.map((s, i) => (
            <div key={s.number} className="flex w-full items-center">
              <Button
                id={`arena-three-paths-tab-${i}`}
                role="tab"
                type="button"
                size="full"
                aria-selected={activeStep === i}
                aria-controls={`arena-three-paths-panel-${i}`}
                tabIndex={activeStep === i ? 0 : -1}
                variant={activeStep === i ? "default" : "gray"}
                className="w-full px-5 py-2.5 text-left"
                onClick={() => setActiveStep(i)}
              >
                <Text
                  as="h6"
                  textColor={activeStep === i ? "gray-10" : "gray-90"}
                  className="uppercase"
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
              {i < PATHS_STEPS.length - 1 && (
                <Divider
                  orientation="horizontal"
                  className="hidden w-5 shrink-0 bg-gray-400 md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 items-center gap-5 md:mt-12.5 md:grid-cols-2 md:gap-15 md:mx-10">
        <StepContent step={step} />
        <div
          id={`arena-three-paths-panel-${activeStep}`}
          role="tabpanel"
          aria-labelledby={`arena-three-paths-tab-${activeStep}`}
          className="w-full md:min-h-75"
        >
          <ActivePanel />
        </div>
      </div>
    </>
  );
};

export default ThreePathsSectionClient;
