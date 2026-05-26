import { PROMPT_SUGGESTIONS } from "@/features/model-catalog/constants/model-action-section.constants";
import type { ModelActionItem } from "@/features/model-catalog/types/model-action-section.types";
import { Button, Text } from "@/shared/ui-lib";

type ModelActionPromptPanelProps = {
  selectedModel: ModelActionItem;
  prompt: string;
  onPromptChange: (value: string) => void;
};

const ModelActionPromptPanel = ({
  selectedModel,
  prompt,
  onPromptChange,
}: ModelActionPromptPanelProps) => {
  return (
    <>
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
          id="model-action-prompt-label"
        >
          Prompt
        </Text>

        <label htmlFor="model-action-prompt" className="sr-only">
          Enter your prompt
        </label>
        <textarea
          id="model-action-prompt"
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          placeholder="Enter your prompt here..."
          rows={4}
          aria-labelledby="model-action-prompt-label"
          className="mt-3 w-full resize-none rounded-md border border-gray-125 bg-black-40 px-3.75 py-3 font-space-mono text-sm text-white placeholder:text-gray-75 focus:border-green-50 focus:outline-none"
        />

        <div className="mt-5 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-2.5">
          <div className="flex flex-col gap-4">
            {PROMPT_SUGGESTIONS.map((suggestion) => (
              <Button
                variant="ghost"
                key={suggestion}
                type="button"
                onClick={() => onPromptChange(suggestion)}
                className="rounded-full border border-gray-125 bg-transparent px-2.5 py-1.25 font-space-mono text-sm text-gray-75 transition-colors hover:border-green-50 hover:text-primary"
              >
                {suggestion}
              </Button>
            ))}
          </div>
          <Button className="w-full md:w-fit">Try Models</Button>
        </div>
      </div>
    </>
  );
};

export default ModelActionPromptPanel;
