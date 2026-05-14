import { cn } from "@/lib/utils";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "1xl" | "xxl" | "full";
  alignRight?: boolean;
};

const MAX_WIDTH_CLASS = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "1xl": "max-w-screen-1xl",
  xxl: "max-w-screen-2xl",
  full: "max-w-full",
} as const;

export default function Container({
  children,
  className,
  maxWidth = "1xl",
  alignRight = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        alignRight ? "mx-auto w-full px-4" : "mx-auto w-full px-4",
        MAX_WIDTH_CLASS[maxWidth],
        className,
      )}
    >
      {children}
    </div>
  );
}
