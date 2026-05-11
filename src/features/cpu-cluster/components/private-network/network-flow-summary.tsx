import { FlowBand } from "@/features/cpu-cluster/components/private-network/flow-band";
import {
  FLOW_SUMMARY_BADGE_TEXT,
  FLOW_SUMMARY_REGION_TEXT,
} from "@/features/cpu-cluster/data/private-network-section-data";
import { Text } from "@/shared/ui-lib";

export function NetworkFlowSummary() {
  return (
    <div className="mt-4 flex flex-1 flex-col items-center justify-start gap-2 md:gap-6">
      <Text
        as="small"
        className="w-fit rounded-full bg-primary px-4 py-1 text-white"
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
}
