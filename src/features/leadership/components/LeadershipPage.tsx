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
        button1Text={LEADERSHIP_FOOTER.button1Text}
        button2Text={LEADERSHIP_FOOTER.button2Text}
      />
    </>
  );
};

export default LeadershipPage;
