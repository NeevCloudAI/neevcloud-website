import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import { EnterpriseSecurityCardProps } from "../types/enterprise-section-types";

export function EnterpriseSecurityCard({
  category,
  className,
  iconSize = 30,
}: EnterpriseSecurityCardProps) {
  const { title, description, features } = category;

  return (
    <article
      className={cn(
        "flex w-full flex-col rounded-md bg-gray-10 p-4 md:p-10",
        className,
      )}
    >
      <div className="w-fit rounded-md bg-white p-3.75">
        <Image
          src={category.icon}
          alt={title}
          width={iconSize}
          height={iconSize}
        />
      </div>
      <Text as="h3" weight="semibold" className="pt-5 text-3xl">
        {title}
      </Text>
      <Text as="h6" className="mt-2.5">
        {description}
      </Text>
      <ul className="mt-2 flex list-none flex-col gap-1.25 md:mt-5">
        {features.map((feature) => (
          <li
            key={feature.id}
            className="flex items-center flex-wrap gap-2.5 rounded-md bg-white px-3.75 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <Text as="h6" textColor="primary" className="shrink-0">
                •
              </Text>
              <Text as="h6" className="whitespace-nowrap">
                {feature.title}
              </Text>
            </div>
            {feature.badge ? (
              <Text
                as="small"
                textColor="white"
                className="rounded-full bg-primary px-2.5 py-0.75"
              >
                {feature.badge}
              </Text>
            ) : null}
          </li>
        ))}
      </ul>
    </article>
  );
}
