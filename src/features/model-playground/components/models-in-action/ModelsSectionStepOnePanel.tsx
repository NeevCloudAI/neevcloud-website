import StorageComparisonBar from "@/shared/components/StorageComparisonBar";
import { Text } from "@/shared/ui-lib";
import ModelsSectionLiveBadge from "@/features/model-playground/components/models-in-action/ModelsSectionLiveBadge";
import ModelsSectionPanelLogo from "@/features/model-playground/components/models-in-action/ModelsSectionPanelLogo";
import {
  STEP_ONE_BENCHMARK_RESULTS,
  STEP_ONE_COST_COMPARISON_RESULTS,
} from "@/features/model-playground/data/models-section.data";

const ModelsSectionStepOnePanel = () => {
  return (
    <div className="relative bg-white rounded-xl w-full shadow-sm p-4 md:p-6.25 h-140">
      <ModelsSectionPanelLogo />
      <div className="flex items-center justify-between">
        <Text as="h5" weight="semibold">
          BENCHMARK RESULTS
        </Text>
        <ModelsSectionLiveBadge />
      </div>
      <Text
        fontFamily="spaceMono"
        textColor="gray-90"
        as="h6"
        className="mt-5.5"
      >
        {`// response quality benchmark · your prompt`}
      </Text>

      <div className="flex flex-col gap-2.5 mt-2.5">
        {STEP_ONE_BENCHMARK_RESULTS.map((metric) => (
          <StorageComparisonBar
            key={metric.id}
            metric={metric}
            backgroundColor="bg-gray-10"
          />
        ))}
      </div>
      <Text
        fontFamily="spaceMono"
        textColor="gray-90"
        as="h6"
        className="mt-5.5"
      >
        {`// cost comparison · same 500 tokens`}
      </Text>

      <div className="flex flex-col gap-2.5 mt-2.5">
        {STEP_ONE_COST_COMPARISON_RESULTS.map((metric) => (
          <StorageComparisonBar
            key={metric.id}
            metric={metric}
            backgroundColor="bg-gray-10"
          />
        ))}
      </div>
      <div className="border border-primary-45 bg-primary-40/60 backdrop-blur-md rounded-xl p-4 md:px-5 md:py-3.75 mt-4 md:mt-7.5 space-y-2 z-1 relative">
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
};

export default ModelsSectionStepOnePanel;
