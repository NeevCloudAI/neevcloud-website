import { Text } from "@/shared/ui-lib";
import LinkComponent from "@/shared/ui-lib/link";
import type { DevelopersChangelogCardItem } from "../../types/community-section.types";

type DevelopersChangelogCardProps = {
  card: DevelopersChangelogCardItem;
};

const DevelopersChangelogCard = ({ card }: DevelopersChangelogCardProps) => {
  return (
    <article className="flex flex-col rounded-lg border border-white-10 bg-white-5 p-5 backdrop-blur-md md:p-7.5">
      <Text as="h6" textColor="white" weight="regular">
        {card.label}
      </Text>
      <Text as="h3" textColor="white" weight="semibold" className="mt-5">
        {card.description}
      </Text>
      <LinkComponent
        href={card.ctaHref}
        target={card.ctaTarget}
        spacing="lg"
        className="mt-4 w-fit md:mt-7.5"
      >
        {card.ctaLabel}
      </LinkComponent>
    </article>
  );
};

export default DevelopersChangelogCard;
