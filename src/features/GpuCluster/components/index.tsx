import { Divider } from "@/shared/ui-lib";
import AnnouncementSection from "@/shared/components/announcement";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "./HeroSection";
import ClusterFeaturesSection from "./ClusterFeaturesSection";
import UseCasesSection from "./UseCases";
import FaqSection from "./FaqSection";

const HomeComponent = () => {
  return (
    <div>
      <div className="flex flex-col bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat min-h-screen ">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection />
        <ClusterFeaturesSection/>
        <UseCasesSection/>
        <FaqSection/>
      </div>
  
    </div>
  );
};

export default HomeComponent;
