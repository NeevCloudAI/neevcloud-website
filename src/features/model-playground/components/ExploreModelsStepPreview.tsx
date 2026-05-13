import { Text } from "@/shared/ui-lib";
import { Command, Eye, Languages, Mic, Play, Star } from "lucide-react";

type ExploreModelsStepPreviewProps = {
  stepIndex: number;
};

const MOCK_URL = "console.ai.neevcloud.com/ai-inference/playground";

function WindowChrome() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 border-b border-gray-100 p-4">
      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Text as="small" textColor="gray-75" className="truncate text-right">
        {MOCK_URL}
      </Text>
    </div>
  );
}

function Step1Preview() {
  return (
    <>
      <Text textColor="gray-75" fontFamily="spaceMono" className="px-6 pt-6 md:px-8 md:pt-8">
        STEP 1 - CHOOSE A CATEGORY
      </Text>
      <div className="grid grid-cols-2 gap-3 px-6 py-4 md:gap-4 md:px-8 md:py-6">
        <div className="border border-green-50 bg-green-100 rounded-md p-3 md:p-4 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <Languages size={22} className="shrink-0 text-primary pr-1 md:pr-2" />
            <Text textColor="primary" fontFamily="spaceMono" className="truncate text-sm">
              Language
            </Text>
          </div>
          <Text textColor="primary" fontFamily="spaceMono" className="shrink-0 text-sm">
            12 Models
          </Text>
        </div>
        <div className="border border-gray-125 bg-gray-110 rounded-md p-3 md:p-4 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <Eye size={22} className="shrink-0 text-gray-75" />
            <Text fontFamily="spaceMono" textColor="gray-75" className="truncate text-sm">
              Vision
            </Text>
          </div>
          <Text textColor="gray-75" fontFamily="spaceMono" className="shrink-0 text-sm">
            5 Models
          </Text>
        </div>
        <div className="border border-gray-125 bg-gray-110 rounded-md p-3 md:p-4 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <Mic size={22} className="shrink-0 text-gray-75 pr-1 md:pr-2" />
            <Text fontFamily="spaceMono" textColor="gray-75" className="truncate text-sm">
              Audio
            </Text>
          </div>
          <Text textColor="gray-75" fontFamily="spaceMono" className="shrink-0 text-sm">
            4 Models
          </Text>
        </div>
        <div className="border border-gray-125 bg-gray-110 rounded-md p-3 md:p-4 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <Command size={22} className="shrink-0 text-gray-75 pr-1 md:pr-2" />
            <Text fontFamily="spaceMono" textColor="gray-75" className="truncate text-sm">
              Specialized
            </Text>
          </div>
          <Text textColor="gray-75" fontFamily="spaceMono" className="shrink-0 text-sm">
            5 Models
          </Text>
        </div>
      </div>
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="gray-75" className="text-xs md:text-sm">
            {"// Language selected · showing 12 models · click to switch"}
          </Text>
        </div>
      </div>
    </>
  );
}

function Step2Preview() {
  return (
    <>
      <Text textColor="gray-75" fontFamily="spaceMono" className="px-6 pt-6 md:px-8 md:pt-8">
        STEP 2 - SELECT A MODEL
      </Text>
      <div className="flex flex-col gap-2 px-6 py-4 md:px-8 md:py-6">
        <div className="rounded-md border border-primary bg-black-80 p-3 md:p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <Text fontFamily="spaceMono" textColor="primary" className="text-sm font-medium">
                llama-3.1-70b-instruct
              </Text>
              <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1 text-xs">
                Meta · 120K context
              </Text>
            </div>
            <Text fontFamily="spaceMono" textColor="primary" className="shrink-0 text-sm">
              ₹22.55/1M
            </Text>
          </div>
        </div>
        <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="gray-75" className="text-sm">
            kimi-k2-instruct
          </Text>
          <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1 text-xs">
            Moonshot · 128K context
          </Text>
        </div>
        <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="gray-75" className="text-sm">
            deepseek-coder-v2
          </Text>
          <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1 text-xs">
            DeepSeek · code-focused
          </Text>
        </div>
      </div>
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <div className="rounded-md border border-primary/40 bg-primary/10 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="primary" className="text-xs md:text-sm">
            {"// llama-3.1-70b selected · 128K context · free tier available"}
          </Text>
        </div>
      </div>
    </>
  );
}

function Step3Preview() {
  return (
    <>
      <Text textColor="gray-75" fontFamily="spaceMono" className="px-6 pt-6 md:px-8 md:pt-8">
        STEP 3 - TRY IT OUT
      </Text>
      <div className="px-6 py-4 md:px-8 md:py-6">
        <Text fontFamily="spaceMono" textColor="gray-75" className="mb-2 text-xs uppercase">
          Prompt · llama-3.1-70b-instruct
        </Text>
        <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="gray-75" className="text-xs leading-relaxed md:text-sm">
            Summarize the benefits of serverless AI inference for a startup with limited DevOps
            resources.
          </Text>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-gray-125 pt-3">
            <Text fontFamily="spaceMono" textColor="gray-75" className="text-xs">
              press ctrl + enter to run
            </Text>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-white"
              tabIndex={-1}
              aria-hidden
            >
              <Play className="size-3.5 fill-current" aria-hidden />
              <span className="font-space-mono text-xs font-medium">Run</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function MetricRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between gap-2 text-xs">
      <Text fontFamily="spaceMono" textColor="gray-75">
        {label}
      </Text>
      <Text fontFamily="spaceMono" textColor={highlight ? "primary" : "gray-75"}>
        {value}
      </Text>
    </div>
  );
}

