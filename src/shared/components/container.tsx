import { cn } from "@/lib/utils";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  alignRight?: boolean;
};

export default function Container({
  children,
  className,
  alignRight = false,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-screen-1xl 2xl:max-w-screen-2xl ",
        alignRight ? "mx-auto w-full px-4" : "mx-auto w-full px-4",
        className
      )}
    >
      {children}
    </div>
  );
}
