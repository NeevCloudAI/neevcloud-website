import ServiceRowArrow from "./GovernmentServiceRowArrow";
import { ServiceRowProps } from "../../types/service-section.types";
import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import Link from "next/link";

const ServiceRow = ({ service, className }: ServiceRowProps) => {
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
        "group rounded-lg border border-white-10 bg-white-5 p-4 backdrop-blur-md transition-colors hover:bg-primary-120/80",
        "flex w-full flex-col gap-2",
        "md:grid md:grid-cols-[48px_320px_minmax(0,450px)_auto] md:items-center md:gap-x-8 md:gap-y-0 md:px-8 md:py-7",
        className
      )}
      aria-label={`${title}: ${description}`}
    >
      {/* Col 1 - index */}
      <Text
        as="h2"
        textColor="primary"
        weight="semibold"
        className="hidden text-[30px] leading-none md:block"
        aria-hidden="true"
      >
        {index}
      </Text>

      {/* Col 2 - title + specs */}
      <div className="flex flex-col gap-1.25">
        {/* Index only visible on mobile, inline */}
        <div className="flex items-center gap-3 md:contents">
          <Text
            as="h2"
            textColor="primary"
            weight="semibold"
            className="text-[30px] leading-none md:hidden"
            aria-hidden="true"
          >
            {index}
          </Text>
          <Text as="h3" textColor="white" weight="semibold">
            {title}
          </Text>
        </div>
        <Text as="small" textColor="gray-75">
          {specs}
        </Text>
      </div>

      {/* Col 3 - description */}
      <Text as="h6" textColor="gray-60">
        {description}
      </Text>

      {/* Col 4 - highlight + arrow */}
      <div className="flex items-center justify-between gap-5 lg:justify-end lg:gap-8">
        <div className="flex flex-col items-start md:items-end">
          <Text as="h6" textColor="primary">
            {highlight}
          </Text>
          <Text as="h6" textColor="gray-75">
            {highlightSubtext}
          </Text>
        </div>
        <ServiceRowArrow />
      </div>
    </Link>
  );
};

export default ServiceRow;
