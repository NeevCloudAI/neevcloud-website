import ConsoleMockupCard from "../console/Consolemockupcard";
import { GPU_STEPS, GPU_TERMINAL_CMD } from "../../data/console-section.data";
import { Text } from "@/shared/ui-lib";

/**
 * Right-panel mockup for the "GPU Deployment" tab.
 * Shows step-by-step launch flow with statuses + terminal command.
 */
const GpuDeploymentPanel = () => {
  return (
    <ConsoleMockupCard title="LAUNCH GPU INSTANCE" className="pb-0">
      <div className="flex flex-col gap-2 mb-4 mt-6.5">
        {GPU_STEPS.map((step, i) => {
          const isDone = step.status === "done";
          const isProcessing = step.status === "processing";
          const isPending = step.status === "pending";

          return (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-gray-20 p-5 bg-gray-10 mx-7.5"
            >
              {/* Status indicator */}
              {isDone ? (
                <Text
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary"
                  textColor="white"
                >
                  ✓
                </Text>
              ) : (
                <Text
                  as="h6"
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    isPending
                      ? "bg-gray-60 text-gray-90"
                      : "bg-tertiary text-white"
                  }`}
                >
                  {step.number}
                </Text>
              )}

              <Text
                as="h6"
                className={`flex-1 ${
                  isDone ? "text-gray-90" : "text-gray-90 font-medium font-mono"
                }`}
              >
                {step.label}
              </Text>

              {isProcessing && (
                <Text as="h6" textColor="primary">
                  processing...
                </Text>
              )}
            </div>
          );
        })}
      </div>

     
      {/* Terminal */}
      <div className="mx-7.5 mt-4 pb-7.5">
        <div className="rounded-lg bg-black">
          <Text className="font-mono text-primary py-2.5 px-5">
            {GPU_TERMINAL_CMD}
          </Text>
        </div>
      </div>
    </ConsoleMockupCard>
  );
};

export default GpuDeploymentPanel;
