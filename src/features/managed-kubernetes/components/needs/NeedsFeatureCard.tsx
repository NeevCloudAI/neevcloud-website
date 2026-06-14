import { Text } from "@/shared/ui-lib";
import type { NeedsFeatureCardProps } from "../../types/needs-feature-card.types";

const NeedsFeatureCard = ({
  title,
  description,
  footer,
}: NeedsFeatureCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-md bg-cloud-gray p-4 md:px-7.5 md:py-10">
      <Text as="h3" weight="semibold">
        {title}
      </Text>
      <Text as="h6" textColor="gray-03" className="mt-2.5">
        {description}
      </Text>
      {footer ? <div className="mt-auto">{footer}</div> : null}
    </article>
  );
};

export default NeedsFeatureCard;
