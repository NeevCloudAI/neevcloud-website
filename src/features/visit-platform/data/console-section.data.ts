import type {
  ConsoleTab,
  StatCard,
  GpuStep,
  InferenceModel,
  VolumeRow,
  BillingRow,
} from "../types/console-section.types";

export const CONSOLE_SECTION = {
  titlePrefix: "See the",
  titleHighlight: "NeevCloud Console",
  titleSuffix: "in Action",
  description:
    "Complete control over your AI infrastructure, from GPU provisioning to inference deployment. Five interactive surfaces in one console.",
} as const;

export const CONSOLE_TABS: ConsoleTab[] = [
  { id: "dashboard-overview", label: "Dashboard Overview" },
  { id: "gpu-deployment", label: "GPU Deployment" },
  { id: "inference-management", label: "Inference Management" },
  { id: "fleet-management", label: "Fleet Management" },
  { id: "state-persistence", label: "State Persistence" },
];

// Tab 1 - Dashboard Overview
export const DASHBOARD_STATS: StatCard[] = [
  { label: "GPU UTIL", value: "87%", change: "+12%" },
  { label: "REQUESTS", value: "14.2K", change: "+4%" },
  { label: "SPEND", value: "₹4.2K", change: "today" },
];

export const DASHBOARD_TAGS = ["alerts", "spending", "performance", "support"];

export const DASHBOARD_CONTENT = {
  number: "01",
  heading: "Monitor Everything in Real Time",
  description:
    "Track GPU utilization, inference requests, storage usage, and costs from a single dashboard. See resource consumption and spending as it happens, no SSH, no jumping between portals.",
  bullets: [
    { label: "VIEW", text: "Live GPU utilization · per-instance" },
    { label: "TRACK", text: "Data residency guarantees" },
    { label: "MATCH", text: "Indian jurisdiction compliance" },
  ],
};

// Tab 2 - GPU Deployment
export const GPU_STEPS: GpuStep[] = [
  { number: undefined, label: "Select GPU", status: "done" },
  { number: undefined, label: "Choose template", status: "done" },
  { number: 3, label: "Configure", status: "processing" },
  { number: 4, label: "Deploy", status: "pending" },
];

export const GPU_TERMINAL_CMD =
  "$ neev gpu create --type h100 --template pytorch";

export const GPU_DEPLOYMENT_CONTENT = {
  number: "02",
  heading: "Launch Instances in Clicks",
  description:
    "Select GPU type, choose an AI template, configure resources, and deploy. Your instance is ready in 2–5 minutes, with PyTorch, CUDA, drivers, and your model pre-installed.",
  bullets: [
    { label: "PICK", text: "H100 · A100 · L40S configurations" },
    { label: "TEMPLATE", text: "PyTorch · TF · vLLM · SD pre-baked" },
    { label: "DEPLOY", text: "Ready in 2–5 minutes · SSH ready" },
  ],
};

// Tab 3 - Inference Management
export const INFERENCE_MODELS: InferenceModel[] = [
  {
    name: "Llama 3.3 70B",
    provider: "Meta",
    context: "70B · 131k context",
    price: "₹57.01 / 1M",
  },
  {
    name: "GLM-4.7",
    provider: "Zhipu AI",
    context: "4.7B · 200k context",
    price: "₹57.97 / 1M",
  },
  {
    name: "DeepSeek-V3.2",
    provider: "DeepSeek",
    context: "671B total · 128k context",
    price: "₹27.05 / 1M",
  },
  {
    name: "GPT OSS 20B",
    provider: "OpenAI",
    context: "20B · 131k context",
    price: "₹7.25 / 1M",
  },
];

export const INFERENCE_TAGS = ["All", "Chat", "Code", "Embedding", "Vision"];

export const INFERENCE_MANAGEMENT_CONTENT = {
  number: "03",
  heading: "Deploy and Scale Models",
  description:
    "Upload models, create endpoints, configure auto-scaling. Monitor p50/p99 latency and request volumes in real time. OpenAI-compatible endpoints work with any client.",
  bullets: [
    { label: "UPLOAD", text: "GGUF · HF · safetensors · ONNX" },
    { label: "EXPOSE", text: "OpenAI-compatible REST endpoint" },
    { label: "SCALE", text: "Auto-scale 0 → N · zero-idle billing" },
  ],
};

// Tab 4 - Fleet Management
export const FLEET_VOLUMES: VolumeRow[] = [
  {
    name: "dataset-train-v3",
    type: "NVMe",
    attached: "attached: 8× H100",
    size: "1.2 TB",
  },
  {
    name: "model-checkpoints",
    type: "Network",
    attached: "attached: 3 instances",
    size: "680 GB",
  },
  {
    name: "raw-imagery",
    type: "Network",
    attached: "attached: shared",
    size: "420 GB",
  },
  {
    name: "snapshots",
    type: "Archive",
    attached: "attached: ----",
    size: "100 GB",
  },
];

export const FLEET_MANAGEMENT_CONTENT = {
  number: "04",
  heading: "Manage Datasets and Models",
  description:
    "Create volumes, attach to any instance, manage snapshots. NVMe + S3-compatible network storage that follows your workload, no re-uploading datasets between sessions.",
  bullets: [
    { label: "CREATE", text: "NVMe · network volumes · snapshots" },
    { label: "ATTACH", text: "Any compute instance · live mount" },
    { label: "SHARE", text: "ReadWriteMany · multi-instance access" },
  ],
};

// Tab 5 - State Persistence
export const BILLING_ROWS: BillingRow[] = [
  { label: "GPU Compute", value: "₹84,210" },
  { label: "Inference", value: "₹18,420" },
  { label: "Storage", value: "₹6,840" },
  { label: "CPU Compute", value: "₹3,120" },
];

export const BILLING_TOTAL = "₹1,12,590";
export const BILLING_SUBTITLE = "paid in INR · no surprises";

export const STATE_PERSISTENCE_CONTENT = {
  number: "05",
  heading: "Transparent Usage Monitoring",
  description:
    "View costs by service, track spending trends, set budget alerts. No surprises, see exactly what you're paying for. Per-second billing for compute, per-token for inference.",
  bullets: [
    { label: "VIEW", text: "Spend by service · GPU/inference/storage" },
    { label: "TREND", text: "Daily / weekly / monthly breakdown" },
    { label: "ALERT", text: "Budget thresholds · slack + email" },
  ],
};
