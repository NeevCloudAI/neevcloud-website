import { cn } from "@/lib/utils";

const Divider = ({
  className,
  orientation = "vertical",
}: {
  className?: string;
  orientation?: "vertical" | "horizontal";
}) => {
  return (
    <div
      className={cn(
        "bg-black-10 shrink-0",
        orientation === "vertical"
          ? "h-full min-h-4 w-px"
          : "w-full min-w-4 h-px",
        className,
      )}
    />
  );
};

export { Divider };
