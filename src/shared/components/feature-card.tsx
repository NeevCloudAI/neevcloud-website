import { Text } from "@/shared/ui-lib";

export type FeatureCardProps = {
  title: string;
  description: string;
  theme?: "light" | "dark";
};

export function FeatureCard({
  title,
  description,
  theme = "light",
}: FeatureCardProps) {
  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-md ${theme === "dark" ? "bg-gray-100 text-white" : "bg-white text-black"} p-4 md:p-6`}
    >
      <div className="h-7 w-7 shrink-0 bg-gray-50"></div>
      <Text as="h3" weight="semibold" className="mt-4">
        {title}
      </Text>
      <Text textColor="gray-10">{description}</Text>
    </div>
  );
}
