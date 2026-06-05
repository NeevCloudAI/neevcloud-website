import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const GENERATIVE_AI_INFRASTRUCTURE_ITEMS: readonly AmbitionDetailItem[] =
  [
    {
      id: "one-click-deployment",
      label: "01",
      iconSrc: "/icons/protected.svg",
      iconAlt: "One-click deployment",
      title: "One-Click Deployment",
      description:
        "Image, text, and multimodal models via pre-built AI Templates. Launch production-ready endpoints in minutes.",
      bullets: [
        { id: 1, title: "Text generation (vLLM, TGI)" },
        { id: 2, title: "Image generation (Stable Diffusion, FLUX)" },
        { id: 3, title: "Multimodal models (vision-language)" },
        { id: 4, title: "Custom model deployments" },
      ],
    },
    {
      id: "rag-ready",
      label: "02 · FLEXIBILITY",
      iconSrc: "/icons/bank.svg",
      iconAlt: "RAG-ready architecture",
      title: "RAG-Ready Architecture",
      description:
        "Persistent storage plus GPU compute for embedding and retrieval. Build knowledge-grounded applications.",
      bullets: [
        { id: 1, title: "Vector database compatible" },
        { id: 2, title: "Embedding model endpoints" },
        { id: 3, title: "Document processing pipelines" },
        { id: 4, title: "Zero egress between components" },
      ],
    },
    {
      id: "elastic-scaling",
      label: "03",
      iconSrc: "/icons/file.svg",
      iconAlt: "Elastic scaling",
      title: "Elastic Scaling",
      description:
        "Add GPU instances as traffic grows, no re-architecture needed. Scale from prototype to production seamlessly.",
      bullets: [
        { id: 1, title: "Manual scaling (add/remove instances)" },
        { id: 2, title: "Auto-scaling based on load" },
        { id: 3, title: "Load balancing included" },
        { id: 4, title: "Per-second billing" },
      ],
    },
  ] as const;
