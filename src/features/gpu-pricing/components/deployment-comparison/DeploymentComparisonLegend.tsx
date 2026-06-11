import { Text } from "@/shared/ui-lib";
import { CircleCheckBig } from "lucide-react";
import {
  DEPLOYMENT_COMPARISON_HARDWARE_LEGEND,
  DEPLOYMENT_COMPARISON_LEGEND_ITEMS,
} from "../../data/deployment-comparison-section.data";

const LEGEND_ICON_STYLES = {
  container: "text-primary-210",
  vm: "text-primary",
} as const;

const DeploymentComparisonLegend = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        {DEPLOYMENT_COMPARISON_LEGEND_ITEMS.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <CircleCheckBig
              aria-hidden="true"
              className={`size-4 ${LEGEND_ICON_STYLES[item.variant]}`}
            />
            <Text className="text-white/60">{item.label}</Text>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-primary-210" aria-hidden="true">
          •
        </span>
        <Text className="text-white/60">
          {DEPLOYMENT_COMPARISON_HARDWARE_LEGEND}
        </Text>
      </div>
    </div>
  );
};

export default DeploymentComparisonLegend;
