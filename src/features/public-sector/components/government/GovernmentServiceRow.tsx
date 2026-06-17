import GovernmentServiceRowArrow from "./GovernmentServiceRowArrow";
import { GovernmentServiceRowProps } from "../../types/government-section.types";
import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import Link from "next/link";

const GovernmentServiceRow = ({
  service,
  className,
}: GovernmentServiceRowProps) => {
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
        "group flex w-full items-center justify-between rounded-lg border border-white/12 bg-white/6 p-4 backdrop-blur-md transition-colors hover:bg-primary/12 md:px-10 md:py-7",
        className,
      )}
      aria-label={`${title}: ${description}`}
    >
      <div className="flex items-center gap-4">
        <Text
          as="h3"
          textColor="primary"
          weight="semibold"
          className="text-30px leading-none w-fit"
          aria-hidden="true"
        >
          {index}
        </Text>

        <div className="flex flex-col gap-1.25 ml-4 md:ml-14 whitespace-nowrap">
          <Text as="h3" textColor="white" weight="semibold">
            {title}
          </Text>
          <Text as="small" textColor="gray-04">
            {specs}
          </Text>
        </div>
      </div>

      <Text as="h6" textColor="gray-01" className="ml-4 md:ml-25 max-w-lg">
        {description}
      </Text>

      <div className="flex items-center justify-between gap-5 lg:justify-end lg:gap-6">
        <div className="flex flex-col items-start md:items-end">
          <Text as="h6" textColor="primary">
            {highlight}
          </Text>
          <Text as="h6" textColor="gray-04">
            {highlightSubtext}
          </Text>
        </div>
        <GovernmentServiceRowArrow />
      </div>
    </Link>
  );
};

export default GovernmentServiceRow;
