"use client";

import { type CSSProperties, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import {
  AI_SUPERCLUSTER_DEFAULT_DURATION_ID,
  AI_SUPERCLUSTER_DEFAULT_GPU_ID,
  AI_SUPERCLUSTER_DEFAULT_INTERCONNECT_ID,
  AI_SUPERCLUSTER_DEFAULT_NODES,
  AI_SUPERCLUSTER_DEFAULT_STORAGE_ID,
  AI_SUPERCLUSTER_DURATIONS,
  AI_SUPERCLUSTER_GPU_TYPES,
  AI_SUPERCLUSTER_INTERCONNECTS,
  AI_SUPERCLUSTER_STORAGE_OPTIONS,
} from "../../data/configurator.data";
import type { AiSuperclusterConfig } from "../../types/ai-supercluster.types";
import {
  buildConfigSummary,
  getGpuTotal,
  nodesToSlider,
  sliderToNodes,
} from "../../utils/ai-supercluster-configurator-utils";
import AiSuperclusterHubspotForm from "./AiSuperclusterHubspotForm";

const DEFAULT_CONFIG: AiSuperclusterConfig = {
  gpuId: AI_SUPERCLUSTER_DEFAULT_GPU_ID,
  nodes: AI_SUPERCLUSTER_DEFAULT_NODES,
  interconnectId: AI_SUPERCLUSTER_DEFAULT_INTERCONNECT_ID,
  storageId: AI_SUPERCLUSTER_DEFAULT_STORAGE_ID,
  durationId: AI_SUPERCLUSTER_DEFAULT_DURATION_ID,
};

const chipClassName = (isActive: boolean) =>
  cn(
    "rounded-md border px-2.5 py-2 text-center transition-colors",
    isActive
      ? "border-primary bg-primary text-white"
      : "border-white/12 bg-white/6 hover:border-primary",
  );

export default function AiSuperclusterConfiguratorClient() {
  const [config, setConfig] = useState<AiSuperclusterConfig>(DEFAULT_CONFIG);
  const [view, setView] = useState<"config" | "form">("config");

  const gpuTotal = useMemo(() => getGpuTotal(config), [config]);
  const summary = useMemo(() => buildConfigSummary(config), [config]);

  if (view === "form") {
    return (
      <div className="rounded-xl bg-white/6 border border-white/12 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setView("config")}
          className="flex w-full items-center gap-2.5 border-b border-white/12 px-5 py-3.5 text-left cursor-pointer"
        >
          <Text as="span" textColor="primary" weight="bold">
            ←
          </Text>
          <Text as="small" textColor="gray-01">
            Back to configurator
          </Text>
        </button>

        <div className="bg-primary/10 border-b border-primary/20 px-5 py-2.5">
          <Text as="small" textColor="primary" weight="semibold" className="uppercase tracking-wide">
            Your config
          </Text>
          <Text as="small" textColor="white" className="mt-1">
            {summary}
          </Text>
        </div>

        <div className="p-5">
          <Text as="h5" weight="semibold" textColor="white">
            Get your custom quote
          </Text>
          <Text as="small" textColor="gray-01" className="mt-1.5 mb-4">
            Fill in your details — a NeevCloud GPU architect will respond within 4
            hours with your tailored cluster proposal.
          </Text>
          <AiSuperclusterHubspotForm config={config} />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white/6 border border-white/12 backdrop-blur-md p-5">
      <Text as="small" textColor="primary" weight="semibold" className="uppercase tracking-wide">
        Live Configurator
      </Text>
      <Text as="h4" weight="semibold" textColor="white" className="mt-1.5 mb-5">
        Build your cluster →
      </Text>

      <div className="flex flex-col gap-5">
        <div>
          <Text as="small" textColor="gray-01" className="mb-2 uppercase tracking-wide">
            1. GPU Type
          </Text>
          <div className="grid grid-cols-3 gap-1.5">
            {AI_SUPERCLUSTER_GPU_TYPES.map((gpuType) => (
              <button
                key={gpuType.id}
                type="button"
                aria-pressed={config.gpuId === gpuType.id}
                onClick={() => setConfig((prev) => ({ ...prev, gpuId: gpuType.id }))}
                className={cn(chipClassName(config.gpuId === gpuType.id), "text-xs font-medium text-white")}
              >
                {gpuType.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <Text as="small" textColor="gray-01" className="uppercase tracking-wide">
              2. Nodes
            </Text>
            <Text as="small" textColor="white" weight="semibold">
              {config.nodes} nodes · {gpuTotal} GPUs
            </Text>
          </div>
          <div className="pricing-calculator">
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={nodesToSlider(config.nodes)}
              onChange={(event) =>
                setConfig((prev) => ({
                  ...prev,
                  nodes: sliderToNodes(Number(event.target.value)),
                }))
              }
              aria-label="Number of nodes"
              style={{ "--slider-progress": `${nodesToSlider(config.nodes)}%` } as CSSProperties}
              className="pricing-calculator-slider w-full"
            />
          </div>
        </div>

        <div>
          <Text as="small" textColor="gray-01" className="mb-2 uppercase tracking-wide">
            3. Interconnect
          </Text>
          <div className="flex flex-col gap-1.5" role="group" aria-label="Interconnect">
            {AI_SUPERCLUSTER_INTERCONNECTS.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={config.interconnectId === option.id}
                onClick={() =>
                  setConfig((prev) => ({ ...prev, interconnectId: option.id }))
                }
                className={cn(
                  chipClassName(config.interconnectId === option.id),
                  "text-left text-sm font-medium text-white",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Text as="small" textColor="gray-01" className="mb-2 uppercase tracking-wide">
            4. Storage
          </Text>
          <select
            value={config.storageId}
            onChange={(event) =>
              setConfig((prev) => ({
                ...prev,
                storageId: event.target.value as AiSuperclusterConfig["storageId"],
              }))
            }
            className="w-full rounded-md border border-white/12 bg-white/6 px-3 py-2.5 text-sm font-medium text-white cursor-pointer"
          >
            {AI_SUPERCLUSTER_STORAGE_OPTIONS.map((option) => (
              <option key={option.id} value={option.id} className="text-black">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Text as="small" textColor="gray-01" className="mb-2 uppercase tracking-wide">
            5. Duration
          </Text>
          <div className="grid grid-cols-5 gap-1.5">
            {AI_SUPERCLUSTER_DURATIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={config.durationId === option.id}
                onClick={() =>
                  setConfig((prev) => ({ ...prev, durationId: option.id }))
                }
                className={cn(chipClassName(config.durationId === option.id), "text-xs font-medium text-white")}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setView("form")}
          className="mt-1 w-full rounded-md bg-primary px-4 py-3.5 text-sm font-semibold text-white cursor-pointer transition-opacity hover:opacity-90"
        >
          Get Estimated Pricing →
        </button>
      </div>
    </div>
  );
}
