import Image from "next/image";
import { Text } from "@/shared/ui-lib";
import type { EmployeeStory } from "../types/employee-stories-section.types";

type EmployeeStoryCardProps = {
  story: EmployeeStory;
};

const EmployeeStoryCard = ({ story }: EmployeeStoryCardProps) => {
  return (
    <article
      data-slide
      className="relative h-100 min-w-[min(100%,18rem)] shrink-0 overflow-hidden rounded-lg md:h-120 md:min-w-[calc((100%-3rem)/3)]"
    >
      <Image
        src={story.image}
        alt={story.name}
        fill
        className="object-cover"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 md:px-7.5 pt-10">
        <div className="absolute inset-0 backdrop-blur-[7px] mask-[linear-gradient(to_top,black_80%,transparent_100%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80" />

        <div className="relative z-10">
          <Text as="h6" textColor="white" className="line-clamp-4">
            {story.quote}
          </Text>
          <Text as="h3" weight="semibold" textColor="white" className="mt-3">
            {story.name}
          </Text>
          <Text as="h6" textColor="white" weight="medium" className="mt-0.5">
            {story.title}
          </Text>
        </div>
      </div>
    </article>
  );
};

export default EmployeeStoryCard;
