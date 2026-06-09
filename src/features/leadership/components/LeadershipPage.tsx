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
      <FooterComponent
        title={LEADERSHIP_FOOTER.title}
        description={LEADERSHIP_FOOTER.description}
        primaryCta={LEADERSHIP_FOOTER.primaryCta}
        secondaryCta={LEADERSHIP_FOOTER.secondaryCta}
      />
    </>
  );
};

export default LeadershipPage;
