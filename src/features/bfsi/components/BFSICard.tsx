import Image from "next/image";
import { Text } from "@/shared/ui-lib";
import { BFSICard as BFSICardType } from "../types/bfsi-applications.types";
import { cn } from "@/lib/utils";

export default function BFSICard({
  badge,
  icon,
  title,
  description,
  variant = "default",
  imageSrc,
}: BFSICardType) {
  const isFlagship = variant === "flagship";
  const isEnterprise = variant === "enterprise";

  return (
    <div
      className={cn(
        "rounded-2xl border p-5 md:p-6 flex flex-col gap-4",
        isFlagship && "border-gray-20 bg-white row-span-2",
        isEnterprise && "border-gray-90 bg-gray-100 text-white",
        !isFlagship && !isEnterprise && "border-gray-20 bg-white",
      )}
    >
      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "p-2 rounded-lg w-fit",
            isEnterprise ? "bg-gray-90" : "bg-gray-10",
          )}
        >
          <Image src={icon} alt={title} width={28} height={28} />
        </div>
        {badge && (
          <Text
            fontFamily="spaceMono"
            className={cn(
              "text-lg",
              isEnterprise ? "text-white" : "text-black",
            )}
          >
            {badge}
          </Text>
        )}
      </div>

      {/* Title */}
      <Text
        as="h3"
        weight="semibold"
        className={cn(isEnterprise ? "text-white" : "")}
      >
        {title}
      </Text>

      {/* Description */}
      <Text
        as="h6"
        className={cn(isEnterprise ? "text-white" : "text-black")}
      >
        {description}
      </Text>

      {/* Image for flagship */}
      {isFlagship && imageSrc && (
        <div className="mt-auto">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={300}
            className="w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
