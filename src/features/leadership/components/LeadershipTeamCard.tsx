import { Tooltip } from "@/shared/components/tooltip";
import { Divider, Text } from "@/shared/ui-lib";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import type { LeadershipTeamCardProps } from "../types/leadership-team-section.types";

const LeadershipTeamCard = ({ member }: LeadershipTeamCardProps) => {
  return (
    <article className="rounded-lg bg-cloud-gray flex flex-col md:flex-row justify-center shadow-lg">
      <div className="p-4 md:p-10 md:pr-2 flex flex-col justify-between">
        <div>
          <Text as="h3" textColor="gray-100" weight="semibold">
            {member.name}
          </Text>
          <div className="w-fit">
            <Text weight="medium" className="mt-2.5" textColor="gray-05">
              {member.title}
            </Text>
            <Divider
              orientation="horizontal"
              className="mt-1 bg-[radial-gradient(ellipse_at_center,#58D7A7_0%,#58D7A7_53%,#58D7A799_85%,#58D7A71a_100%)]"
            />
          </div>
          <Tooltip content={member.description} className="mt-5 max-w-sm">
            <Text className="line-clamp-5">{member.description}</Text>
          </Tooltip>
        </div>
        <a
          href={member.linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit flex mt-4 items-center gap-2 bg-primary/15 hover:bg-linear-to-r from-[#5CB7A8] to-[#92EFE0] p-1.5 rounded-md"
          aria-label={`${member.name} on LinkedIn`}
        >
          <Image
            src="/icons/linkedin-bg.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
          <Text weight="semibold" textColor="gray-100">
            {member.name}
          </Text>
          <MoveRight className="size-6" />
        </a>
      </div>
      <Image
        src={member.image}
        alt={member.name}
        width={320}
        height={320}
        className="rounded-r-lg object-cover w-full md:w-auto"
      />
    </article>
  );
};

export default LeadershipTeamCard;