function Step4Preview() {
  return (
    <>
      <Text textColor="gray-75" fontFamily="spaceMono" className="px-6 pt-6 md:px-8 md:pt-8">
        STEP 4 - ITERATE AND COMPARE
      </Text>
      <div className="grid grid-cols-1 gap-3 px-6 py-4 sm:grid-cols-2 md:px-8 md:py-6">
        <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="gray-75" className="mb-3 text-sm">
            llama-3.1-70b
          </Text>
          <div className="flex flex-col gap-2">
            <MetricRow label="latency" value="420ms" highlight />
            <MetricRow label="tokens" value="1.2k" />
            <MetricRow label="cost" value="₹0.03" highlight />
            <div className="flex items-center justify-between gap-2 text-xs">
              <Text fontFamily="spaceMono" textColor="gray-75">
                quality
              </Text>
              <span className="flex text-primary" aria-hidden>
                <Star className="size-3 fill-current" />
                <Star className="size-3 fill-current" />
                <Star className="size-3 fill-current" />
                <Star className="size-3 fill-current text-gray-125" />
              </span>
            </div>
            <MetricRow label="context" value="128K" />
          </div>
        </div>
        <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="gray-75" className="mb-3 text-sm">
            kimi-k2-instruct
          </Text>
          <div className="flex flex-col gap-2">
            <MetricRow label="latency" value="680ms" />
            <MetricRow label="tokens" value="1.2k" />
            <MetricRow label="cost" value="₹0.05" />
            <div className="flex items-center justify-between gap-2 text-xs">
              <Text fontFamily="spaceMono" textColor="gray-75">
                quality
              </Text>
              <span className="flex text-primary" aria-hidden>
                <Star className="size-3 fill-current" />
                <Star className="size-3 fill-current" />
                <Star className="size-3 fill-current" />
                <Star className="size-3 fill-current" />
                <Star className="size-3 fill-current" />
              </span>
            </div>
            <MetricRow label="context" value="128K" />
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <div className="rounded-md border border-primary/40 bg-primary/10 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="primary" className="text-xs md:text-sm">
            {"// llama-70b wins on cost · kimi-k2 wins on quality · pick based on use case"}
          </Text>
        </div>
      </div>
    </>
  );
}

function Step5Preview() {
  return (
    <>
      <Text textColor="gray-75" fontFamily="spaceMono" className="px-6 pt-6 md:px-8 md:pt-8">
        STEP 5 - MOVE TO PRODUCTION
      </Text>
      <div className="px-6 py-4 md:px-8 md:py-6">
        <pre className="overflow-x-auto rounded-md border border-gray-125 bg-gray-110 p-3 text-left font-space-mono text-xs leading-relaxed text-white md:p-4 md:text-sm">
          <code>
            <span className="text-red-50"># from playground to production · one line</span>
            {"\n"}
            <span className="text-red-50">from</span> NeevCloud <span className="text-red-50">import</span> NeevCloud
            {"\n"}
            client = NeevCloud(
            {"\n"}
            {"  "}
            api_key=<span className="text-primary-60">&quot;sk-neev-...&quot;</span>,
            {"\n"}
            {"  "}
            base_url=<span className="text-primary-60">&quot;https://api.neevcloud.com/v1&quot;</span>
            {"\n"}
            )
            {"\n"}
            response = client.chat.completions.create(
            {"\n"}
            {"  "}
            model=<span className="text-primary-60">&quot;meta-llama-3.1-70b-instruct&quot;</span>,
            {"\n"}
            {"  "}
            messages=[...]
            {"\n"}
            )
          </code>
        </pre>
      </div>
      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <div className="rounded-md border border-green-50/30 bg-black-80 p-3 md:p-4">
          <Text fontFamily="spaceMono" textColor="green-50" className="text-xs leading-relaxed md:text-sm">
            {"// Same model · same API · billed in INR"}
            <br />
            {"// Playground and production are identical"}
            <br />
            {"// No migration, no rewrite, no surprises"}
          </Text>
        </div>
      </div>
    </>
  );
}

export default function ExploreModelsStepPreview({ stepIndex }: ExploreModelsStepPreviewProps) {
  return (
    <div className="w-full bg-black md:min-h-0 md:rounded-r-lg">
      <WindowChrome />
      {stepIndex === 0 && <Step1Preview />}
      {stepIndex === 1 && <Step2Preview />}
      {stepIndex === 2 && <Step3Preview />}
      {stepIndex === 3 && <Step4Preview />}
      {stepIndex === 4 && <Step5Preview />}
    </div>
  );
}
