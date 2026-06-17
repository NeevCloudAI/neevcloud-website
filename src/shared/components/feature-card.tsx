import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import { type LucideIcon } from "@/shared/icons/lucide-icon-map";

export type FeatureCardProps = {
  title: string;
  description: string;
  image?: string;
  lucideIcon?: LucideIcon;
  theme?: "light" | "dark" | "transparent";
  className?: string;
};

export function FeatureCard({
  title,
  description,
  image,
  lucideIcon: Icon,
  theme = "light",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`flex w-full h-full flex-col overflow-hidden rounded-md ${theme === "transparent" ? "bg-white/6 border border-white/12 backdrop-blur-md" : theme === "dark" ? "bg-white/6 border border-white/12 text-white" : "bg-white text-black"} p-4 md:p-7.5 ${className}`}
    >
      {image ? (
        <Image src={image} alt={title} width={30} height={30} />
      ) : Icon ? (
        <Icon className="text-primary size-8.5" strokeWidth={1.5} />
      ) : (
        <div className="h-8 w-8 shrink-0 bg-gray-01"></div>
      )}
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
            ? "cloud-gray"
            : theme === "dark"
              ? "cloud-gray"
              : "black"
        }
        className="mt-2.5"
      >
        {description}
      </Text>
    </div>
  );
}
