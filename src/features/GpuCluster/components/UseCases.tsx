"use client";

import { useState } from "react";
import Image from "next/image";

type TabId = "01" | "02" | "03" | "04" | "05" | "06";

interface UseCaseEntry {
  title: string;
  description: string;
  tags: string[];
  highlightTags: string[];
  bestFor: string;
  bestForSub: string;
  cluster: string;
  clusterSub: string;
  price: string;
  priceSub: string;
}

const tabs: { id: TabId; label: string }[] = [
  { id: "01", label: "LLM Training" },
  { id: "02", label: "Fine-Tuning" },
  { id: "03", label: "Inference" },
  { id: "04", label: "Image & Video" },
  { id: "05", label: "HPC" },
  { id: "06", label: "Embeddings" },
];

const useCaseData: Record<TabId, UseCaseEntry> = {
  "01": {
    title: "LLM Training",
    description:
      "Train models from scratch on H100 or H200 clusters. Full InfiniBand bandwidth between nodes. PyTorch 2.8 + CUDA 12.9 pre-installed.",
    tags: ["H100", "H200", "PyTorch 2.8", "CUDA 12.9", "InfiniBand"],
    highlightTags: ["H100", "H200"],
    bestFor: "Foundation Models",
    bestForSub: "7B → 70B+ parameters",
    cluster: "8x H100/H200",
    clusterSub: "Multi-node InfiniBand",
    price: "₹179.10/hr",
    priceSub: "per GPU, on-demand",
  },
  "02": {
    title: "Fine-Tuning",
    description:
      "Run LoRA, QLoRA, or full fine-tune jobs on H100, A100, or A30. Managed checkpointing. Auto-resume from spot preemption.",
    tags: ["H100", "A100", "A30", "LoRA", "QLoRA"],
    highlightTags: ["H100", "A100", "A30"],
    bestFor: "Domain Adaptation",
    bestForSub: "Single-GPU to small clusters",
    cluster: "1–4× A100 / A30",
    clusterSub: "Spot-friendly with auto-resume",
    price: "₹72.00/hr",
    priceSub: "A30, on-demand",
  },
  "03": {
    title: "Inference",
    description:
      "Deploy vLLM, Triton, or custom inference servers. Autoscale GPU pools to match traffic. Pay only for what you serve.",
    tags: ["H100", "A100", "vLLM", "Triton", "Autoscale"],
    highlightTags: ["H100", "A100"],
    bestFor: "Productive end",
    bestForSub: "Real-time low-latency",
    cluster: "Autoscaling pool",
    clusterSub: "A100 / H100 mix",
    price: "₹118.00/hr",
    priceSub: "A100, on-demand",
  },
  "04": {
    title: "Image & Video",
    description:
      "Stable Diffusion XL and FLUX on H100 or RTX 5090. High-throughput batch generation at production scale.",
    tags: ["H100", "RTX-5090", "SDXL", "FLUX", "Batch"],
    highlightTags: ["H100", "RTX-5090"],
    bestFor: "Generative Media",
    bestForSub: "High-throughput batches",
    cluster: "1–8× RTX 5090",
    clusterSub: "Or H100 for max throughput",
    price: "₹88.20/hr",
    priceSub: "RTX 5090, on-demand",
  },
  "05": {
    title: "HPC",
    description:
      "Parallel scientific workloads on GPU clusters with low-latency InfiniBand fabric. Available in Indore, India.",
    tags: ["H100", "A100", "InfiniBand", "MPI", "Batch"],
    highlightTags: ["H100", "A100"],
    bestFor: "Simulation & modeling",
    bestForSub: "Tightly-coupled jobs",
    cluster: "Multi-node fabric",
    clusterSub: "Low-latency InfiniBand",
    price: "On request",
    priceSub: "Custom HPC pricing",
  },
  "06": {
    title: "Embeddings",
    description:
      "Generate text embeddings at scale for RAG, search, and classification on A30 or A100. Built for high-volume batch jobs.",
    tags: ["A30", "A100", "RAG", "Search", "Classification"],
    highlightTags: ["A30", "A100"],
    bestFor: "Retrieval & search",
    bestForSub: "Vector pipelines at scale",
    cluster: "1–4× A30 / A100",
    clusterSub: "Batch-optimized",
    price: "₹63.45/hr",
    priceSub: "A30, 1-year reserved",
  },
};

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("01");
  const data = useCaseData[activeTab];

  return (
    <section className="w-full py-10 sm:py-16 px-4 sm:px-8 md:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="flex justify-center items-center gap-2">
          <span className="text-black text-[40px] font-semibold leading-none">Use</span>
          <span className="text-[#00A78A] text-[40px] font-semibold leading-none">Cases</span>
        </div>
        <p className="mt-2 text-base">Built for Every AI Workload</p>
      </div>

      {/* Tab bar */}
      <div className="w-full max-w-360 mx-auto">

        {/* ── Mobile (<md): horizontally scrollable tabs ── */}
        <div
          className="md:hidden flex overflow-x-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-none flex flex-col items-start px-4 py-3 border-l last:border-r border-b border-t transition-colors duration-200 text-left rounded-tl-lg rounded-tr-lg"
              style={{
                minWidth: "110px",
                borderColor: "#BDC9CC",
                backgroundColor: activeTab === tab.id ? "#022C3B" : "transparent",
              }}
            >
              {/*
                Using inline style fontSize to bypass the global
                `span { @apply text-xs ... }` rule in globals.css
              */}
              <span
                style={{
                  display: "block",
                  fontSize: "11px",
                  lineHeight: "1.2",
                  marginBottom: "4px",
                  color: activeTab === tab.id ? "#ffffff" : "#000000",
                }}
              >
                {tab.id}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "1.3",
                  whiteSpace: "nowrap",
                  color: activeTab === tab.id ? "#ffffff" : "#1a202c",
                }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* ── Desktop (md+): 6-column grid ── */}
        <div className="hidden md:grid md:grid-cols-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-start px-5 py-4 border-l last:border-r border-b border-t transition-colors duration-200 text-left rounded-tl-lg rounded-tr-lg"
              style={{
                borderColor: "#BDC9CC",
                backgroundColor: activeTab === tab.id ? "#022C3B" : "transparent",
              }}
            >
              <span
                className="text-base mb-1"
                style={{ color: activeTab === tab.id ? "#ffffff" : "#000000" }}
              >
                {tab.id}
              </span>
              <span
                className="font-semibold text-2xl"
                style={{ color: activeTab === tab.id ? "#ffffff" : "#1a202c" }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div
        className="w-full max-w-360 mx-auto rounded-b-lg overflow-hidden relative"
        style={{
          backgroundColor: "#EAF4F4",
          borderTop: "none",
          minHeight: "360px",
        }}
      >
        {/* Vector.svg decorative — hidden on mobile */}
        <div
          className="absolute pointer-events-none hidden md:block"
          style={{
            bottom: 0,
            left: 0,
            width: "620px",
            height: "500px",
            zIndex: 0,
            opacity: 0.55,
          }}
        >
          <Image
            src="/icons/Vector.svg"
            alt=""
            fill
            className="object-contain mt-84"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-6 p-5 sm:p-8">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Icon */}
            <div className="w-15 h-15 rounded-md flex items-center justify-center border border-[#BDC9CC] bg-white relative overflow-hidden">
              <Image
                src="/icons/Frame.svg"
                alt=""
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            <h3 className="text-[40px] font-semibold text-black">
              {data.title}
            </h3>

            <p className="text-2xl leading-relaxed">{data.description}</p>

            {/* Tags — inline style fontSize to bypass global span rule */}
            <div className="flex flex-wrap gap-2 mt-1">
              {data.tags.map((tag: string) => {
                const isHighlight = data.highlightTags.includes(tag);
                return (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full"
                    style={
                      isHighlight
                        ? { backgroundColor: "#00A78A", color: "#ffffff", fontSize: "14px" }
                        : { backgroundColor: "#475569", color: "#ffffff", border: "1px solid #e2e8f0", fontSize: "14px" }
                    }
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right info cards */}
          <div
            className="flex flex-col gap-3 w-full lg:w-[340px] lg:mt-10 rounded-xl p-3 bg-[#00A78A]"
            style={{ border: "2px solid #00A78A", backdropFilter: "blur(20px)" }}
          >
            {/* Card 1 — Best For */}
            <div className="rounded-lg p-4 bg-white" style={{ border: "1px solid #e2e8f0" }}>
              {/* inline fontSize bypasses global span rule */}
              <p
                className="uppercase tracking-widest mb-1 text-[#6E7B80]"
                style={{ fontSize: "12px" }}
              >
                Best For
              </p>
              <p className="font-semibold text-2xl text-black">{data.bestFor}</p>
              <p className="text-base text-[#384245] mt-0.5">{data.bestForSub}</p>
            </div>

            {/* Card 2 — Recommended Cluster */}
            <div className="rounded-lg p-4 bg-white" style={{ border: "1px solid #e2e8f0" }}>
              <p
                className="uppercase tracking-widest mb-1 text-[#6E7B80]"
                style={{ fontSize: "12px" }}
              >
                Recommended Cluster
              </p>
              <p className="font-bold text-2xl text-black">{data.cluster}</p>
              <p className="text-base text-[#384245] mt-0.5">{data.clusterSub}</p>
            </div>

            {/* Card 3 — Starting At */}
            <div className="rounded-lg p-4 bg-white" style={{ border: "1px solid #e2e8f0" }}>
              <p
                className="uppercase tracking-widest mb-1 text-[#6E7B80]"
                style={{ fontSize: "12px" }}
              >
                Starting At
              </p>
              <p className="font-bold text-2xl text-black">{data.price}</p>
              <p className="text-base text-[#384245] mt-0.5">{data.priceSub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;