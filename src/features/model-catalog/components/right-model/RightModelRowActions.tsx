import { Button } from "@/shared/ui-lib";

const RightModelRowActions = () => {
  return (
    <div className="flex items-center gap-1.25">
      <Button fontFamily="spaceMono" className="px-2.5 py-1.75 text-xs">
        Try
      </Button>
      <Button
        variant="white-outline"
        fontFamily="spaceMono"
        className="px-2.5 py-1.75 text-xs border-gray-85 text-gray-85"
      >
        Docs
      </Button>
      <Button
        variant="white-outline"
        fontFamily="spaceMono"
        className="px-2.5 py-1.75 text-xs border-gray-85 text-gray-85"
      >
        Deploy
      </Button>
    </div>
  );
};

export default RightModelRowActions;
