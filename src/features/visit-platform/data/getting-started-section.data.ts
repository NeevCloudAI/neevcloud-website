import type { GettingStartedStep } from "../types/getting-started-section.types";

export const GETTING_STARTED_STEPS: GettingStartedStep[] = [
  {
    id: "create-account",
    number: 1,
    title: "Create account",
    description: "Visit ",
    link: {
      text: "https://console.ai.neevcloud.com",
      href: "https://console.ai.neevcloud.com",
    },
    descriptionSuffix:
      " and create your account or sign in with existing credentials.",
  },
  {
    id: "onboard",
    number: 2,
    title: "Onboard in 2 minutes",
    description:
      "Complete the guided workspace setup, region, team, defaults. Takes about 2 minutes.",
  },
  {
    id: "deploy",
    number: 3,
    title: "Deploy your first resource",
    description:
      "Pick a GPU type and template. Your instance is ready in 2–5 minutes.",
    code: "$ neev gpu create",
  },
  {
    id: "build",
    number: 4,
    title: "Build, train, deploy",
    description:
      "Train models, expose endpoints, monitor costs, all from one console.",
    code: "$ neev infer deploy",
  },
];
