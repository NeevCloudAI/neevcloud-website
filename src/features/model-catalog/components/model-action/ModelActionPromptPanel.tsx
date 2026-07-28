import { LinkComponent } from "@/shared/ui-lib";
import { PROMPT_SUGGESTIONS } from "../../constants/model-action-section.constants";
import type { ModelActionItem } from "../../types/model-action-section.types";
import { Button, Text } from "@/shared/ui-lib";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

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
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/12 p-4 md:p-7.5">
        <div>
          <Text as="h5" fontFamily="spaceMono" textColor="white">
            {selectedModel.name}
          </Text>
          <Text as="small" fontFamily="spaceMono" textColor="gray-04">
            {selectedModel.provider} · {selectedModel.context} context ·{" "}
            {selectedModel.pricing}
          </Text>
        </div>

        <Text as="small" fontFamily="spaceMono" textColor="gray-04">
          • ready
        </Text>
      </div>

      <div className="flex flex-1 flex-col border-b border-white/12 p-4 md:px-7.5 md:py-5">
        <Text
          fontFamily="spaceMono"
          textColor="gray-04"
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
          disabled
          aria-labelledby="model-action-prompt-label"
          className="mt-3 w-full resize-none rounded-md border border-gray-80/24 bg-gray-80/18 px-3.75 py-3 font-space-mono text-sm text-white placeholder:text-gray-04"
        />

        <div className="mt-5 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-2.5">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {PROMPT_SUGGESTIONS.map((suggestion) => (
              <Button
                variant="ghost"
                key={suggestion}
                type="button"
                onClick={() => onPromptChange(suggestion)}
                className="h-auto max-w-full self-start whitespace-normal text-left rounded-full border border-gray-80/18 bg-gray-80/12 px-2.5 py-1.25 font-space-mono text-sm text-gray-04 transition-colors hover:border-primary-90 hover:text-primary"
              >
                {suggestion}
              </Button>
            ))}
          </div>
          <LinkComponent
            href={EXTERNAL_LINKS.aiInferencePlayground}
            target="_blank"
          >
            Try Models
          </LinkComponent>
        </div>
      </div>
    </>
  );
};

export default ModelActionPromptPanel;
