import FooterComponent from "@/shared/components/footer";
import LeaderHowWeLeadsSection from "./LeaderHowWeLeadsSection";
import LeaderShipHeroSection from "./LeaderShipHeroSection";
import LeaderShipTeam from "./LeaderShipTeam";
import { LEADERSHIP_FOOTER } from "../data/leadership-page.data";

const LeadershipPage = () => {
  return (
    <>
      <LeaderShipHeroSection />
      <LeaderShipTeam />
      <LeaderHowWeLeadsSection />
      <FooterComponent {...LEADERSHIP_FOOTER} />
    </>
  );
};

export default LeadershipPage;
