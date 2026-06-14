import { cn } from "@/lib/utils";
import type { GpuUseCasesCardProps } from "@/shared/types/gpu-use-cases-section.types";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";

const GpuUseCasesCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: GpuUseCasesCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-cloud-gray",
        className
      )}
    >
      <div className="relative aspect-694/280 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 md:px-10 md:py-7.5">
        <Text as="h3" weight="semibold">
          {title}
        </Text>
        <Text as="h6" className="mt-2.5">
          {description}
        </Text>
      </div>
    </article>
  );
};

export default GpuUseCasesCard;
