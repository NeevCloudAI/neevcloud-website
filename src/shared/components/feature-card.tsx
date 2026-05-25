import { Text } from "@/shared/ui-lib";

export type FeatureCardProps = {
  title: string;
  description: string;
  theme?: "light" | "dark" | "transparent";
  className?: string;
};

export function FeatureCard({
  title,
  description,
  theme = "light",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-md ${theme === "transparent" ? "bg-white-5 backdrop-blur-sm" : theme === "dark" ? "bg-gray-105 text-white" : "bg-white text-black"} p-4 md:p-7.5 ${className}`}
    >
      <div className="h-7.5 w-7.5 shrink-0 bg-gray-50"></div>
      <Text
        as="h3"
        weight="semibold"
        className="mt-5"
        textColor={
          theme === "transparent" || theme === "dark" ? "white" : "black"
        }
      >
        {title}
      </Text>
      <Text
        as="h6"
        textColor={
          theme === "transparent"
            ? "gray-10"
            : theme === "dark"
              ? "gray-10"
              : "black"
        }
        className="mt-2.5"
      >
        {description}
      </Text>
    </div>
  );
}
