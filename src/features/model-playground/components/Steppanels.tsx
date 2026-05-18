import StorageComparisonBar, {
  StorageComparisonMetric,
} from "@/shared/components/StorageComparisonBar";

import { Text } from "@/shared/ui-lib";
import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";

const stepOneBenchmarkResults: StorageComparisonMetric[] = [
  {
    id: "llama-3.1-70b",
    label: "llama-3.1-70b",
    displayValue: "92 / 100",
    seconds: 92,
    valueColor: "primary-gradient",
    barColor: "bg-gradient-to-r from-[#59D8A7] to-[#022C3C]",
  },
  {
    id: "kimi-k2-instruct",
    label: "kimi-k2-instruct",
    displayValue: "96 / 100",
    seconds: 96,
    valueColor: "primary-gradient",
    barColor: "bg-gradient-to-r from-[#59D8A7] to-[#022C3C]",
  },
  {
    id: "gpt-oss-120b",
    label: "gpt-oss-120b",
    displayValue: "88 / 100",
    seconds: 88,
    valueColor: "primary-gradient",
    barColor: "bg-gradient-to-r from-[#59D8A7] to-[#022C3C]",
  },
];

const costComparisonResults: StorageComparisonMetric[] = [
  {
    id: "llama-3.1-70b",
    label: "llama-3.1-70b",
    displayValue: "₹0.003",
    seconds: 15,
    valueColor: "primary-gradient",
    barColor: "bg-primary-gradient",
  },
  {
    id: "kimi-k2-instruct",
    label: "kimi-k2-instruct",
    displayValue: "₹0.010",
    seconds: 35,
    valueColor: "red-50",
    barColor: "bg-red-50",
  },
];

type StepTwoCardData = {
  id: string;
  label: string;
  value: string;
};

const stepTwoCardData: StepTwoCardData[] = [
  {
    id: "01",
    label: "account required",
    value: "just open browser",
  },
  {
    id: "02",
    label: "credit card",
    value: "free tier active",
  },
  {
    id: "03",
    label: "GPU setup",
    value: "instant access",
  },
  {
    id: "04",
    label: "SDK install",
    value: "work in browser",
  },
  {
    id: "05",
    label: "devOps knowledge",
    value: "anyone can use it",
  },
];

const StepTwoCard = ({ card }: { card: StepTwoCardData }) => {
  return (
    <div className="bg-gray-10 p-3 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Text as="h6" fontFamily="spaceMono" textColor="gray-90">
          {card.id}
        </Text>
        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="gray-90"
          className="line-through"
        >
          {card.label}
        </Text>
      </div>
      <ArrowRight size={16} className="text-gray-90" />
      <Text as="h5" fontFamily="spaceMono" textColor="primary">
        {card.value}
      </Text>
    </div>
  );
};

export function StepOnePanel() {
  return (
    <div className="bg-white rounded-xl w-full shadow-sm p-4">
      <div className="flex items-center justify-between">
        <Text as="h5" weight="semibold">
          BENCHMARK RESULTS
        </Text>
        <Text
          as="small"
          className="bg-primary text-white px-3 py-0.5 rounded-full"
        >
          • Live
        </Text>
      </div>
      <Text
        fontFamily="spaceMono"
        textColor="gray-75"
        as="h6"
        className="mt-4 mb-2"
      >
        {`// response quality benchmark · your prompt`}
      </Text>
      <div className="flex flex-col gap-2">
        {stepOneBenchmarkResults.map((metric) => (
          <StorageComparisonBar
            key={metric.id}
            metric={metric}
            backgroundColor="bg-gray-10"
          />
        ))}
      </div>
      <Text
        fontFamily="spaceMono"
        textColor="gray-75"
        as="h6"
        className="mt-4 mb-2"
      >
        {`// cost comparison · same 500 tokens`}
      </Text>
      <div className="flex flex-col gap-2">
        {costComparisonResults.map((metric) => (
          <StorageComparisonBar
            key={metric.id}
            metric={metric}
            backgroundColor="bg-gray-10"
          />
        ))}
      </div>
      <div className="border-green-50 bg-primary-40 rounded-xl p-4 mt-4 md:mt-8 space-y-2">
        <Text
          fontFamily="spaceMono"
          textColor="gray-90"
        >{`// llama-3.1-70b wins for cost · kimi-k2 wins for quality`}</Text>
        <Text
          fontFamily="spaceMono"
          textColor="gray-90"
        >{`// choose based on your use case`}</Text>
      </div>
    </div>
  );
}

export function StepTwoPanel() {
  return (
    <div className="bg-white rounded-xl w-full shadow-sm p-4">
      <div className="flex items-center justify-between">
        <Text as="h5" weight="semibold">
          ZERO FRICTION ACCESS{" "}
        </Text>
        <Text
          as="small"
          className="bg-primary text-white px-3 py-0.5 rounded-full"
        >
          • Live
        </Text>
      </div>

      <div className="flex flex-col gap-3 mt-4 md:mt-6">
        {stepTwoCardData.map((card) => (
          <StepTwoCard key={card.id} card={card} />
        ))}
      </div>

      <div className="border-gray-55 bg-gray-05 rounded-xl p-4 mt-4 md:mt-8 flex items-center justify-between flex-col">
        <Text fontFamily="spaceMono" textColor="primary" as="h3">
          ≤ 60s
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-90">
          from landing page to first instance
        </Text>
      </div>
    </div>
  );
}

export function StepThreePanel() {
  return (
    <div className="bg-white rounded-xl w-full shadow-sm p-4">
      <div className="flex items-center justify-between">
        <Text as="h5" weight="semibold">
          idea → production
        </Text>
        <Text
          as="small"
          className="bg-primary text-white px-3 py-0.5 rounded-full"
        >
          • Live
        </Text>
      </div>

      <div className="flex flex-col gap-3 mt-4 md:mt-6">
        <div className="bg-gray-10 p-3 rounded-xl flex items-center gap-2">
          <CircleCheck size={24} className="text-primary" />
          <Text as="h6" fontFamily="spaceMono" textColor="gray-90">
            Test prompt in Playground ·
            <Text
              as="span"
              variant="h6"
              fontFamily="spaceMono"
              textColor="primary"
            >
              ~2 min
            </Text>
          </Text>
        </div>

        <div className="bg-gray-10 p-3 rounded-xl flex items-center gap-2">
          <CircleCheck size={24} className="text-primary" />
          <Text as="h6" fontFamily="spaceMono" textColor="gray-90">
            Compare models, pick the winner
          </Text>
        </div>

        <div className="bg-gray-10 p-3 rounded-xl flex items-center gap-2">
          <Text className="bg-tertiary text-white px-2 py-0.5 rounded-full">
            3
          </Text>
          <Text as="h6" fontFamily="spaceMono" textColor="gray-90">
            Get API key → integrate
          </Text>
        </div>

        <div className="bg-primary-5 p-3 rounded-xl flex items-center gap-2">
          <Text className="bg-gray-60 text-gray-90 px-2 py-0.5 rounded-full">
            4
          </Text>
          <Text as="h6" fontFamily="spaceMono" textColor="gray-90">
            Ship to production
          </Text>
        </div>
      </div>

      <div className="bg-black rounded-xl p-4 mt-4 md:mt-8 space-y-1">
        <Text fontFamily="spaceMono" textColor="gray-90">
          # one line change
        </Text>
        <Text fontFamily="spaceMono" textColor="white">
          {`base_url="https://api.neevcloud.com/v1"`}
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-90">
          {`# ↑ that's it. same billing in INR.`}
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
