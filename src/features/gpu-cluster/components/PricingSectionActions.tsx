import { Button } from "@/shared/ui-lib";

const PricingSectionActions = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-8 md:mt-25">
      <Button>View Complete Pricing</Button>
      <Button variant="white" textColor="black">
        Contact for Custom Plans
      </Button>
    </div>
  );
};

export default PricingSectionActions;
