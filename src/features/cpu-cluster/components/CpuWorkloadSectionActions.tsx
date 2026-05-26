import { Button } from "@/shared/ui-lib";

const CpuWorkloadSectionActions = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4 md:mt-25">
      <Button weight="semibold">View Complete Pricing</Button>
      <Button variant="white" textColor="black" weight="semibold">
        Contact for Custom Plans
      </Button>
    </div>
  );
};

export default CpuWorkloadSectionActions;
