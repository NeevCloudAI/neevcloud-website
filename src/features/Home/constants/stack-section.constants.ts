export type StackSectionListItem = {
  id: string;
  label: string;
  description: string;
};

export type StackSectionPanel = {
  id: string;
  title: string;
  description: string;
  items: StackSectionListItem[];
};

export const STACK_SECTION_PANELS_LEFT: StackSectionPanel[] = [
  {
    id: "ai-service",
    title: "AI Service",
    description:
      "Inference endpoints, fine-tuning workflows, and a unified workbench for prompt engineering.",
    items: [
      {
        id: "serverless-inference",
        label: "Serverless Inference",
        description:
          "Spin up inference endpoints on demand with low-latency routing and autoscaling.",
      },
      {
        id: "model-playground",
        label: "Model Playground",
        description:
          "Iterate on prompts and parameters in an interactive sandbox, then ship to production.",
      },
      {
        id: "model-apis",
        label: "Model APIs",
        description:
          "Production-ready, type-safe API endpoints for streaming, batching, and reliability.",
      },
    ],
  },
  {
    id: "infrastructure-services",
    title: "Infrastructure Services",
    description:
      "High-throughput, low-latency backbone engineered for AI and High Performance Computing (HPC) workloads.",
    items: [
      {
        id: "compute",
        label: "Compute",
        description:
          "GPU and CPU capacity that scales with jobs, quotas, and throughput requirements.",
      },
      {
        id: "storage",
        label: "Storage",
        description:
          "Fast, durable data volumes for datasets, checkpoints, and model artifacts.",
      },
      {
        id: "networking",
        label: "Networking",
        description:
          "Optimized fabric for low-latency transfers across nodes, clusters, and regions.",
      },
    ],
  },
];

export const STACK_SECTION_PANELS_RIGHT: StackSectionPanel[] = [
  {
    id: "platform-services",
    title: "Platform Services",
    description:
      "Instances are available as virtual machines (VMs) or bare metal nodes, with the option to orchestrate deployments using NeevCloud Kubernetes Service (NKS) or Slurm clusters.",
    items: [
      {
        id: "gpu-instance",
        label: "GPU Instance",
        description:
          "Dedicated GPU instances with configurable networking, security, and scaling policies.",
      },
      {
        id: "cpu-instances",
        label: "CPU Instances",
        description:
          "Elastic CPU capacity for preprocessing, orchestration, and high-throughput services.",
      },
      {
        id: "managed-kubernetes",
        label: "Managed Kubernetes (NKE)",
        description:
          "Run containerized workloads with managed control planes and production-grade operations.",
      },
    ],
  },
  {
    id: "infinite-infrastructure",
    title: "Infinite Infrastructure",
    description:
      "Our global footprint of advanced sovereign and sustainable data centers anchor the stack with future-proof and modular facilities.",
    items: [
      {
        id: "ai-factory",
        label: "AI Factory",
        description:
          "A standardized delivery path for AI infrastructure from provisioning to deployment.",
      },
      {
        id: "project-noun",
        label: "Project Noun",
        description:
          "A modular initiative for sovereignty-focused compute and workload portability.",
      },
      {
        id: "project-terra-vault",
        label: "Project Terra Vault",
        description:
          "Sustainable storage and data management for long-lived model and dataset lifecycles.",
      },
    ],
  },
];
