import { cn } from "@/lib/utils";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  alignRight?: boolean;
  /**
   * "narrow" caps the container at a reading-width column (640px) — for
   * headings and copy that shouldn't stretch full width. "article" caps it
   * at 820px, matching the blog's article body/image column.
   */
  size?: "default" | "narrow" | "article";
};

const SIZE_CLASSES = {
  default: "max-w-screen-1xl 2xl:max-w-screen-2xl",
  narrow: "max-w-160",
  article: "max-w-205",
};

export default function Container({
  children,
  className,
  alignRight = false,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        SIZE_CLASSES[size],
        alignRight ? "mx-auto w-full px-4" : "mx-auto w-full px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
