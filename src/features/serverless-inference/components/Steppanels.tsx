import { Text } from "@/shared/ui-lib";
import {
  STEP_ONE_FILTERS,
  STEP_ONE_MODELS,
  STEP_THREE_BILLING,
  STEP_TWO_TERMINAL_PATH,
} from "../data/three-steps-data";
import Image from "next/image";
import { Search } from "lucide-react";

export function StepOnePanel() {
  return (
    <div className="bg-white rounded-xl w-full relative overflow-hidden">
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-15">
        <Image
          src="/icons/logo.svg"
          alt=""
          aria-hidden="true"
          width={170}
          height={170}
          style={{ filter: "brightness(0)" }}
        />
      </div>

      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 border border-gray-60 rounded-md px-3 py-2 mb-3">
          <Search size={16} className="text-gray-85" />
          <span className="text-gray-85 text-sm">Search 20+ models...</span>
        </div>
      </div>

      <div className="flex gap-2 mb-3 px-4 flex-wrap">
        {STEP_ONE_FILTERS.map((f) => (
          <Text
            key={f}
            className={`px-3 py-1 rounded-full cursor-pointer font-medium ${f === "All" ? "bg-black text-white" : "bg-gray-60 text-gray-75"}`}
          >
            {f}
          </Text>
        ))}
      </div>

      {/* Model rows */}
      <div className="flex flex-col divide-y divide-gray-100">
        {STEP_ONE_MODELS.map((m, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-4 ${
              i === 0
                ? "border-l-3 border-l-primary border-b border-b-gray-200 [background:linear-gradient(to_right,#e6f7f5,transparent)]"
                : "border-b border-b-gray-60"
            }`}
          >
            <div>
              <Text weight="semibold">{m.name}</Text>
              <Text textColor="gray-85" as="h6">
                {m.meta}
              </Text>
            </div>
            <Text as="h6" weight="semibold" textColor="primary">
              {m.price}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StepTwoPanel() {
  return (
    <div className="bg-black rounded-xl overflow-hidden w-full shadow-sm">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-white/30 text-xs font-mono">
          {STEP_TWO_TERMINAL_PATH}
        </span>
      </div>

      {/* Code */}
      <div className="px-2 md:px-5 py-2 md:py-8 font-mono">
        <Text fontFamily="spaceMono" textColor="gray-75">
          # Two-line integration
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
              &nbsp; {`messages=[{ `}
              <Text
                as="span"
                variant="p"
                textColor="primary"
                className="mx-0 md:mx-0"
              >
                {`"role"`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="white"
                className="mx-0 md:mx-0"
              >
                {`:`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="primary"
                className="mr-0 md:mr-0"
              >
                {`"user"`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="white"
                className="mx-0 md:mx-0"
              >
                {`,`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="primary"
                className="mr-0 md:mr-0"
              >
                {`"content"`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="white"
                className="mx-0 md:mx-0"
              >
                {`,`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="primary"
                className="mr-0 md:mr-0"
              >
                {`"Explain`}
              </Text>
            </Text>
            <Text textColor="primary" className="mx-0 md:mx-0 leading-6">
              {`serverless inference."`}
              <Text as="span" variant="p" textColor="white">
                {`}] )`}
              </Text>
            </Text>
            <Text
              as="span"
              textColor="green-10"
              variant="p"
              className="mx-0 md:mx-0 leading-6"
            >
              Print
              <Text
                as="span"
                variant="p"
                fontFamily="spaceMono"
                textColor="white"
                className="mx-0 md:mx-0"
              >
                (response.choices[0].message.content)
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="gray-75"
              className="leading-6"
            >
              # ✓ 200 OK · 412ms · 30 tokens # Your existing OpenAI code just
              works.
            </Text>
          </code>
        </pre>
      </div>
    </div>
  );
}

export function StepThreePanel() {
  const { title, subtitle, rows, total, totalLabel, totalSub } =
    STEP_THREE_BILLING;

  return (
    <div className="bg-white rounded-xl w-full shadow-sm relative overflow-hidden">
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-15">
        <Image
          src="/icons/logo.svg"
          alt=""
          aria-hidden="true"
          width={170}
          height={170}
          style={{ filter: "brightness(0)" }}
        />
      </div>
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-60">
        <Text as="h4" weight="semibold">
          {title}
        </Text>
        <Text textColor="gray-85" className="my-1">
          {subtitle}
        </Text>
      </div>

      {/* Rows */}
      <div className="flex flex-col px-5 mb-5">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-4 border-b border-gray-60 "
          >
            <div>
              <Text as="h6" weight="semibold">
                {row.label}
              </Text>
              <Text textColor="gray-85" as="small">
                {row.sub}
              </Text>
            </div>
            <Text as="h6" textColor={row.neg ? "primary" : "black"}>
              {row.value}
            </Text>
          </div>
        ))}
      </div>

      {/* Total box — light teal background as in image */}
      <div className="mx-5 mb-5 bg-primary-40 border border-primary-50 rounded-lg p-4 text-center">
        <Text as="small" weight="semibold">
          {totalLabel}
        </Text>
        <Text as="h4" weight="semibold">
          {total}
        </Text>
        <Text textColor="gray-85" as="small">
          {totalSub}
        </Text>
      </div>
    </div>
  );
}

export const STEP_PANELS = [
  <StepOnePanel key="step-1" />,
  <StepTwoPanel key="step-2" />,
  <StepThreePanel key="step-3" />,
];
