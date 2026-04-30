import { cn } from "@/lib/utils";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "xxl" | "full";
};

const MAX_WIDTH_CLASS = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  xxl: "max-w-screen-2xl",
  full: "max-w-full",
} as const;

export default function Container({
  children,
  className,
  maxWidth = "xxl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8",
        MAX_WIDTH_CLASS[maxWidth],
        className,
      )}
    >
      {children}
    </div>
  );
}
