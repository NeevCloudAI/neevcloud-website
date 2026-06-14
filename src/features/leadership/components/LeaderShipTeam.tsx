import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  LEADERSHIP_TEAM,
  LEADERSHIP_TEAM_SECTION,
} from "../data/leadership-team-section.data";
import LeadershipTeamCard from "./LeadershipTeamCard";

const LeaderShipTeam = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="leadership-team-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-90"
          className="bg-primary-90/6 p-1 rounded-md border border-primary-90/12"
        >
          {LEADERSHIP_TEAM_SECTION.badgeText}
        </Text>

        <Text
          as="h1"
          id="leadership-team-section-heading"
          align="center"
          className="max-w-5xl mt-4 md:mt-6"
          weight="medium"
        >
          {LEADERSHIP_TEAM_SECTION.titlePrefix}
          <Text as="span" variant="h1" textColor="primary" weight="medium">
            {LEADERSHIP_TEAM_SECTION.titleHighlight}
          </Text>
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:mt-12.5 w-full">
          {LEADERSHIP_TEAM.map((member) => (
            <LeadershipTeamCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LeaderShipTeam;
