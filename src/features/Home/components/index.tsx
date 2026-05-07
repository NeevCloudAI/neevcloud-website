import { Divider } from "@/shared/ui-lib";
import AnnouncementSection from "./AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "./HeroSection";
import NeevcloudSection from "./NeevcloudSection";
import ComparisonSection from "./ComparisonSection";
import NounSection from "./NounSection";
import FooterComponent from "@/shared/components/footer";
import ModelBuilderSection from "./ModelBuilderSection";
import StackSection from "./StackSection";
import InfrastructureSection from "./InfrastructureSection";
import ReviewsSection from "./ReviewsSection";

const HomeComponent = () => {
  return (
    <div>
      <div className="flex flex-col bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat min-h-screen ">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection />
      </div>
      <StackSection />
      <NeevcloudSection />
      {/* <ModuleSection /> */}
      <ModelBuilderSection />
      <ComparisonSection />
      <InfrastructureSection />
      <ReviewsSection />
      <NounSection />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
