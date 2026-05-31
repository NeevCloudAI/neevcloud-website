import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const AGENTIC_WORKFLOW_INFRASTRUCTURE_ITEMS: readonly AmbitionDetailItem[] =
  [
    {
      id: "container-native",
      label: "01",
      iconSrc: "/icons/shield.svg",
      iconAlt: "Container-native deployment",
      title: "Container-Native",
      description:
        "Deploy agent components as isolated pods on GPU clusters. Package orchestrators, tools, and models in containers.",
      bullets: [
        { id: 1, title: "Isolated agent environments" },
        { id: 2, title: "Version control per agent" },
        { id: 3, title: "Reproducible deployments" },
        { id: 4, title: "Standard Docker workflows" },
      ],
    },
    {
      id: "api-accessible-inference",
      label: "02 · FLEXIBILITY",
      iconSrc: "/icons/bank.svg",
      iconAlt: "API-accessible inference",
      title: "API-Accessible Inference",
      description:
        "Call hosted models as tools within your agent loop. Low-latency endpoints for reasoning, tool use, and decision-making.",
      bullets: [
        { id: 1, title: "OpenAI-compatible APIs" },
        { id: 2, title: "Function calling support" },
        { id: 3, title: "Streaming responses" },
        { id: 4, title: "Multiple models per agent" },
      ],
    },
    {
      id: "kubernetes-backed",
      label: "03",
      iconSrc: "/icons/file.svg",
      iconAlt: "Kubernetes-backed orchestration",
      title: "Kubernetes-Backed",
      description:
        "Scalable orchestration for agent fleet management. Deploy and manage hundreds of agents with standard K8s tools.",
      bullets: [
        { id: 1, title: "Managed Kubernetes (NKS)" },
        { id: 2, title: "Auto-scaling agent pods" },
        { id: 3, title: "Service discovery" },
        { id: 4, title: "Rolling updates" },
      ],
    },
  ] as const;
