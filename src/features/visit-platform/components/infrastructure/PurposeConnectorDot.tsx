import { cn } from "@/lib/utils";

type PurposeConnectorDotProps = {
  className?: string;
};

const PurposeConnectorDot = ({ className }: PurposeConnectorDotProps) => {
  return (
    <div
      className={cn("absolute h-2 w-2 rounded-full bg-primary", className)}
      aria-hidden="true"
    />
  );
};

export default PurposeConnectorDot;
