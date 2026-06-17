import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const DEVELOPERS_START_BUILDING_SECTION = {
  title: "Start Building",
  description:
    "Pick your path. Every route leads to production-grade GPU infrastructure on Indian soil.",
} as const;

export const DEVELOPERS_START_BUILDING_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "run-inference-apis",
    label: "5 MIN QUICKSTART",
    iconSrc: "/icons/inference-api.svg",
    iconAlt: "Run Inference APIs",
    size: "small",
    title: "Run Inference APIs",
    description: "Deploy models · call endpoints · stream responses",
    bullets: [
      { id: 1, title: "QuickStart" },
      { id: 2, title: "API Reference" },
      { id: 3, title: "Python SDK" },
      { id: 4, title: "OpenAI Compatibility" },
    ],
    exploreCta: "Explore Inference Docs",
    exploreCtaRoute: EXTERNAL_LINKS.inferenceDocs,
    exploreCtaTarget: "_blank",
    code: [
      "# Install and call in 3 lines",
      "pip install neevcloud",
      'client = NeevCloud(api_key="nc-...")',
      "resp = client.chat.completions.create(...)",
    ],
  },
  {
    id: "deploy-gpu-compute",
    label: "2 MIN TO SSH",
    iconSrc: "/icons/gpu-compute.svg",
    iconAlt: "Deploy GPU Compute",
    size: "small",
    title: "Deploy GPU Compute",
    description: "H100, A100, RTX · SSH in 2 min · pre-loaded environments",
    bullets: [
      { id: 1, title: "Instance Setup" },
      { id: 2, title: "SSH Access" },
      { id: 3, title: "Pre-built Environments" },
      { id: 4, title: "CLI Tools" },
    ],
    exploreCta: "Explore Compute Docs",
    exploreCtaRoute: EXTERNAL_LINKS.gpuDocs,
    exploreCtaTarget: "_blank",
    code: [
      "# Launch an H100 and SSH in",
      "neevcloud launch --gpu h100 --image pytorch-2.1",
      "ssh ubuntu@<instance-ip>",
    ],
  },
  {
    id: "train-and-orchestrate",
    label: "SCALE TO 64 GPUS",
    iconSrc: "/icons/orchastrate.svg",
    iconAlt: "Train and Orchestrate",
    size: "small",
    title: "Train and Orchestrate",
    description: "Kubernetes · MLflow · distributed training · spot savings",
    bullets: [
      { id: 1, title: "Managed Kubernetes (NKS)" },
      { id: 2, title: "Job Scheduling" },
      { id: 3, title: "MLflow" },
      { id: 4, title: "Spot Optimization" },
    ],
    exploreCta: "Explore Orchestration Docs",
    exploreCtaRoute: EXTERNAL_LINKS.documentation,
    exploreCtaTarget: "_blank",
    code: [
      "# Submit a distributed training job",
      "neevcloud job submit train.yaml",
      "# nodes: 4, gpus: 32, spot: true",
    ],
  },
] as const;
