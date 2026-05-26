import StepOnePanel from "@/features/serverless-inference/components/three-steps/StepOnePanel";
import StepThreePanel from "@/features/serverless-inference/components/three-steps/StepThreePanel";
import StepTwoPanel from "@/features/serverless-inference/components/three-steps/StepTwoPanel";

export const STEP_PANEL_COMPONENTS = [
  StepOnePanel,
  StepTwoPanel,
  StepThreePanel,
] as const;
