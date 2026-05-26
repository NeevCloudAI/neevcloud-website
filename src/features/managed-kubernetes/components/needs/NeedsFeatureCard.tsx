import { Text } from "@/shared/ui-lib";
import type { NeedsFeatureCardProps } from "@/features/managed-kubernetes/types/needs-feature-card.types";

const NeedsFeatureCard = ({
  title,
  description,
  footer,
}: NeedsFeatureCardProps) => {
  return (
    <article className="rounded-md bg-gray-10 p-4 md:px-7.5 md:py-10">
      <Text as="h3" weight="semibold">
        {title}
      </Text>
      <Text as="h6" textColor="gray-85" className="mt-2.5">
        {description}
      </Text>
      {footer}
    </article>
  );
};

export default NeedsFeatureCard;
