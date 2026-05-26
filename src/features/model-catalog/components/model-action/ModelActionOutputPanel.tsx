import { Text } from "@/shared/ui-lib";

const ModelActionOutputPanel = () => {
  return (
    <div className="flex flex-1 flex-col px-4 py-4 md:px-5 md:py-5">
      <Text
        fontFamily="spaceMono"
        textColor="gray-75"
        className="uppercase tracking-wide"
      >
        Output
      </Text>

      <div
        className="flex items-center justify-center rounded-md px-4 py-10 md:min-h-60 mb-10"
        aria-live="polite"
        aria-label="Model response output"
      >
        <Text fontFamily="spaceMono" textColor="gray-75" align="center">
          Model response will appear here.
        </Text>
      </div>
    </div>
  );
};

export default ModelActionOutputPanel;
