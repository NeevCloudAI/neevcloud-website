import { Divider } from "@/shared/ui-lib";
import AnnouncementSection from "./AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "./HeroSection";
import NeevcloudSection from "./NeevcloudSection";
import ComparisonSection from "./ComparisonSection";
import NounSection from "./NounSection";
import FooterComponent from "@/shared/components/footer";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import StackSection from "./StackSection";
import InfrastructureSection from "./InfrastructureSection";
import ReviewsSection from "./ReviewsSection";

const HomeComponent = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <HeroSection />
      <StackSection />
      <NeevcloudSection />
      <ModelBuilderSection />
      <ComparisonSection />
      <InfrastructureSection />
      <ReviewsSection />
      <NounSection />
      <FooterComponent className="pt-0 md:pt-0 2xl:pt-0" />
    </>
  );
};

export default HomeComponent;
