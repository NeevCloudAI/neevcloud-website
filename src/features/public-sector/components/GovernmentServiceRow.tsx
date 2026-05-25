import type { GovernmentServiceItem } from "@/features/public-sector/data/government-section-data";
import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type GovernmentServiceRowProps = {
  service: GovernmentServiceItem;
  className?: string;
};

export default function GovernmentServiceRow({
  service,
  className,
}: GovernmentServiceRowProps) {
  const {
    index,
    title,
    specs,
    description,
    highlight,
    highlightSubtext,
    href,
  } = service;

  return (
    <Link
      href={href}
      className={cn(
        "group flex w-full items-center justify-between rounded-lg border border-white-10 bg-white-5 p-4 backdrop-blur-md transition-colors hover:bg-primary-120/80 md:px-10 md:py-7",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <Text
          as="h2"
          textColor="primary"
          weight="semibold"
          className="text-[30px] leading-none w-fit"
        >
          {index}
        </Text>

        <div className="flex flex-col gap-1.25 ml-4 md:ml-14 whitespace-nowrap">
          <Text as="h3" textColor="white" weight="semibold">
            {title}
          </Text>
          <Text as="small" textColor="gray-75">
            {specs}
          </Text>
        </div>
      </div>

      <Text as="h6" textColor="gray-60" className="ml-4 md:ml-25 max-w-lg">
        {description}
      </Text>

      <div className="flex items-center justify-between gap-5 lg:justify-end lg:gap-6">
        <div className="flex flex-col items-start md:items-end">
          <Text as="h6" textColor="primary">
            {highlight}
          </Text>
          <Text as="h6" textColor="gray-75">
            {highlightSubtext}
          </Text>
        </div>
        <span className="inline-flex rounded-full border border-primary bg-transparent p-3 transition-colors group-hover:border-primary group-hover:bg-primary">
          <ArrowRight
            size={18}
            strokeWidth={2.5}
            className="text-primary transition-colors group-hover:text-primary-80"
          />
        </span>
      </div>
    </Link>
  );
}
