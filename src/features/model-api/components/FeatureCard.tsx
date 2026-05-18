import { Text } from "@/shared/ui-lib";
import { SquareCheck } from "lucide-react";
import { FeatureCard as FeatureCardType } from "../data/available-models-features";

export default function FeatureCard({
  index,
  badge,
  title,
  description,
  features,
}: FeatureCardType) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-20 bg-white p-6 md:p-8">
      {/* Badge */}
      <Text fontFamily="spaceMono" textColor="blue-40" className="text-xs">
        {index} / {badge}
      </Text>

      {/* Title */}
      <Text as="h3" weight="semibold">
        {title}
      </Text>

      {/* Description */}
      <Text as="h6">
        {description}
      </Text>

      {/* Features list */}
      <ul className="flex flex-col gap-2 mt-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 rounded-md border border-gray-20 bg-gray-60 px-4 py-2 "
          >
            <SquareCheck size={14} className="shrink-0 text-primary" aria-hidden />
            <Text as="h6">
              {feature}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
}
