import FlowBand from "@/features/cpu-cluster/components/private-network/FlowBand";
import {
  FLOW_SUMMARY_BADGE_TEXT,
  FLOW_SUMMARY_REGION_TEXT,
} from "@/features/cpu-cluster/constants/private-network-section.constants";
import { Text } from "@/shared/ui-lib";

const NetworkFlowSummary = () => {
  return (
    <div
      className="mt-4 flex flex-1 flex-col items-center justify-start gap-2 md:gap-7.75"
      aria-label="Network flow between CPU and GPU instances"
    >
      <Text
        as="small"
        className="w-fit rounded-full bg-primary px-4.5 py-1.25 text-white"
      >
        {FLOW_SUMMARY_BADGE_TEXT}
      </Text>
      <div className="flex w-full flex-row justify-center gap-3 md:flex-col">
        <FlowBand direction="forward" />
        <FlowBand direction="backward" />
      </div>
      <Text as="h6">{FLOW_SUMMARY_REGION_TEXT}</Text>
    </div>
  );
};

export default NetworkFlowSummary;
