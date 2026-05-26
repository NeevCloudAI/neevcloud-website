"use client";

import { useState } from "react";
import ModelActionOutputPanel from "./ModelActionOutputPanel";
import ModelActionPromptPanel from "./ModelActionPromptPanel";
import ModelActionSidebar from "./ModelActionSidebar";
import { MODEL_ACTION_ITEMS } from "../../data/model-action-section.data";

const ModelActionPlaygroundClient = () => {
  const [selectedModelId, setSelectedModelId] = useState(
    MODEL_ACTION_ITEMS[0].id,
  );
  const [prompt, setPrompt] = useState("");

  const selectedModel =
    MODEL_ACTION_ITEMS.find((model) => model.id === selectedModelId) ??
    MODEL_ACTION_ITEMS[0];

  return (
    <div className="flex min-h-120 flex-col md:flex-row">
      <ModelActionSidebar
        selectedModelId={selectedModelId}
        onSelectModel={setSelectedModelId}
      />

      <main className="flex min-w-0 flex-1 flex-col bg-black md:rounded-r-xl">
        <ModelActionPromptPanel
          selectedModel={selectedModel}
          prompt={prompt}
          onPromptChange={setPrompt}
        />
        <ModelActionOutputPanel />
      </main>
    </div>
  );
};

export default ModelActionPlaygroundClient;
