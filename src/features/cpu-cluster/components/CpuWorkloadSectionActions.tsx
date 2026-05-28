import { Button } from "@/shared/ui-lib";

const CpuWorkloadSectionActions = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-8 md:mt-25">
      <Button weight="semibold">Deploy Instance</Button>
    </div>
  );
};

export default CpuWorkloadSectionActions;
