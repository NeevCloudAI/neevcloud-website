"use client";

import { useState } from "react";
import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
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
    <section className="bg-gray-10 relative py-8 md:py-16 2xl:py-25">
      <Container className="relative">
        <Text as="h2" weight="semibold" align="center">
          {THREE_STEPS_HEADING_BLACK}
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            {THREE_STEPS_HEADING_PRIMARY}
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5">
          {THREE_STEPS_SUBTEXT}
        </Text>

        <div className="relative mt-6 md:mt-12.5">
          <div className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-0">
            {STEPS.map((s, i) => (
              <div key={i} className="flex w-full items-center">
                <Button
                  size="full"
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
                {i < STEPS.length - 1 && (
                  <Divider
                    orientation="horizontal"
                    className="hidden shrink-0 bg-gray-400 w-5 md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 md:mt-12.5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <StepContent step={step} />
          <div>{STEP_PANELS[activeStep]}</div>
        </div>
      </Container>
    </section>
  );
}

export default ThreeStepsSection;
