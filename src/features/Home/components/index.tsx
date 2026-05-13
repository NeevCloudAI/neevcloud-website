import { Divider } from "@/shared/ui-lib";
import AnnouncementSection from "./AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "./HeroSection";
import NeevcloudSection from "./NeevcloudSection";
import ComparisonSection from "./ComparisonSection";
import NounSection from "./NounSection";
import FooterComponent from "@/shared/components/footer";
import StackSection from "./StackSection";
import InfrastructureSection from "./InfrastructureSection";
import ReviewsSection from "./ReviewsSection";
import { HOME_MODEL_BUILDER_PROPS } from "../constants/home-model-builder";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";

const HomeComponent = () => {
  return (
    <>
      <div className="flex flex-col bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat min-h-screen ">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection />
      </div>
      <StackSection />
      <NeevcloudSection />
      {/* <ModuleSection /> */}
      <ModelBuilderSection {...HOME_MODEL_BUILDER_PROPS} />
      <ComparisonSection />
      <InfrastructureSection />
      <ReviewsSection />
      <NounSection />
      <FooterComponent />
    </>
  );
};

export default HomeComponent;
