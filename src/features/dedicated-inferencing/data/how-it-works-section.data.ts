export type DedicatedInferencingStep = { number: number; label: string };

export const DEDICATED_INFERENCING_STEPS: readonly DedicatedInferencingStep[] =
  [
    { number: 1, label: "Choose a model" },
    { number: 2, label: "Pick GPU config" },
    { number: 3, label: "Click Deploy" },
    { number: 4, label: "Wait for Running" },
    { number: 5, label: "Start inferencing" },
  ] as const;
