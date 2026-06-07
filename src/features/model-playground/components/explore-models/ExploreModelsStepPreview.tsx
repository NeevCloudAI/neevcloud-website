import { EXPLORE_MODELS_MOCK_URL } from "../../constants/explore-models-section.constants";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { Command, Eye, Languages, Mic, Play, Star } from "@/shared/icons/lucide-icon-map";
import type { ExploreModelsStepPreviewProps } from "../../types/explore-models-section.types";

function WindowChrome() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 border-b border-gray-100 p-3.75">
      <div className="flex items-center gap-1.25" aria-hidden>
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Text as="small" textColor="gray-75" className="truncate text-right">
        {EXPLORE_MODELS_MOCK_URL}
      </Text>
    </div>
  );
}

function Step1Preview() {
  return (
    <div className="px-4 md:px-8.75 py-4 md:py-10 flex flex-col gap-4 md:gap-5">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 1 - CHOOSE A CATEGORY
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <div className="border border-green-50 bg-green-100 rounded-md p-3 md:px-3.75 md:py-2.75 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <Languages size={16} className="shrink-0 text-primary" />
            <Text textColor="primary" fontFamily="spaceMono">
              Language
            </Text>
          </div>
          <Text
            as="small"
            textColor="primary"
            fontFamily="spaceMono"
            className="text-[10px]"
          >
            12 Models
          </Text>
        </div>
        <div className="border border-gray-125 bg-gray-110 rounded-md p-3 md:px-3.75 md:py-2.75 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <Eye size={16} className="shrink-0 text-gray-75" />
            <Text fontFamily="spaceMono" textColor="gray-75">
              Vision
            </Text>
          </div>
          <Text
            as="small"
            textColor="gray-75"
            fontFamily="spaceMono"
            className="text-[10px]"
          >
            5 Models
          </Text>
        </div>
        <div className="border border-gray-125 bg-gray-110 rounded-md p-3 md:px-3.75 md:py-2.75 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <Mic size={16} className="shrink-0 text-gray-75 pr-1" />
            <Text fontFamily="spaceMono" textColor="gray-75">
              Audio
            </Text>
          </div>
          <Text
            as="small"
            textColor="gray-75"
            fontFamily="spaceMono"
            className="text-[10px]"
          >
            4 Models
          </Text>
        </div>
        <div className="border border-gray-125 bg-gray-110 rounded-md p-3 md:px-3.75 md:py-2.75 flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <Command size={16} className="shrink-0 text-gray-75 pr-1" />
            <Text fontFamily="spaceMono" textColor="gray-75">
              Specialized
            </Text>
          </div>
          <Text
            as="small"
            textColor="gray-75"
            fontFamily="spaceMono"
            className="text-[10px]"
          >
            5 Models
          </Text>
        </div>
      </div>

      <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:px-4.5 md:py-2.75">
        <Text
          fontFamily="spaceMono"
          textColor="gray-75"
          className="text-xs md:text-sm"
        >
          {"// Language selected · showing 12 models · click to switch"}
        </Text>
      </div>
    </div>
  );
}

function Step2Preview() {
  return (
    <div className="px-4 md:px-8.75 py-4 md:py-10 flex flex-col gap-4 md:gap-5">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 2 - SELECT A MODEL
      </Text>
      <div className="flex flex-col gap-2">
        <div className="rounded-md border border-green-50 bg-green-100 px-3.75 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <Text fontFamily="spaceMono" textColor="primary">
                llama-3.1-70b-instruct
              </Text>
              <Text
                as="small"
                fontFamily="spaceMono"
                textColor="gray-75"
                className="text-[10px]"
              >
                Meta · 120K context
              </Text>
            </div>
            <Text
              as="small"
              fontFamily="spaceMono"
              textColor="primary"
              className="text-[10px]"
            >
              ₹22.55/1M
            </Text>
          </div>
        </div>

        <div className="rounded-md border border-gray-125 bg-gray-110 px-3.75 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <Text fontFamily="spaceMono" textColor="gray-75">
                kimi-k2-instruct
              </Text>
              <Text
                as="small"
                fontFamily="spaceMono"
                textColor="gray-75"
                className="text-[10px]"
              >
                Moonshot · 128K context
              </Text>
            </div>
            <Text
              as="small"
              fontFamily="spaceMono"
              textColor="primary"
              className="text-[10px]"
            >
              ₹18.40/1M
            </Text>
          </div>
        </div>

        <div className="rounded-md border border-gray-125 bg-gray-110 px-3.75 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <Text fontFamily="spaceMono" textColor="gray-75">
                deepseek-coder-v2
              </Text>
              <Text
                as="small"
                fontFamily="spaceMono"
                textColor="gray-75"
                className="text-[10px]"
              >
                DeepSeek · 128K
              </Text>
            </div>
            <Text
              as="small"
              fontFamily="spaceMono"
              textColor="primary"
              className="text-[10px]"
            >
              ₹10.80/1M
            </Text>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-green-50 bg-green-100 px-3.75 py-2.5 mt-2.5">
        <Text fontFamily="spaceMono" textColor="primary">
          {"// llama-3.1-70b selected · 128K context · free tier available"}
        </Text>
      </div>
    </div>
  );
}

