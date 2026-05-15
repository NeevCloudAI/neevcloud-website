"use client";

import { useState } from "react";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  THREE_STEPS_HEADING_BLACK,
  THREE_STEPS_HEADING_PRIMARY,
  THREE_STEPS_SUBTEXT,
  STEPS,
} from "../data/three-steps-data";
import StepContent from "./Stepcontent";
import { STEP_PANELS } from "./Steppanels";

function ThreeStepsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = STEPS[activeStep];

  return (
    <div className="bg-gray-10 relative overflow-hidden">
      {/* Teal gradient top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-15 bg-teal-300/60 blur-3xl rounded-full pointer-events-none" />

      <Container className="py-[3vh] md:py-[7vh] relative">
        {/* Heading */}
        <Text as="h2" weight="semibold" align="center">
          {THREE_STEPS_HEADING_BLACK}
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            {THREE_STEPS_HEADING_PRIMARY}
          </Text>
        </Text>
        <Text as="h6" align="center" className="mt-2">
          {THREE_STEPS_SUBTEXT}
        </Text>

        {/* Step Tabs with horizontal connector line */}
        <div className="relative mt-6 md:mt-10">
          {/* Connector line sitting behind cards */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-400 -translate-y-1/2 z-0" />

          <div className="relative z-10 grid grid-cols-3 gap-3">
            {STEPS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`text-left px-4 py-3 rounded-md border-[1.5px] transition-colors cursor-pointer ${
                  activeStep === i
                    ? "bg-primary border-primary"
                    : "bg-white border-gray-200"
                }`}
              >
                <Text textColor={activeStep === i ? "gray-10" : "gray-90"}>
                  {s.label}
                </Text>
                <Text
                  as="h3"
                  weight="semibold"
                  textColor={activeStep === i ? "white" : "black"}
                >
                  {s.title}
                </Text>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <StepContent step={step} />
          <div>{STEP_PANELS[activeStep]}</div>
        </div>
      </Container>
    </div>
  );
}

export default ThreeStepsSection;
