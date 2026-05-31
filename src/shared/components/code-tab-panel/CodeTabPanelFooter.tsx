import { Divider, Text } from "@/shared/ui-lib";

const CodeTabPanelFooter = () => {
  return (
    <>
      <Divider orientation="horizontal" className="mb-4 bg-black-5" />
      <div className="flex items-center justify-end pb-4 pr-4">
        <Text textColor="primary" fontFamily="spaceMono" className="underline">
          View Complete Documentation
        </Text>
      </div>
    </>
  );
};

export default CodeTabPanelFooter;
