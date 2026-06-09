import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { DocumentationCategory } from "../types/documentation-section.types";

const DOCS_BASE = EXTERNAL_LINKS.documentation;

export const DEVELOPERS_DOCUMENTATION_SECTION = {
  titlePrefix: "Full Documentation. Always",
  titleHighlight: "Up to Date.",
  description:
    "Everything you need to build on NeevCloud, from your first API call to production-scale GPU clusters.",
  searchPlaceholder: "Search documentation pages...",
  noMatchesLabel: "No Matches Found",
  browseCta: "Browse Full Documentation",
  browseCtaRoute: EXTERNAL_LINKS.documentation,
  browseCtaTarget: "_blank",
} as const;

export const DEVELOPERS_DOCUMENTATION_CATEGORIES: readonly DocumentationCategory[] =
  [
    {
      id: "getting-started",
      title: "Getting Started",
      iconSrc: "/icons/rocket.svg",
      tags: [
        { id: "getting-started", label: "Getting Started", href: DOCS_BASE },
        { id: "account-setup", label: "Account Setup", href: DOCS_BASE },
        { id: "api-key-creation", label: "API Key Creation", href: DOCS_BASE },
        {
          id: "first-inference-call",
          label: "First Inference Call",
          href: DOCS_BASE,
        },
        {
          id: "first-gpu-instance",
          label: "First GPU Instance",
          href: DOCS_BASE,
        },
      ],
    },
    {
      id: "inference-api",
      title: "Inference API",
      iconSrc: "/icons/inference-api.svg",
      tags: [
        { id: "authentication", label: "Authentication", href: DOCS_BASE },
        { id: "chat-completions", label: "Chat Completions", href: DOCS_BASE },
        { id: "embeddings", label: "Embeddings", href: DOCS_BASE },
        {
          id: "image-generation",
          label: "Image Generation",
          href: DOCS_BASE,
        },
        { id: "streaming", label: "Streaming", href: DOCS_BASE },
        { id: "rate-limits", label: "Rate Limits", href: DOCS_BASE },
        { id: "error-codes", label: "Error Codes", href: DOCS_BASE },
        {
          id: "openai-compatibility",
          label: "OpenAI Compatibility",
          href: DOCS_BASE,
        },
      ],
    },
    {
      id: "compute",
      title: "Compute",
      iconSrc: "/icons/gpu-compute.svg",
      tags: [
        {
          id: "gpu-instance-guide",
          label: "GPU Instance Guide",
          href: DOCS_BASE,
        },
        {
          id: "cpu-instance-guide",
          label: "CPU Instance Guide",
          href: DOCS_BASE,
        },
        { id: "ssh-access", label: "SSH Access", href: DOCS_BASE },
        { id: "pre-built-images", label: "Pre-Built Images", href: DOCS_BASE },
        { id: "snapshots", label: "Snapshots", href: DOCS_BASE },
        { id: "networking", label: "Networking", href: DOCS_BASE },
      ],
    },
    {
      id: "orchestration",
      title: "Orchestration",
      iconSrc: "/icons/orchastrate.svg",
      tags: [
        { id: "nks-overview", label: "NKS Overview", href: DOCS_BASE },
        { id: "cluster-setup", label: "Cluster Setup", href: DOCS_BASE },
        { id: "node-pools", label: "Node Pools", href: DOCS_BASE },
        { id: "autoscaling", label: "Autoscaling", href: DOCS_BASE },
        { id: "helm-charts", label: "Helm Charts", href: DOCS_BASE },
        { id: "job-scheduler", label: "Job Scheduler", href: DOCS_BASE },
        { id: "spot-handling", label: "Spot Handling", href: DOCS_BASE },
        {
          id: "distributed-training",
          label: "Distributed Training",
          href: DOCS_BASE,
        },
      ],
    },
    {
      id: "storage",
      title: "Storage",
      iconSrc: "/icons/database.svg",
      tags: [
        {
          id: "persistent-storage",
          label: "Persistent storage",
          href: DOCS_BASE,
        },
        {
          id: "ephemeral-storage",
          label: "Ephemeral Storage",
          href: DOCS_BASE,
        },
        {
          id: "mounting-gpu-instances",
          label: "Mounting to GPU Instances",
          href: DOCS_BASE,
        },
        {
          id: "data-pipeline-patterns",
          label: "Data Pipeline Patterns",
          href: DOCS_BASE,
        },
      ],
    },
    {
      id: "ai-services",
      title: "AI Services",
      iconSrc: "/icons/brain.svg",
      tags: [
        {
          id: "serverless-inference-apis",
          label: "Serverless Inference APIs",
          href: DOCS_BASE,
        },
        { id: "embeddings-api", label: "Embeddings API", href: DOCS_BASE },
        { id: "model-playground", label: "Model Playground", href: DOCS_BASE },
      ],
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      iconSrc: "/icons/shield.svg",
      tags: [
        {
          id: "api-key-management",
          label: "API Key Management",
          href: DOCS_BASE,
        },
        { id: "vpc-isolation", label: "VPC Isolation", href: DOCS_BASE },
        { id: "rbac", label: "RBAC", href: DOCS_BASE },
        {
          id: "dpdp-act-compliance",
          label: "DPDP Act Compliance",
          href: DOCS_BASE,
        },
        { id: "audit-logging", label: "Audit Logging", href: DOCS_BASE },
      ],
    },
  ] as const;
