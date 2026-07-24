import type { StackAccordionItem } from "../types/stack-accordion.types";

export const STACK_SECTION = {
  title: "One Vertical Stack. Silicon to endpoint.",
  subtitle:
    "Deploy AI on infrastructure designed for scale, resilience, and speed.",
} as const;

// Tier content sourced from the existing NeevCloud homepage stack data.
export const STACK_ACCORDION_ITEMS: StackAccordionItem[] = [
  {
    id: "ai-service",
    label: "AI Service",
    heading:
      "AI Service: Inference Endpoints, Fine-Tuning, And A Unified Prompt Engineering Workbench.",
    features: [
      {
        icon: "inference",
        text: "Serverless Inference. Spin up inference endpoints on demand with low-latency routing and autoscaling.",
      },
      {
        icon: "playground",
        text: "Model Playground. Iterate on prompts and parameters in an interactive sandbox, then ship to production.",
      },
      {
        icon: "api",
        text: "Model APIs. Production-ready, type-safe API endpoints for streaming, batching, and reliability.",
      },
    ],
  },
  {
    id: "platform-services",
    label: "Platform Services",
    heading:
      "Platform Services: VMs, Bare Metal, And Managed Kubernetes Or Slurm Orchestration.",
    features: [
      {
        icon: "gpu",
        text: "GPU Instance. Dedicated GPU instances with configurable networking, security, and scaling policies.",
      },
      {
        icon: "cpu",
        text: "CPU Instances. Elastic CPU capacity for preprocessing, orchestration, and high-throughput services.",
      },
      {
        icon: "kubernetes",
        text: "Managed Kubernetes (NKS). Run containerized workloads with managed control planes and production-grade operations.",
      },
    ],
  },
  {
    id: "infrastructure-services",
    label: "Infrastructure Services",
    heading:
      "Infrastructure Services: High-Throughput, Low-Latency Backbone For AI And HPC Workloads.",
    features: [
      {
        icon: "compute",
        text: "Compute. GPU and CPU capacity that scales with jobs, quotas, and throughput requirements.",
      },
      {
        icon: "storage",
        text: "Storage. Fast, durable data volumes for datasets, checkpoints, and model artifacts.",
      },
      {
        icon: "networking",
        text: "Networking. Optimized fabric for low-latency transfers across nodes, clusters, and regions.",
      },
    ],
  },
  {
    id: "infinite-infrastructure",
    label: "Infinite Infrastructure",
    heading:
      "Infinite Infrastructure: Sovereign, Sustainable, Modular Data Centers.",
    features: [
      {
        icon: "factory",
        text: "AI Factory. A standardized delivery path for AI infrastructure from provisioning to deployment.",
      },
      {
        icon: "sovereign",
        text: "Project Noun. A modular initiative for sovereignty-focused compute and workload portability.",
      },
      {
        icon: "vault",
        text: "Project Terra Vault. Sustainable storage and data management for long-lived model and dataset lifecycles.",
      },
    ],
  },
];
