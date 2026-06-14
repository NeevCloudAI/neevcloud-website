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
        "bg-black/12 shrink-0",
        orientation === "vertical" ? "min-h-4 w-px " : "min-w-4 h-px w-full ",
        className
      )}
    />
  );
};

export { Divider };
