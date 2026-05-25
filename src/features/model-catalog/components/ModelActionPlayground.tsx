"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button, Text } from "@/shared/ui-lib";
import {
  MODEL_ACTION_ITEMS,
  MODEL_ACTION_TOTAL_COUNT,
  PROMPT_SUGGESTIONS,
  type ModelActionItem,
} from "../data/model-action-section-data";

type ModelSidebarCardProps = {
  model: ModelActionItem;
  isActive: boolean;
  onSelect: () => void;
};

const ModelSidebarCard = ({
  model,
  isActive,
  onSelect,
}: ModelSidebarCardProps) => (
  <Button
    variant="ghost"
    type="button"
    onClick={onSelect}
    className={cn(
      "md:min-w-100 w-full rounded-md border px-3.75 py-2.5 text-left",
      isActive
        ? "border-primary-75 bg-primary-95"
        : "border-black-35 bg-black-70 hover:border-gray-100",
    )}
  >
    <Text
      fontFamily="spaceMono"
      textColor={isActive ? "primary" : "gray-75"}
      className="truncate"
    >
      {model.name}
    </Text>
    <Text
      as="small"
      fontFamily="spaceMono"
      textColor="gray-75"
      className="text-[10px]"
    >
      {model.provider} · {model.context} context
    </Text>
  </Button>
);

const ModelActionPlayground = () => {
  const [selectedModelId, setSelectedModelId] = useState(
    MODEL_ACTION_ITEMS[0].id,
  );
  const [prompt, setPrompt] = useState("");

  const selectedModel =
    MODEL_ACTION_ITEMS.find((model) => model.id === selectedModelId) ??
    MODEL_ACTION_ITEMS[0];

  return (
    <div className="flex min-h-120 flex-col md:flex-row">
      <aside className="flex shrink-0 flex-col bg-black-80 p-4 md:p-7.5 md:rounded-l-xl">
        <Text
          fontFamily="spaceMono"
          textColor="gray-75"
          className="uppercase tracking-wide"
        >
          Select model
        </Text>

        <div className="mt-5 flex flex-col gap-1.25">
          {MODEL_ACTION_ITEMS.map((model) => (
            <ModelSidebarCard
              key={model.id}
              model={model}
              isActive={model.id === selectedModelId}
              onSelect={() => setSelectedModelId(model.id)}
            />
          ))}
        </div>

        <Link
          href="/model-playground"
          className="mt-4 md:mt-10 font-space-mono text-sm text-primary underline underline-offset-4"
        >
          View All {MODEL_ACTION_TOTAL_COUNT}+ models
        </Link>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col bg-black md:rounded-r-xl">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-95 p-4 md:p-7.5">
          <div>
            <Text as="h5" fontFamily="spaceMono" textColor="white">
              {selectedModel.name}
            </Text>
            <Text as="small" fontFamily="spaceMono" textColor="gray-75">
              {selectedModel.provider} · {selectedModel.context} context ·{" "}
              {selectedModel.latency}
            </Text>
          </div>

          <Text as="small" fontFamily="spaceMono" textColor="gray-75">
            • ready
          </Text>
        </div>

        <div className="flex flex-1 flex-col border-b border-gray-95 p-4 md:px-7.5 md:py-5">
          <Text
            fontFamily="spaceMono"
            textColor="gray-75"
            className="uppercase tracking-wide"
          >
            Prompt
          </Text>

          <label htmlFor="model-action-prompt" className="sr-only">
            Enter your prompt
          </label>
          <textarea
            id="model-action-prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Enter your prompt here..."
            rows={4}
            className="mt-3 w-full resize-none rounded-md border border-gray-125 bg-black-40 px-3.75 py-3 font-space-mono text-sm text-white placeholder:text-gray-75 focus:border-green-50 focus:outline-none"
          />

          <div className="mt-5 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-2.5">
            <div className="flex flex-col gap-4">
              {PROMPT_SUGGESTIONS.map((suggestion) => (
                <Button
                  variant="ghost"
                  key={suggestion}
                  type="button"
                  onClick={() => setPrompt(suggestion)}
                  className="rounded-full border border-gray-125 bg-transparent px-2.5 py-1.25 font-space-mono text-sm text-gray-75 transition-colors hover:border-green-50 hover:text-primary"
                >
                  {suggestion}
                </Button>
              ))}
            </div>
            <Button className="w-full md:w-fit">Try Models</Button>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4 py-4 md:px-5 md:py-5">
          <Text
            fontFamily="spaceMono"
            textColor="gray-75"
            className="uppercase tracking-wide"
          >
            Output
          </Text>

          <div className="flex items-center justify-center rounded-md px-4 py-10 md:min-h-60 mb-10">
            <Text fontFamily="spaceMono" textColor="gray-75" align="center">
              Model response will appear here.
            </Text>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModelActionPlayground;
