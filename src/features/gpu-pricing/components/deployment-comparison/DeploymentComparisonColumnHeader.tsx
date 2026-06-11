import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import type { DeploymentComparisonColumnHeaderProps } from "../../types/deployment-comparison-section.types";
import DeploymentComparisonIcon from "./DeploymentComparisonIcon";

const VARIANT_STYLES = {
  container: {
    card: "bg-primary-210/8 border-primary-210/20",
    iconWrap: "bg-primary-210/15",
    icon: "text-primary-210",
    badge: "text-primary-210/55",
    subtitle: "text-primary-210/55",
  },
  vm: {
    card: "bg-primary/8 border-primary/20",
    iconWrap: "bg-primary/15",
    icon: "text-primary",
    badge: "text-primary/55",
    subtitle: "text-primary/55",
  },
} as const;

const DeploymentComparisonColumnHeader = ({
  header,
}: DeploymentComparisonColumnHeaderProps) => {
  const styles = VARIANT_STYLES[header.variant];

  return (
    <div className={cn("w-full rounded-lg border p-4", styles.card)}>
      <div className="flex items-center gap-2">
        <div className={cn("rounded-lg p-1.5", styles.iconWrap)}>
          <DeploymentComparisonIcon
            name={header.icon}
            className={cn("size-4", styles.icon)}
          />
        </div>
        <Text
          as="small"
          className={styles.badge}
          weight="medium"
          fontFamily="spaceMono"
        >
          {header.badge}
        </Text>
      </div>
      <Text className="mt-2.5" textColor="white" weight="semibold">
        {header.title}
      </Text>
      <Text weight="semibold" className={cn("mt-1", styles.subtitle)}>
        {header.subtitle}
      </Text>
    </div>
  );
};

export default DeploymentComparisonColumnHeader;
