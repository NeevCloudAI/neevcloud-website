import { cn } from "@/lib/utils";
import type { GpuWhyChooseNeevcloudCardProps } from "@/shared/types/gpu-why-choose-neevcloud-section.types";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";

const GpuWhyChooseNeevcloudCard = ({
  title,
  description,
  icon,
  className,
}: GpuWhyChooseNeevcloudCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full w-full flex-col items-center overflow-hidden rounded-md bg-white-5 border border-black-30 backdrop-blur-md p-4 text-center md:p-7.5",
        className
      )}
    >
      <Image src={icon} alt="" width={42} height={42} aria-hidden="true" />
      <Text as="h4" weight="semibold" textColor="white" className="mt-5">
        {title}
      </Text>
      <Text as="h6" textColor="gray-10" className="mt-2.5" weight="regular">
        {description}
      </Text>
    </article>
  );
};

export default GpuWhyChooseNeevcloudCard;