function Step3Preview() {
  return (
    <div className="px-4 md:px-8.75 py-4 md:py-10 flex flex-col gap-4 md:gap-5">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 3 - TRY IT OUT
      </Text>
      <div className="border border-gray-125 bg-gray-110 rounded-md">
        <Text
          as="small"
          fontFamily="spaceMono"
          textColor="gray-75"
          className="px-3.75 py-2.5 text-[10px]"
        >
          PROMPT · LLAMA-3.1-70B-INSTRUCT
        </Text>
        <Divider orientation="horizontal" className="bg-gray-125" />
        <div className="px-3.75 py-5">
          <Text
            fontFamily="spaceMono"
            textColor="gray-75"
            className="bg-gray-125 px-3.75 py-5 rounded-md"
          >
            Summarize the benefits of serverless AI inference for a startup with
            limited DevOps resources.
          </Text>
        </div>
        <Divider orientation="horizontal" className="bg-gray-125 " />
        <div className="flex flex-wrap items-center justify-between gap-2 p-3.75">
          <Text
            fontFamily="spaceMono"
            textColor="gray-75"
            className="text-[10px]"
          >
            press ctrl + enter to run
          </Text>
          <Button
            variant="white-outline"
            className="flex items-center gap-4 px-3.75 py-1.75"
            tabIndex={-1}
            aria-hidden
          >
            <Play className="size-2.5 fill-current" aria-hidden />
            <Text as="h5">Run</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}

function MetricRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between gap-2 text-xs">
      <Text fontFamily="spaceMono" textColor="gray-75" className="text-[10px]">
        {label}
      </Text>
      <Text
        fontFamily="spaceMono"
        textColor={highlight ? "primary" : "gray-75"}
        className="text-[10px]"
      >
        {value}
      </Text>
    </div>
  );
}

function Step4Preview() {
  return (
    <div className="px-4 md:px-8.75 py-4 md:py-10 flex flex-col gap-4 md:gap-5">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 4 - ITERATE AND COMPARE
      </Text>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-gray-125 bg-gray-110 px-3.75 py-2.5">
          <Text
            fontFamily="spaceMono"
            textColor="white"
            className="mb-3 text-[10px]"
          >
            llama-3.1-70b
          </Text>

          <Divider orientation="horizontal" className="bg-gray-125 mb-2.5" />

          <div className="flex flex-col gap-1.25">
            <MetricRow label="latency" value="312ms" highlight />
            <MetricRow label="tokens" value="47" />
            <MetricRow label="cost" value="₹0.003" highlight />
            <div className="flex items-center justify-between gap-2 text-xs">
              <Text
                fontFamily="spaceMono"
                textColor="gray-75"
                className="text-[10px]"
              >
                quality
              </Text>
              <span className="flex gap-1" aria-hidden>
                <Star className="size-2.25 fill-white text-white" />
                <Star className="size-2.25 fill-white text-white" />
                <Star className="size-2.25 fill-white text-white" />
                <Star className="size-2.25 fill-white text-white" />
                <Star className="size-2.25 fill-gray-125 text-white" />
              </span>
            </div>
            <MetricRow label="context" value="128K" />
          </div>
        </div>
        <div className="rounded-md border border-gray-125 bg-gray-110 px-3.75 py-2.5">
          <Text
            fontFamily="spaceMono"
            textColor="white"
            className="mb-3 text-[10px]"
          >
            kimi-k2-instruct
          </Text>

          <Divider orientation="horizontal" className="bg-gray-125 mb-2.5" />

          <div className="flex flex-col gap-1.25">
            <MetricRow label="latency" value="320ms" />
            <MetricRow label="tokens" value="52" />
            <MetricRow label="cost" value="₹0.010" />
            <div className="flex items-center justify-between gap-2 text-xs">
              <Text
                fontFamily="spaceMono"
                textColor="gray-75"
                className="text-[10px]"
              >
                quality
              </Text>
              <span className="flex gap-1 text-primary" aria-hidden>
                <Star className="size-2.25 fill-current" />
                <Star className="size-2.25 fill-current" />
                <Star className="size-2.25 fill-current" />
                <Star className="size-2.25 fill-current" />
                <Star className="size-2.25 fill-current" />
              </span>
            </div>
            <MetricRow label="context" value="128K" />
          </div>
        </div>
      </div>
      <Text
        fontFamily="spaceMono"
        textColor="primary"
        className="px-7.5 py-2.5 border border-green-50 bg-green-100 rounded-md"
      >
        {
          "// llama-70b wins on cost · kimi-k2 wins on quality · pick based on use case"
        }
      </Text>
    </div>
  );
}

