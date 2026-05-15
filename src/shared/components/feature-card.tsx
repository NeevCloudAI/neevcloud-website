import { Text } from "@/shared/ui-lib";

export type FeatureCardProps = {
  title: string;
  description: string;
  theme?: "light" | "dark";
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
      className={`flex w-full flex-col overflow-hidden rounded-md ${theme === "dark" ? "bg-gray-105 text-white" : "bg-white text-black"} p-4 md:p-6 ${className}`}
    >
      <div className="h-7 w-7 shrink-0 bg-gray-50"></div>
      <Text as="h3" weight="semibold" className="mt-4">
        {title}
      </Text>
      <Text textColor={theme === "dark" ? "gray-10" : "black"} className="mt-2">
        {description}
      </Text>
    </div>
  );
}
