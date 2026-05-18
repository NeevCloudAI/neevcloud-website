import { Button, Divider, Text } from "@/shared/ui-lib";
import {DollarSignIcon, Play, Star, MoveRight, Check, ArrowUp} from "lucide-react";

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
    <div className="px-4 md:px-8 py-4 flex flex-col gap-4 md:gap-6">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 1 - GET API CREDENTIALS
      </Text>

      <div className="border border-gray-125 bg-gray-110 rounded-md p-4 md:p-6 flex flex-col gap-3">
        {/* Line 1 */}
        <div className="flex flex-wrap items-center gap-2">
          <Text
            fontFamily="spaceMono"
            textColor="gray-75"
            className="text-xs md:text-sm"
          >
            $
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="white"
            className="text-xs md:text-sm"
          >
            export NEEV_KEY=
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="gray-75"
            className="text-xs md:text-sm bg-red-900/20 px-2 py-0.5 rounded"
          >
            sk_live_a4b8…f29c
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="primary"
            className="text-xs md:text-sm"
          >
            copied
          </Text>
          <Check size={13} className="text-primary shrink-0" aria-hidden />
        </div>

        {/* Line 2 */}
        <div className="flex items-center gap-2">
          <MoveRight size={13} className="text-gray-75 shrink-0" aria-hidden />
          <Text
            fontFamily="spaceMono"
            textColor="white"
            className="text-xs md:text-sm"
          >
            key active in 0.4s
          </Text>
        </div>
      </div>
    </div>
  );
}

function Step2Preview() {
  return (
    <div className="px-4 md:px-8 py-4 flex flex-col gap-4 md:gap-6">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 2 - CHOOSE YOUR MODEL
      </Text>
      <div className="flex flex-col gap-2">
        <div className="rounded-md border border-green-50 bg-green-100 p-3 md:p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <Text fontFamily="spaceMono" textColor="primary">
                llama-3.1-70b-instruct
              </Text>
              <Text as="small" fontFamily="spaceMono" textColor="gray-75">
                Meta · 120K context
              </Text>
            </div>
            <Text as="small" fontFamily="spaceMono" textColor="primary">
              ₹22.55/1M
            </Text>
          </div>
        </div>

        <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <Text fontFamily="spaceMono" textColor="gray-75">
                kimi-k2-instruct
              </Text>
              <Text as="small" fontFamily="spaceMono" textColor="gray-75">
                Moonshot · 128K context
              </Text>
            </div>
            <Text as="small" fontFamily="spaceMono" textColor="primary">
              ₹18.40/1M
            </Text>
          </div>
        </div>

        <div className="rounded-md border border-gray-125 bg-gray-110 p-3 md:p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <Text fontFamily="spaceMono" textColor="gray-75">
                deepseek-coder-v2
              </Text>
              <Text as="small" fontFamily="spaceMono" textColor="gray-75">
                DeepSeek · 128K
              </Text>
            </div>
            <Text as="small" fontFamily="spaceMono" textColor="primary">
              ₹10.80/1M
            </Text>
          </div>
        </div>
      </div>
      <div className="rounded-md border border-green-50 bg-green-100 p-3 md:p-4">
        <Text fontFamily="spaceMono" textColor="primary">
          {"// llama-3.1-70b selected · 128K context · free tier available"}
        </Text>
      </div>
    </div>
  );
}

function Step3Preview() {
  return (
    <div className="px-4 md:px-8 py-4 flex flex-col gap-4 md:gap-6">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 3 - MAKE YOUR FIRST REQUEST
      </Text>

      <div className="border border-gray-125 bg-gray-110 rounded-md flex flex-col gap-4 p-4 md:p-6">
        {/* POST line */}
        <div className="flex items-center gap-2">
          <Text fontFamily="spaceMono" textColor="primary">
            POST
          </Text>
          <Text fontFamily="spaceMono" textColor="white">
            /v1/predict
          </Text>
        </div>

        {/* Headers */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Text fontFamily="spaceMono" textColor="gray-75">
              Authorization:
            </Text>
            <Text fontFamily="spaceMono" textColor="gray-75">
              Bearer ***
            </Text>
          </div>
          <div className="flex gap-2">
            <Text fontFamily="spaceMono" textColor="gray-75">
              Content-Type:
            </Text>
            <Text fontFamily="spaceMono" textColor="gray-75">
              application/json
            </Text>
          </div>
        </div>

        {/* JSON Body */}
        <div className="flex flex-col gap-3">
          <Text fontFamily="spaceMono" textColor="white">
            {"{"}
          </Text>
          <div className="flex flex-col gap-3 pl-2">
            <Text fontFamily="spaceMono" textColor="white">
              "model": "llama-3.1-70b-instruct",
            </Text>
            <Text fontFamily="spaceMono" textColor="white">
              "input": "Summarize Q3 call"
            </Text>
          </div>
          <Text fontFamily="spaceMono" textColor="white">
            {"}"}
          </Text>
        </div>

        {/* Sending */}
        <div className="flex items-center gap-2">
          <ArrowUp size={14} className="text-red-50 shrink-0" aria-hidden />
          <Text fontFamily="spaceMono" textColor="red-50">
            sending
          </Text>
        </div>
      </div>
    </div>
  );
}



function Step4Preview() {
  return (
    <div className="px-4 md:px-8 py-4 flex flex-col gap-4 md:gap-6">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 4 - HANDLE RESPONSE
      </Text>

      <div className="border border-gray-125 rounded-md flex flex-col">
        {/* Rows */}
        {[
          { label: "id", value: "req_8f2a91c4" },
          { label: "model", value: "llama-3.1-70b-instruct" },
          { label: "confidence", value: "0.94" },
          { label: "latency", value: "87ms" },
          { label: "tokens", value: "312 in / 148 out" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex gap-8 px-4 md:px-6 py-3 md:py-4 border-b border-gray-125"
          >
            <Text
              fontFamily="spaceMono"
              textColor="gray-75"
              className="w-32 shrink-0"
            >
              {item.label}
            </Text>
            <Text fontFamily="spaceMono" textColor="white">
              {item.value}
            </Text>
          </div>
        ))}

        {/* 200 OK */}
        <div className="flex items-center gap-2 px-4 md:px-6 py-3 md:py-4">
          <Check size={14} className="text-primary shrink-0" aria-hidden />
          <Text fontFamily="spaceMono" textColor="primary">
            200 OK
          </Text>
        </div>
      </div>
    </div>
  );
}


export default function ExploreModelsStepPreview({
  stepIndex,
}: ExploreModelsStepPreviewProps) {
  return (
    <div className="w-full bg-black md:rounded-r-lg md:min-h-[432px]">
      <WindowChrome />
      {stepIndex === 0 && <Step1Preview />}
      {stepIndex === 1 && <Step2Preview />}
      {stepIndex === 2 && <Step3Preview />}
      {stepIndex === 3 && <Step4Preview />}
    </div>
  );
}
