import { cn } from "@/lib/utils";

type PurposeFlowConnectorProps = {
  className?: string;
};

const PurposeFlowConnector = ({ className }: PurposeFlowConnectorProps) => {
  return (
    <div
      className={cn("absolute top-[95%] flex flex-col items-center", className)}
      aria-hidden="true"
    >
      <div className="z-3 h-2 w-2 rounded-full bg-primary" />
      <div className="h-2 w-px bg-gray-01 md:h-10" />
      <div className="h-2 w-2 rounded-full bg-primary" />
    </div>
  );
};

export default PurposeFlowConnector;
