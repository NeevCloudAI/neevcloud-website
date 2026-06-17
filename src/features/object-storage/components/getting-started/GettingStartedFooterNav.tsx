import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Button, Text } from "@/shared/ui-lib";
import type { GettingStartedFooterNavProps } from "../../types/getting-started-section.types";

const GettingStartedFooterNav = ({
  stepIndex,
  totalSteps,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  onStartOver,
}: GettingStartedFooterNavProps) => {
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === totalSteps - 1;

  return (
    <div className="mt-5 flex items-center justify-between gap-4 md:gap-5 pt-4 md:mt-7.5">
      <Button
        type="button"
        variant="ghost"
        size="none"
        spacing="none"
        onClick={onPrevious}
        disabled={isFirstStep}
        className="font-mono text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Text
          as="span"
          fontFamily="spaceMono"
          textColor={isFirstStep ? "gray-04" : "white"}
          className="flex items-center gap-2.5"
        >
          <ArrowLeft size={14} className="text-white" aria-hidden="true" />
          {` ${previousLabel}`}
        </Text>
      </Button>

      <Text as="h6" fontFamily="spaceMono" textColor="gray-01">
        {stepIndex + 1}
        <Text
          as="span"
          variant="h6"
          textColor="gray-04"
          className="mx-0 md:mx-0"
        >
          {`/${totalSteps}`}
        </Text>
      </Text>

      {isLastStep ? (
        <Button
          type="button"
          variant="ghost"
          size="none"
          spacing="none"
          onClick={onStartOver}
          className="flex items-center gap-2.5"
        >
          <Text
            as="h6"
            fontFamily="spaceMono"
            textColor="primary"
            className="underline"
          >
            {nextLabel}
          </Text>
          <RotateCcw size={14} className="text-primary" aria-hidden="true" />
        </Button>
      ) : (
        <Button
          type="button"
          variant="ghost"
          size="none"
          spacing="none"
          onClick={onNext}
        >
          <Text
            as="h6"
            fontFamily="spaceMono"
            textColor="white"
            className="flex items-center gap-2.5 underline"
          >
            {`${nextLabel} `}
            <ArrowRight size={14} className="text-white" aria-hidden="true" />
          </Text>
        </Button>
      )}
    </div>
  );
};

export default GettingStartedFooterNav;
