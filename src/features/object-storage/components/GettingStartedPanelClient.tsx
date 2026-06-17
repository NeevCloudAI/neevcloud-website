"use client";

import { useCallback, useState } from "react";
import { Divider } from "@/shared/ui-lib";
import { GETTING_STARTED_STEPS } from "../data/getting-started-section.data";
import GettingStartedFooterNav from "./getting-started/GettingStartedFooterNav";
import GettingStartedStepPanel from "./getting-started/GettingStartedStepPanel";
import GettingStartedStepsSidebar from "./getting-started/GettingStartedStepsSidebar";
import GettingStartedTerminalHeader from "./getting-started/GettingStartedTerminalHeader";

const GettingStartedPanelClient = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTabByStep, setActiveTabByStep] = useState<
    Record<number, string>
  >(() =>
    Object.fromEntries(
      GETTING_STARTED_STEPS.map((step, index) => [
        index,
        step.tabs[0]?.id ?? "",
      ]),
    ),
  );

  const handleStepSelect = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  const handleTabSelect = useCallback(
    (tabId: string) => {
      setActiveTabByStep((current) => ({
        ...current,
        [activeStep]: tabId,
      }));
    },
    [activeStep],
  );

  const handlePrevious = useCallback(() => {
    setActiveStep((current) => Math.max(current - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setActiveStep((current) =>
      Math.min(current + 1, GETTING_STARTED_STEPS.length - 1),
    );
  }, []);

  const handleStartOver = useCallback(() => {
    setActiveStep(0);
  }, []);

  const currentStep = GETTING_STARTED_STEPS[activeStep];

  if (!currentStep) {
    return null;
  }

  const activeTabId =
    activeTabByStep[activeStep] ?? currentStep.tabs[0]?.id ?? "";
  const nextStep = GETTING_STARTED_STEPS[activeStep + 1];

  return (
    <>
      <GettingStartedTerminalHeader />

      <div className="flex w-full flex-col gap-4 p-4 md:flex-row md:p-5">
        <GettingStartedStepsSidebar
          steps={GETTING_STARTED_STEPS}
          activeStep={activeStep}
          onStepSelect={handleStepSelect}
        />

        <Divider
          orientation="vertical"
          className="hidden bg-white/12 md:block mx-5"
        />

        <Divider
          orientation="horizontal"
          className="bg-white/12 md:hidden mx-4"
        />

        <div className="flex min-w-0 flex-1 flex-col md:h-110 overflow-auto classy">
          <GettingStartedStepPanel
            step={currentStep}
            stepIndex={activeStep}
            totalSteps={GETTING_STARTED_STEPS.length}
            activeTabId={activeTabId}
            onTabSelect={handleTabSelect}
          />

          <GettingStartedFooterNav
            stepIndex={activeStep}
            totalSteps={GETTING_STARTED_STEPS.length}
            previousLabel="previous"
            nextLabel={
              activeStep === GETTING_STARTED_STEPS.length - 1
                ? "start over"
                : (nextStep?.nextLabel ?? "next")
            }
            onPrevious={handlePrevious}
            onNext={handleNext}
            onStartOver={handleStartOver}
          />
        </div>
      </div>
    </>
  );
};

export default GettingStartedPanelClient;
