import Image from "next/image";
import { Text, LinkComponent } from "@/shared/ui-lib";
import type { DevelopersCommunityCardItem } from "../../types/community-section.types";

type DevelopersCommunityCardProps = {
  card: DevelopersCommunityCardItem;
};

const DevelopersCommunityCard = ({ card }: DevelopersCommunityCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/12 bg-white/6 p-5 backdrop-blur-md md:p-7.5">
      <Image
        src={card.iconSrc}
        alt=""
        width={50}
        height={50}
        aria-hidden="true"
      />
      <Text as="h3" textColor="white" weight="semibold" className="mt-5">
        {card.title}
      </Text>
      <Text as="h6" textColor="cloud-gray" className="mt-2.5 ">
        {card.description}
      </Text>
      <LinkComponent
        href={card.ctaHref}
        target={card.ctaTarget}
        spacing="lg"
        className="mt-4 md:mt-7.5"
      >
        {card.ctaLabel}
      </LinkComponent>
    </article>
  );
};

export default DevelopersCommunityCard;
