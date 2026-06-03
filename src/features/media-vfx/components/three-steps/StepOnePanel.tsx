import StorageComparisonBar from "@/shared/components/StorageComparisonBar";
import { Text } from "@/shared/ui-lib";
import { STEP_ONE_ASSETS } from "../../data/four-steps-section.data";

const StepOnePanel = () => {
  return (
    <div className="bg-gray-950 rounded-xl w-full h-68 p-2">
      <div className="flex flex-col gap-5 mt-4">
        {STEP_ONE_ASSETS.map((asset) => (
          <StorageComparisonBar
            key={asset.name}
            metric={{
              id: asset.name,
              label: asset.name,
              displayValue: asset.size,
              seconds: asset.seconds,
              valueColor: "text-gray-90",
              labelColor: "text-white",
              barColor: asset.barColor,
            }}
            backgroundColor="bg-gray-10"
          />
        ))}
      </div>
    </div>
  );
};
export default StepOnePanel;