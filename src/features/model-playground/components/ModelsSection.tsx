"use client";

import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { useState } from "react";
import { STEPS } from "../data/mode-steps";
import StepContent from "./Stepcontent";
import { STEP_PANELS } from "./Steppanels";

const ModelsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const step = STEPS[activeStep];

  return (
    <section className="bg-gray-10 relative py-[3vh] md:py-[7vh]">
      <Container className="relative flex flex-col items-center justify-center">
        <Text as="h2" weight="semibold" align="center" className="max-w-4xl">
          See Models in Action,
          <Text
            as="span"
            variant="h2"
            weight="semibold"
            align="center"
            textColor="primary"
          >
            Not Just in Theory
          </Text>
        </Text>
        <Text align="center" textColor="black-5" className="max-w-2xl">
          Understanding what a model can do is easier when you can actually use
          it. Our Model Playground gives you hands-on access to test prompts,
          upload images, analyze text, and explore capabilities before writing a
          single line of code.
        </Text>

        <div className="w-full relative mt-6 md:mt-10">
          <div className="relative z-10 grid grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={i} className="flex items-center">
                <Button
                  size="full"
                  variant={activeStep === i ? "default" : "white"}
                  className="text-left"
                  onClick={() => setActiveStep(i)}
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
                </Button>
                {i < STEPS.length - 1 && (
                  <Divider
                    orientation="horizontal"
                    className="bg-gray-400 w-4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <StepContent step={step} />
          <div>{STEP_PANELS[activeStep]}</div>
        </div>
      </Container>
    </section>
  );
};

export default ModelsSection;
