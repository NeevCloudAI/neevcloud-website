export type OffersDeploymentItem = {
  id: number;
  stepNumber: string;
  stepLabel: string;
  title: string;
  description: string;
  listItems?: readonly string[];
  codeSnippet?: {
    code: string;
    textColor: string;
  }[];
};

export const OFFERS_DEPLOYMENT_SECTION_ITEMS: OffersDeploymentItem[] = [
  {
    id: 1,
    stepNumber: "01",
    stepLabel: "STEP 01",
    title: "Create Account",
    description:
      "Register at signup.neevcloud.com and complete KYC verification to get started.",
    codeSnippet: [
      {
        code: "signup.neevcloud.com",
        textColor: "black",
      },
    ],
  },
  {
    id: 2,
    stepNumber: "02",
    stepLabel: "STEP 02",
    title: "Claim Your Credit",
    description: "Your ₹15,000 free credit is applied automatically.",
    listItems: [
      "Verify email and phone",
      "Complete KYC",
      "Add a payment method",
      "Credit applied automatically",
      "Use across GPU and CPU",
      "Valid for 30 days",
    ],
  },
  {
    id: 3,
    stepNumber: "03",
    stepLabel: "STEP 03",
    title: "Deploy and Build",
    description: "Launch your first instance and start building right away.",
    codeSnippet: [
      {
        code: "# launch your first instance",
        textColor: "black",
      },
      {
        code: "$ ssh -i your-key.pem ubuntu@<ip>",
        textColor: "primary",
      },
    ],
  },
] as const;
