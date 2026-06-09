import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import type { NumberedDetailCardProps } from "@/shared/types/numbered-detail-card.types";

const NumberedDetailCard = ({
  label,
  title,
  number,
  description,
  className,
}: NumberedDetailCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md border border-gray-05 bg-white p-4 md:p-5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <Text as="small" textColor="primary" fontFamily="spaceMono">
            {label}
          </Text>
          <Text as="h3" className="mt-2.5 max-w-xs" weight="semibold">
            {title}
          </Text>
        </div>
        <Text
          as="h1"
          className="shrink-0 text-[3rem] md:text-[5rem] lg:text-[7rem]"
          fontFamily="spaceMono"
          textColor="primary-85"
          weight="normal"
          aria-hidden="true"
        >
          {number}
        </Text>
      </div>
      <Text as="h6" textColor="gray-66" className="mt-5 md:mt-10">
        {description}
      </Text>
    </article>
  );
};

export default NumberedDetailCard;
