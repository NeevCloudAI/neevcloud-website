import type {
  Step,
  StepOneModel,
  StepThreeBilling,
} from "../types/three-steps-section.types";

export const STEPS: Step[] = [
  {
    number: "01",
    label: "STEP 01",
    badge: "DAY 1 - BROWSE",
    title: "Choose your model",
    description:
      "Browse 20+ open-source models. Filter by task, size, provider, or cost. Every model is production-ready and version-pinned.",
    checkItems: [
      { text: "20+ models, version-pinned", type: "check" },
      { text: "Filter by task, size, cost", type: "check" },
      { text: "~30 seconds to pick", type: "clock" },
    ],
  },
  {
    number: "02",
    label: "STEP 02",
    badge: "MINUTES LATER – INTEGRATE",
    title: "Make your first API call",
    description:
      "Drop your API key into any OpenAI-compatible client. Change one line ",
    descriptionHighlight: 'base_url="https://api.neevcloud.com/v1"',
    descriptionSuffix: " and your existing code works immediately.",
    checkItems: [
      { text: "OpenAI-compatible · zero rewrite", type: "check" },
      { text: "Python, JS, Go, curl, all work", type: "check" },
      { text: "First call in < 5 min", type: "clock" },
    ],
  },
  {
    number: "03",
    label: "STEP 03",
    badge: "END OF MONTH – PAY",
    title: "Pay only for what you use",
    description:
      "No reserved capacity. No minimum spend. Input and output tokens billed separately in INR. Volume discounts apply automatically above ",
    descriptionHighlight: "10M tokens / month.",
    checkItems: [
      { text: "Per-token billing in INR", type: "check" },
      { text: "Auto volume discounts above 10M", type: "check" },
      { text: "No reserved capacity, ever", type: "clock" },
    ],
  },
];

export const STEP_ONE_MODELS: StepOneModel[] = [
  {
    name: "Llama 3.3 70B",
    meta: "Meta · 70B · 131K context",
    price: "₹57.01 / 1M",
  },
  {
    name: "GLM-4.7",
    meta: "Zhipu AI · 4.7B · 200K context",
    price: "₹57.97 / 1M",
  },
  {
    name: "DeepSeek-V3.2",
    meta: "DeepSeek · 671B total · 128K context",
    price: "₹27.05 / 1M",
  },
  {
    name: "GPT OSS 20B",
    meta: "OpenAI · 20B · 131K context",
    price: "₹7.25 / 1M",
  },
];

export const STEP_ONE_FILTERS = ["All", "Chat", "Code", "Embedding", "Vision"];

export const STEP_TWO_TERMINAL_PATH =
  "console.ai.neevcloud.com/ai-inference/playground";

export const STEP_THREE_BILLING: StepThreeBilling = {
  title: "December usage · Llama 3.3 70B",
  subtitle: "Billing period · Dec 1 to Dec 31",
  rows: [
    {
      label: "Input tokens",
      sub: "14.2M @ ₹57.01 / 1M",
      value: "₹809.84",
      neg: false,
    },
    {
      label: "Output tokens",
      sub: "9.8M @ ₹76.33 / 1M",
      value: "₹748.03",
      neg: false,
    },
    {
      label: "Volume discount",
      sub: "auto-applied above 10M",
      value: "-₹350.32",
      neg: true,
    },
  ],
  total: "₹1,207.55",
  totalLabel: "DECEMBER TOTAL",
  totalSub: "~₹0.00005 per call · paid in INR · no surprises",
};
