export const THREE_STEPS_HEADING_BLACK = "Three steps to";
export const THREE_STEPS_HEADING_PRIMARY = "Production";
export const THREE_STEPS_SUBTEXT =
  "Swipe through the journey from first browse to first bill.";

export type CheckItem = {
  text: string;
  type: "check" | "clock";
};

export type Step = {
  number: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  descriptionHighlight?: string;
  descriptionSuffix?: string;
  checkItems: CheckItem[];
};

export const STEPS: Step[] = [
  {
    number: "01",
    label: "STEP 01",
    badge: "DAY 1 – BROWSE",
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

export const STEP_ONE_MODELS = [
  {
    name: "Llama 3.1 70B Instruct",
    meta: "Meta · 128k context",
    price: "₹15.20 / 1M",
  },
  {
    name: "Qwen 2.5 72B",
    meta: "Alibaba · 72B · 32k context",
    price: "₹14.10 / 1M",
  },
  {
    name: "Mistral Large 2",
    meta: "Mistral · 123B · 128k context",
    price: "₹21.40 / 1M",
  },
  {
    name: "DeepSeek Coder V2",
    meta: "DeepSeek · 16B · code-tuned",
    price: "₹10.80 / 1M",
  },
];

export const STEP_ONE_FILTERS = ["All", "Chat", "Code", "Embedding", "Vision"];

export const STEP_TWO_TERMINAL_PATH =
  "console.ai.neevcloud.com/ai-inference/playground";

export const STEP_TWO_CODE_LINES = [
  { type: "comment", text: "# Two-line integration" },
  {
    type: "keyword",
    text: "from",
    rest: " NeevCloud ",
    keyword2: "import",
    rest2: " NeevCloud",
  },
  {
    type: "var",
    text: "client",
    rest: " = ",
    highlight: "NeevCloud",
    rest2: '( api_key="sk-neev-...",',
  },
  { type: "plain", text: '  base_url="https://api.neevcloud.com/v1" )' },
  {
    type: "var",
    text: "response",
    rest: " = client.chat.completions.",
    highlight: "create",
    rest2: "(",
  },
  { type: "plain", text: '  model="meta-llama-3.1-70b-instruct",' },
  { type: "plain", text: '  messages=[{ "role": "user", "content": "Explain' },
  { type: "plain", text: '  serverless inference." }] )' },
  { type: "fn", text: "print", rest: "(response.choices[0].message.content)" },
  {
    type: "comment",
    text: "# ✓ 200 OK · 412ms · 30 tokens # Your existing OpenAI",
  },
  { type: "comment", text: "# code just works." },
];

export const STEP_THREE_BILLING = {
  title: "December usage · Llama 3.1 70B",
  subtitle: "Billing period · Dec 1 to Dec 31",
  rows: [
    {
      label: "Input tokens",
      sub: "14.2M @ ₹15.20 / 1M",
      value: "₹2,158.40",
      neg: false,
    },
    {
      label: "Output tokens",
      sub: "9.8M @ ₹45.60 / 1M",
      value: "₹4,468.80",
      neg: false,
    },
    {
      label: "Volume discount",
      sub: "auto-applied above 10M",
      value: "-₹1,490.16",
      neg: true,
    },
  ],
  total: "₹5,137.04",
  totalLabel: "December Total",
  totalSub: "~₹0.0002 per call · paid in INR · no surprises",
};
