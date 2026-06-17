import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import type { SecurityByDesignCardProps } from "../types/security-by-design-section.types";

const SecurityByDesignCard = ({
  item,
  className,
}: SecurityByDesignCardProps) => {
  const { title, imageSrc, imageAlt, features } = item;

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-md bg-cloud-gray shadow-sm",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={300}
        className="w-full"
      />

      <div className="flex flex-1 flex-col p-4 md:px-5 md:py-10">
        <Text as="h3" weight="semibold" className="md:text-30px">
          {title}
        </Text>
        <ul className="m-0 mt-5 md:mt-7.5 flex list-none flex-col gap-5 md:gap-7.5 p-0">
          {features.map((feature) => (
            <li key={feature.id} className="flex flex-col">
              <div className="flex items-center gap-5">
                <Image
                  src={feature.iconSrc}
                  alt={feature.iconAlt}
                  width={30}
                  height={30}
                />
                <Text as="h4" weight="semibold">
                  {feature.title}
                </Text>
              </div>
              <Text as="h6" className="mt-2.5">
                {feature.description}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default SecurityByDesignCard;
