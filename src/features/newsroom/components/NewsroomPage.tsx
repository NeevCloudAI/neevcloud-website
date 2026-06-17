import FooterComponent from "@/shared/components/footer";
import NewsroomHeroSection from "./NewsroomHeroSection";
import PressCoverageSection from "./PressCoverageSection";
import RecentAnnouncementsSection from "./RecentAnnouncementsSection";
import { NEWSROOM_FOOTER } from "../constants/newsroom-page.constants";

const NewsroomPage = () => {
  return (
    <>
      <NewsroomHeroSection />
      <RecentAnnouncementsSection />
      <PressCoverageSection />
      <FooterComponent {...NEWSROOM_FOOTER} />
    </>
  );
};

export default NewsroomPage;
