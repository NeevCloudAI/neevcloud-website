import type { ReactNode } from "react";

export type GettingStartedStepId =
  | "create-bucket"
  | "upload-data"
  | "access-from-gpu"
  | "lifecycle-policies";

export type GettingStartedTab = {
  id: string;
  label: string;
  codeHeader: string;
};

export type GettingStartedStep = {
  id: GettingStartedStepId;
  number: string;
  sidebarLabel: string;
  title: string;
  description: string;
  tabs: readonly GettingStartedTab[];
  nextLabel: string;
  successMessage?: string;
};

export type GettingStartedStepsSidebarProps = {
  steps: readonly GettingStartedStep[];
  activeStep: number;
  onStepSelect: (index: number) => void;
};

export type GettingStartedStepPanelProps = {
  step: GettingStartedStep;
  stepIndex: number;
  totalSteps: number;
  activeTabId: string;
  onTabSelect: (tabId: string) => void;
};

export type GettingStartedFooterNavProps = {
  stepIndex: number;
  totalSteps: number;
  previousLabel: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
  onStartOver: () => void;
};

export type GettingStartedStepCodeProps = {
  stepId: GettingStartedStepId;
  tabId: string;
};

export type GettingStartedCodeBlockProps = {
  header: string;
  children: ReactNode;
  copyText: string;
};
