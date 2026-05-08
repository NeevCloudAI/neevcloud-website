import type { NetworkingFeature } from "@/features/gpu/data/private-network-section-types";
import { Text } from "@/shared/ui-lib";

export function NetworkingFeatureCard({ title, description }: NetworkingFeature) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-white p-4 md:p-6">
      <div className="h-8 w-8 shrink-0 bg-gray-50"></div>
      <Text as="h3" weight="semibold" className="mt-4">
        {title}
      </Text>
      <Text>{description}</Text>
    </div>
  );
}
