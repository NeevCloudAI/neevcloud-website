import StorageComparisonBar from "@/shared/components/StorageComparisonBar";
import { STEP_ONE_ASSETS } from "../../data/four-steps-section.data";

const StepOnePanel = () => {
  return (
    <div className="bg-gray-950 rounded-xl w-full p-4 md:px-6.25 md:py-7.5">
      <div className="flex flex-col gap-5">
        {STEP_ONE_ASSETS.map((asset) => (
          <StorageComparisonBar
            key={asset.name}
            metric={{
              id: asset.name,
              label: asset.name,
              displayValue: asset.size,
              seconds: asset.seconds,
              valueColor: "text-gray-05",
              labelColor: "text-white",
              barColor: asset.barColor,
            }}
            backgroundColor="bg-cloud-gray"
          />
        ))}
      </div>
    </div>
  );
};
export default StepOnePanel;
