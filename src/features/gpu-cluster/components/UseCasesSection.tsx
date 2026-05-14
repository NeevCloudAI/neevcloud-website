"use client";

import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import Image from "next/image";
import { useMemo, useState } from "react";

type TagVariant = "primary" | "muted";

type UseCaseSummaryBlock = {
  label: string;
  title: string;
  subtitle?: string;
};

type UseCaseDefinition = {
  id: string;
  tabName: string;
  logoAlt: string;
  heading: string;
  description: string;
  tags: Array<{ text: string; variant: TagVariant }>;
  summary: [UseCaseSummaryBlock, UseCaseSummaryBlock, UseCaseSummaryBlock];
};

const USE_CASES: UseCaseDefinition[] = [
  {
    id: "01",
    tabName: "LLM Training",
    logoAlt: "LLM training on Neevcloud GPU clusters",
    heading: "LLM Training",
    description:
      "Train models from scratch on H100 or H200 clusters. Full InfiniBand bandwidth between nodes. PyTorch 2.8 + CUDA 12.9 pre-installed.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "H200", variant: "primary" },
      { text: "PyTorch 2.8", variant: "muted" },
      { text: "CUDA 12.9", variant: "muted" },
      { text: "InfiniBand", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Foundation Models",
        subtitle: "7B → 70B+ parameters",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "8x H100/H200",
        subtitle: "Multi-node InfiniBand",
      },
      {
        label: "STARTING AT",
        title: "₹179.10/hr",
        subtitle: "per GPU, on-demand",
      },
    ],
  },
  {
    id: "02",
    tabName: "Fine-Tuning",
    logoAlt: "Fine-tuning workloads on Neevcloud",
    heading: "Fine-tuning",
    description:
      "Run LoRA, QLoRA, or full fine-tune jobs on H100, A100, or A30. Managed checkpointing. Auto-resume from spot preemption.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "A100", variant: "primary" },
      { text: "A30", variant: "primary" },
      { text: "LoRA", variant: "muted" },
      { text: "QLoRA", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Domain adaptation",
        subtitle: "Single-GPU to small clusters",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "1–4× A100 / A30",
        subtitle: "Spot-friendly with auto-resume",
      },
      {
        label: "STARTING AT",
        title: "₹72.00/hr",
        subtitle: "A30, on-demand",
      },
    ],
  },
  {
    id: "03",
    tabName: "Inference",
    logoAlt: "Inference serving on Neevcloud",
    heading: "Inference Serving",
    description:
      "Deploy vLLM, Triton, or custom inference servers. Autoscale GPU pools to match traffic. Pay only for what you serve.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "A100", variant: "primary" },
      { text: "vLLM", variant: "muted" },
      { text: "Triton", variant: "muted" },
      { text: "Autoscale", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Production endpoints",
        subtitle: "Real-time low-latency",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "Autoscaling pool",
        subtitle: "A100 / H100 mix",
      },
      {
        label: "STARTING AT",
        title: "₹118.00/hr",
        subtitle: "A100, on-demand",
      },
    ],
  },
  {
    id: "04",
    tabName: "Image & Video",
    logoAlt: "Image and video generation on Neevcloud",
    heading: "Image & Video Generation",
    description:
      "Stable Diffusion XL and FLUX on H100 or RTX 5090. High-throughput batch generation at production scale.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "RTX 5090", variant: "primary" },
      { text: "SDXL", variant: "muted" },
      { text: "FLUX", variant: "muted" },
      { text: "Batch", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Generated media",
        subtitle: "High-throughput batches",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "1-8x RTX 5090",
        subtitle: "Or H100 for max throughput",
      },
      {
        label: "STARTING AT",
        title: "₹88.20/hr",
        subtitle: "RTX 5090, on-demand",
      },
    ],
  },
  {
    id: "05",
    tabName: "HPC",
    logoAlt: "HPC and scientific computing on Neevcloud",
    heading: "HPC / Scientific Computing",
    description:
      "Parallel scientific workloads on GPU clusters with low-latency InfiniBand fabric. Available in Indore, India.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "A100", variant: "primary" },
      { text: "InfiniBand", variant: "muted" },
      { text: "MPI", variant: "muted" },
      { text: "Batch", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Simulation & modeling",
        subtitle: "Tightly-coupled jobs",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "Multi-node fabric",
        subtitle: "Low-latency InfiniBand",
      },
      {
        label: "STARTING AT",
        title: "On request.",
        subtitle: "Custom HPC pricing.",
      },
    ],
  },
  {
    id: "06",
    tabName: "Embeddings",
    logoAlt: "Embedding pipelines on Neevcloud",
    heading: "Embedding Pipelines",
    description:
      "Generate text embeddings at scale for RAG, search, and classification on A30 or A100. Built for high-volume batch jobs.",
    tags: [
      { text: "A30", variant: "primary" },
      { text: "A100", variant: "primary" },
      { text: "RAG", variant: "muted" },
      { text: "Search", variant: "muted" },
      { text: "Classification", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Retrieval & search",
        subtitle: "Vector pipelines at scale",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "1–4× A30 / A100",
        subtitle: "Batch-optimized",
      },
      {
        label: "STARTING AT",
        title: "₹63.45/hr",
        subtitle: "A30, 1-year reserved",
      },
    ],
  },
];

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState<string>("01");

  const activeCase = useMemo(
    () => USE_CASES.find((u) => u.id === activeTab) ?? USE_CASES[0],
    [activeTab]
  );

  return (
    <Container className="bg-white flex flex-col items-center py-[3vh] md:py-[7vh]">
      <Text as="h2" weight={"semibold"}>
        Use
        <Text as="span" variant="h2" weight={"semibold"} textColor="primary">
          Cases
        </Text>
      </Text>
      <Text className="mt-2">Built for Every AI Workload</Text>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-b border-gray-60 items-center justify-center mt-4 md:mt-8">
        {USE_CASES.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            textColor="black"
            size="full"
            onClick={() => setActiveTab(tab.id)}
            className={`flex gap-1 flex-col items-start py-4 border border-b-0 border-gray-60 rounded-lg rounded-b-none ${activeTab === tab.id ? "bg-tertiary text-white" : ""}`}
          >
            <Text>{tab.id}</Text>
            <Text as="h4" weight="semibold">
              {tab.tabName}
            </Text>
          </Button>
        ))}
      </div>
      <div className="relative bg-gray-10 w-full p-4 md:p-8 flex flex-col md:flex-row gap-4 overflow-hidden">
        <div>
          <div className="absolute bottom-[-58%] left-0">
            <Image
              src="/icons/logo.svg"
              alt={activeCase.logoAlt}
              width={500}
              height={500}
            />
          </div>
          <div className="w-12 h-12 bg-white rounded-sm" />
          <Text as="h2" weight="semibold" className="mt-4 md:mt-8">
            {activeCase.heading}
          </Text>
          <Text as="h4" className="mt-2 mb-4">
            {activeCase.description}
          </Text>
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-8">
            {activeCase.tags.map((tag) => (
              <Text
                key={tag.text}
                className={
                  tag.variant === "primary"
                    ? "bg-primary text-white px-4 py-1.5 rounded-full"
                    : "bg-gray-70 text-white px-4 py-1.5 rounded-full"
                }
              >
                {tag.text}
              </Text>
            ))}
          </div>
        </div>
        <div className="bg-primary p-4 rounded-lg md:w-[30%] flex flex-col gap-4 shrink-0">
          {activeCase.summary.map((block) => (
            <div key={block.label} className="bg-white p-6 rounded-lg">
              <Text as="small" textColor="gray-60">
                {block.label}
              </Text>
              <Text as="h4" weight="semibold">
                {block.title}
              </Text>
              {block.subtitle ? (
                <Text weight="semibold">{block.subtitle}</Text>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default UseCasesSection;
