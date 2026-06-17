import { Divider, Text } from "@/shared/ui-lib";
import type { GettingStartedStepPanelProps } from "../../types/getting-started-section.types";
import { getGettingStartedCopyText } from "../../utils/getting-started-copy-text";
import GettingStartedCodeBlock from "./GettingStartedCodeBlock";
import GettingStartedLanguageTabs from "./GettingStartedLanguageTabs";
import GettingStartedStepCode from "./GettingStartedStepCode";
import GettingStartedSuccessBanner from "./GettingStartedSuccessBanner";
import { ArrowRight } from "lucide-react";

const GettingStartedStepPanel = ({
  step,
  stepIndex,
  totalSteps,
  activeTabId,
  onTabSelect,
}: GettingStartedStepPanelProps) => {
  const activeTab =
    step.tabs.find((tab) => tab.id === activeTabId) ?? step.tabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <div
      id={`object-storage-getting-started-panel-${stepIndex}`}
      role="tabpanel"
      aria-labelledby={`object-storage-getting-started-tab-${stepIndex}`}
    >
      <Text
        as="h6"
        fontFamily="spaceMono"
        textColor="primary"
        className="flex items-center gap-2"
      >
        <ArrowRight size={16} className="text-primary" aria-hidden="true" />
        {`step ${stepIndex + 1} of ${totalSteps}`}
      </Text>

      <Text
        as="h6"
        fontFamily="spaceMono"
        textColor="white"
        className="md:mt-1.25"
      >
        {step.title}
      </Text>

      <Text
        as="h6"
        fontFamily="spaceMono"
        textColor="gray-03"
        className="mt-1.25 "
      >
        {step.description}
      </Text>

      <GettingStartedLanguageTabs
        step={step}
        activeTabId={activeTab.id}
        onTabSelect={onTabSelect}
      />

      <Divider orientation="horizontal" className="bg-white/12 mt-2.5 mb-5" />

      <GettingStartedCodeBlock
        header={activeTab.codeHeader}
        copyText={getGettingStartedCopyText(step.id, activeTab.id)}
      >
        <GettingStartedStepCode stepId={step.id} tabId={activeTab.id} />
      </GettingStartedCodeBlock>

      {step.successMessage ? <GettingStartedSuccessBanner /> : null}
    </div>
  );
};

export default GettingStartedStepPanel;
