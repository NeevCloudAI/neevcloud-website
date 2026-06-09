import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type {
  PathsStep,
  PathsStepPanel,
} from "../types/three-paths-section.types";

export const PATHS_STEPS: PathsStep[] = [
  {
    number: "01",
    label: "TRY AI",
    title: "Interactive Model Playground",
    heading: "Test AI models without writing code",
    description:
      "Test state-of-the-art AI models without writing code or setting up infrastructure. Compare outputs, adjust parameters, and understand capabilities using your own prompts and data.",
    learnText:
      "Which models fit your use case and performance requirements, with real results, not synthetic benchmarks.",
    primaryCtaLabel: "Launch Playground",
    primaryCtaRoute: EXTERNAL_LINKS.aiInferencePlayground,
    primaryCtaTarget: "_blank",
  },
  {
    number: "02",
    label: "BUILD AI",
    title: "Guided Workload Experience",
    heading: "Run real workloads on production GPUs",
    description:
      "Run real training and inference workloads on production GPU infrastructure with step-by-step guidance. See exactly what production deployment looks like — costs, latency, and utilization all visible in real time.",
    learnText:
      "How your workloads perform on NeevCloud infrastructure and what production deployment looks like at scale.",
    primaryCtaLabel: "Start Building",
    primaryCtaRoute: EXTERNAL_LINKS.aiSupercloudConsole,
    primaryCtaTarget: "_blank",
  },
  {
    number: "03",
    label: "SEE AI",
    title: "Real-World Use Cases",
    heading: "Explore production AI applications",
    description:
      "Explore how teams across industries use NeevCloud infrastructure for production AI applications. See patterns, architectures, and infrastructure choices that work at scale, not hypotheticals.",
    learnText:
      "Patterns, architectures, and infrastructure choices for production AI systems across real industries.",
    primaryCtaLabel: "Explore Use Cases",
    primaryCtaRoute: EXTERNAL_LINKS.tutorials,
    primaryCtaTarget: "_blank",
  },
];

export const PATHS_STEP_PANELS: PathsStepPanel[] = [
  {
    listHeading: "WHAT YOU CAN DO",
    items: [
      {
        type: "simple",
        text: "Compare language models, Llama 3.1 8B, 70B, 405B",
      },
      { type: "simple", text: "Test vision models on your own images" },
      { type: "simple", text: "Try audio processing and generation" },
      { type: "simple", text: "Adjust parameters and see results instantly" },
      { type: "simple", text: "No account required to start" },
    ],
    highlightHeading: "INSTANT ACCESS",
    highlightText:
      "Open a browser, choose a model, and begin. No downloads, no configuration, no waiting for approvals.",
  },
  {
    listHeading: "WHAT YOU CAN DO",
    items: [
      { type: "simple", text: "Fine-tune a 7B parameter model" },
      { type: "simple", text: "Train a computer vision classifier" },
      { type: "simple", text: "Run distributed training across multiple GPUs" },
      { type: "simple", text: "Deploy a model to production API" },
      { type: "simple", text: "Test auto-scaling under load" },
    ],
    highlightHeading: "WHAT YOU SEE LIVE",
    highlightText:
      "Real-time GPU utilization · Performance metrics and bottlenecks · Infrastructure behavior under load",
  },
  {
    listHeading: "INDUSTRY EXAMPLES",
    items: [
      {
        type: "industry",
        industry: "Healthcare",
        detail:
          "Medical imaging with distributed GPU training for diagnostic models",
      },
      {
        type: "industry",
        industry: "Finance",
        detail: "Real-time fraud detection with low-latency inference at scale",
      },
      {
        type: "industry",
        industry: "Research",
        detail: "Foundation model training on multi-node clusters",
      },
      {
        type: "industry",
        industry: "E-commerce",
        detail: "Recommendation systems with auto-scaling inference",
      },
      {
        type: "industry",
        industry: "Manufacturing",
        detail: "Computer vision quality inspection at factory edge",
      },
      {
        type: "industry",
        industry: "Media",
        detail: "Content generation and processing at scale",
      },
    ],
  },
];
