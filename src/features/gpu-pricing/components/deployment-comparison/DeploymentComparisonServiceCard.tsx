import { cn } from "@/lib/utils";
import { Text, LinkComponent } from "@/shared/ui-lib";
import { ArrowRight } from "lucide-react";
import type { DeploymentComparisonServiceCardProps } from "../../types/deployment-comparison-section.types";
import DeploymentComparisonIcon from "./DeploymentComparisonIcon";

const VARIANT_STYLES = {
  container: {
    card: "bg-primary-210/8 border-primary-210/20",
    iconWrap: "bg-primary-210/15",
    icon: "text-primary-210",
    title: "text-primary-210",
    deploymentType: "text-primary-210/55",
    bullet: "text-primary-210",
    cta: "bg-primary-210/15",
    ctaIcon: "text-primary-210",
  },
  vm: {
    card: "bg-primary/8 border-primary/20",
    iconWrap: "bg-primary/15",
    icon: "text-primary",
    title: "text-primary-210",
    deploymentType: "text-primary-210/55",
    bullet: "text-primary-210",
    cta: "bg-primary/15",
    ctaIcon: "text-primary-210",
  },
} as const;

const DeploymentComparisonServiceCard = ({
  card,
}: DeploymentComparisonServiceCardProps) => {
  const styles = VARIANT_STYLES[card.variant];

  return (
    <article className={cn("w-full rounded-lg border p-4", styles.card)}>
      <div className="flex items-center gap-2.5">
        <div className={cn("rounded-lg p-1.5", styles.iconWrap)}>
          <DeploymentComparisonIcon
            name={card.icon}
            className={cn("size-4", styles.icon)}
          />
        </div>
        <div className="min-w-0">
          <Text className={styles.title} weight="medium" fontFamily="spaceMono">
            {card.title}
          </Text>
          <Text
            as="small"
            weight="medium"
            fontFamily="spaceMono"
            className={cn("mt-0.5", styles.deploymentType)}
          >
            {card.deploymentType}
          </Text>
        </div>
      </div>
      <Text
        as="small"
        className="mt-3 text-cloud-gray/80"
      >{`"${card.tagline}"`}</Text>

      <ul className="mt-3 flex list-none flex-col gap-1.5 p-0">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2.5">
            <span className={styles.bullet} aria-hidden="true">
              •
            </span>
            <Text as="small" className="text-cloud-gray/80">
              {bullet}
            </Text>
          </li>
        ))}
      </ul>
      <LinkComponent
        href={card.ctaHref}
        target="_blank"
        className={cn(
          "mt-3 flex w-full items-center justify-center gap-2 rounded-md",
          styles.cta
        )}
        spacing="lg"
      >
        Get Started
        <ArrowRight
          aria-hidden="true"
          className={cn("size-4", styles.ctaIcon)}
        />
      </LinkComponent>
    </article>
  );
};

export default DeploymentComparisonServiceCard;
