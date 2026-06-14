import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { Text, LinkComponent } from "@/shared/ui-lib";
import type { DevelopersTutorialCardItem } from "../../types/tutorials-section.types";
import { DEVELOPERS_TUTORIALS_SECTION } from "../../data/tutorials-section.data";

type DevelopersTutorialCardProps = {
  card: DevelopersTutorialCardItem;
};

const DevelopersTutorialCard = ({ card }: DevelopersTutorialCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-5 shadow-sm md:px-7.5 md:py-10">
      <div className="flex items-center justify-between gap-4">
        <Text as="h5" weight="semibold">
          {card.title}
        </Text>
        <Text textColor="gray-03" weight="medium">
          {card.duration}
        </Text>
      </div>
      <Text as="h6" textColor="gray-05" className="mt-2.5">
        {card.difficulty}
      </Text>
      <LinkComponent
        href={card.ctaHref}
        target={card.ctaTarget}
        variant="ghost"
        textColor="primary"
        spacing="none"
        size="md"
        className="mt-6 flex items-center gap-1.5 md:mt-7.5 underline"
      >
        {DEVELOPERS_TUTORIALS_SECTION.cardCtaLabel}
        <ArrowRight size={16} aria-hidden="true" />
      </LinkComponent>
    </article>
  );
};

export default DevelopersTutorialCard;