function Step5Preview() {
  return (
    <div className="px-4 md:px-8.75 py-4 md:py-10 flex flex-col gap-4 md:gap-5">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 5 - MOVE TO PRODUCTION
      </Text>

      <div className="rounded-md border border-gray-125 bg-gray-110 px-3.75 py-5">
        <Text fontFamily="spaceMono" textColor="gray-75" className="leading-6">
          # from playground to production · one line
        </Text>
        <pre>
          <code>
            <Text
              fontFamily="spaceMono"
              textColor="red-50"
              className="leading-6"
            >
              from
              <Text
                as="span"
                textColor="white"
                variant="p"
                className="mx-0 ml-1 md:mx-0 md:ml-1.5"
              >
                NeevCloud
              </Text>
              <Text
                as="span"
                variant="p"
                className="mx-0 ml-1 md:mx-0 md:ml-1.5"
              >
                import
              </Text>
              <Text
                as="span"
                textColor="white"
                variant="p"
                className="mx-0 ml-1 md:mx-0 md:ml-1.5"
              >
                NeevCloud
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-6"
            >
              client =
              <Text
                as="span"
                textColor="green-10"
                variant="p"
                className="mx-0 ml-1 md:mx-0 md:ml-1.5"
              >
                NeevCloud
              </Text>
              <Text as="span" variant="p" className="mx-0 md:mx-0">
                {`( api_key="sk-neev-...",`}
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-6"
            >
              {`base_url="`}
              <Text
                as="span"
                textColor="blue-40"
                variant="p"
                className="mx-0 md:mx-0"
              >
                https://api.neevcloud.com/v1
              </Text>
              <Text as="span" variant="p" className="mx-0 md:mx-0">
                {`")`}
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-6"
            >
              {`response = client.chat.completion.`}
              <Text
                as="span"
                textColor="green-10"
                variant="p"
                className="mx-0 md:mx-0"
              >
                create
              </Text>
              <Text as="span" variant="p" className="mx-0 md:mx-0">
                {`(`}
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-6"
            >
              &nbsp; {`model=`}
              <Text
                as="span"
                textColor="primary"
                variant="p"
                className="mx-0 md:mx-0"
              >
                {`"meta-llama-3.1-70b-instruct"`}
              </Text>
              <Text as="span" variant="p" className="mx-0 md:mx-0">
                {`,`}
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-6"
            >
              &nbsp; {`messages=[...] )`}
            </Text>
          </code>
        </pre>
      </div>

      <Text
        fontFamily="spaceMono"
        textColor="primary"
        className="px-6 md:px-7.5 py-2.5 border border-green-50 bg-green-100 rounded-md"
      >
        {"// Same model · same API · billed in INR"}
        <br />
        {"// Playground and production are identical"}
        <br />
        {"// No migration, no rewrite, no surprises"}
      </Text>
    </div>
  );
}

export default function ExploreModelsStepPreview({
  stepIndex,
}: ExploreModelsStepPreviewProps) {
  return (
    <div className="w-full bg-black md:rounded-r-lg">
      <WindowChrome />
      {stepIndex === 0 && <Step1Preview />}
      {stepIndex === 1 && <Step2Preview />}
      {stepIndex === 2 && <Step3Preview />}
      {stepIndex === 3 && <Step4Preview />}
      {stepIndex === 4 && <Step5Preview />}
    </div>
  );
}
