import Image from "next/image";
import { ArrowRight, Calendar } from "@/shared/icons/lucide-icon-map";
import { Text, LinkComponent } from "@/shared/ui-lib";
import type { AnnouncementCardItem } from "../../types/recent-announcements-section.types";

type AnnouncementCardProps = {
  announcement: AnnouncementCardItem;
};

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  return (
    <article className="flex h-full flex-col">
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          src={announcement.image}
          alt={announcement.imageAlt}
          width={640}
          height={400}
          className="h-auto w-full object-cover"
        />
      </div>

      <Text
        as="h6"
        textColor="white"
        className="mt-4 md:mt-7.5 bg-deep-blue w-fit px-3.75 py-1.25 rounded-md"
      >
        <span aria-hidden="true" className="mr-2.5">
          •
        </span>
        {announcement.source}
      </Text>

      {announcement.title ? (
        <Text as="h3" weight="semibold" className="mt-4 md:mt-7.5">
          {announcement.title}
        </Text>
      ) : null}

      {announcement.description ? (
        <Text as="h6" textColor="gray-05" className="mt-2.5">
          {announcement.description}
        </Text>
      ) : null}

      <div className="mt-4 flex items-center gap-1.75 md:mt-5">
        <Calendar className="size-4" aria-hidden="true" />
        <Text as="h6">{announcement.date}</Text>
      </div>

      <LinkComponent
        href={announcement.readMoreHref}
        target="_blank"
        variant="ghost"
        spacing="none"
        textColor="pulse-red"
        className="mt-4 flex items-center gap-1.5 md:mt-7.5"
      >
        Read More
        <ArrowRight size={16} aria-hidden="true" />
      </LinkComponent>
    </article>
  );
};

export default AnnouncementCard;
