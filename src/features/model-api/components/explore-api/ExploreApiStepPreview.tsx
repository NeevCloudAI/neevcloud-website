import { EXPLORE_API_MOCK_URL } from "@/features/model-api/constants/explore-api-section.constants";
import { EXPLORE_API_RESPONSE_META_ROWS } from "@/features/model-api/data/explore-api-step-preview.data";
import type { ExploreApiStepPreviewProps } from "@/features/model-api/types/explore-api-section.types";
import { Text } from "@/shared/ui-lib";

function WindowChrome() {
  return (
    <div className="flex flex-row items-center justify-between gap-1.25 border-b border-gray-100 p-3.75">
      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Text
        as="small"
        textColor="gray-75"
        className="truncate text-right text-[10px]"
      >
        {EXPLORE_API_MOCK_URL}
      </Text>
    </div>
  );
}

function Step1Preview() {
  return (
    <div className="p-4 md:px-8.75 md:py-10 flex flex-col gap-4 md:gap-5">
      <Text textColor="gray-75" fontFamily="spaceMono">
        STEP 1 - GET API CREDENTIALS
      </Text>

      <div className="rounded-md border border-gray-125 bg-gray-110 p-2.5 md:px-5 md:py-2.5">
        <Text fontFamily="spaceMono" textColor="gray-75">
          $
          <Text
            as="span"
            textColor="white"
            variant="p"
            className="mr-0 md:mr-0"
          >
            export NEEV_KEY=
          </Text>
          <Text
            as="span"
            textColor="gray-75"
            variant="p"
            className="bg-red-100 px-2 py-0.5 rounded-md"
          >
            sk_live_a4b8…f29c
          </Text>
          <Text
            as="span"
            textColor="primary"
            variant="p"
            className="mx-0 md:mx-0"
          >
            copied ✔
          </Text>
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-75">
          →
          <Text as="span" textColor="white" variant="p">
            key active in 0.4s
          </Text>
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
        step 3 - make your first request
      </Text>
      <div className="border border-gray-125 bg-gray-110 rounded-md px-3.75 py-2.5 ">
        <Text fontFamily="spaceMono" textColor="primary" className="py-1">
          POST
          <Text as="span" textColor="white" variant="p">
            /v1/predict
          </Text>
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-75" className="py-1">
          Authorization: Bearer ***
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-75" className="py-1">
          Content-Type: application/json
        </Text>
        <Text fontFamily="spaceMono" textColor="white" className="py-1">
          {`{`}
        </Text>
        <Text fontFamily="spaceMono" textColor="white" className="py-1">
          {`“model”: “llama-3.1-70b-instruct”,`}
        </Text>
        <Text fontFamily="spaceMono" textColor="white" className="py-1">
          {`“input”: “Summarize Q3 call”`}
        </Text>
        <Text fontFamily="spaceMono" textColor="white" className="py-1">
          {`}`}
        </Text>
        <Text
          fontFamily="spaceMono"
          as="small"
          textColor="red-50"
          className="py-1"
        >
          ↑ sending
        </Text>
      </div>
    </div>
  );
}

function ResponseMetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center px-3.75 py-2.5 md:grid-cols-[6.5rem_minmax(0,1fr)] md:gap-x-8">
      <Text fontFamily="spaceMono" textColor="gray-75">
        {label}
      </Text>
      <Text fontFamily="spaceMono" textColor="white" className="min-w-0">
        {value}
      </Text>
    </div>
  );
}

function Step4Preview() {
  return (
    <div className="px-4 md:px-8.75 py-4 md:py-10 flex flex-col gap-4 md:gap-5">
      <Text textColor="gray-75" fontFamily="spaceMono">
        step 4 - handle responses
      </Text>
      <div className="divide-y divide-gray-125 rounded-md border border-gray-125 bg-gray-110">
        {EXPLORE_API_RESPONSE_META_ROWS.map((row) => (
          <ResponseMetaRow
            key={row.label}
            label={row.label}
            value={row.value}
          />
        ))}
        <Text fontFamily="spaceMono" textColor="primary" className="p-4">
          ✓ 200 OK
        </Text>
      </div>
    </div>
  );
}

export default function ExploreApiStepPreview({
  stepIndex,
}: ExploreApiStepPreviewProps) {
  return (
    <div className="w-full bg-black md:min-h-0 md:rounded-r-lg h-120">
      <WindowChrome />
      {stepIndex === 0 && <Step1Preview />}
      {stepIndex === 1 && <Step2Preview />}
      {stepIndex === 2 && <Step3Preview />}
      {stepIndex === 3 && <Step4Preview />}
    </div>
  );
}
