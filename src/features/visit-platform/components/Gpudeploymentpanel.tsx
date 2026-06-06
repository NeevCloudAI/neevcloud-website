import { Text } from "@/shared/ui-lib";
import ConsoleMockupCard from "./Consolemockupcard";
import { GPU_TERMINAL_CMD } from "../data/console-section.data";
import { GPU_STEPS } from "../data/console-section.data";

const GpuDeploymentPanel = () => {
  return (
    <ConsoleMockupCard title="LAUNCH GPU INSTANCE">
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
              {isDone ? (
                <Text
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
                  textColor="white"
                >
                  ✓
                </Text>
              ) : (
                <Text
                  as="h6"
                  className={`flex h-6 w-6 items-center justify-center rounded-full ${
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
                className="flex-1 text-gray-90"
                fontFamily="spaceMono"
              >
                {step.label}
              </Text>

              {isProcessing && (
                <Text as="h6" textColor="primary" fontFamily="spaceMono">
                  processing...
                </Text>
              )}
            </div>
          );
        })}
      </div>

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
