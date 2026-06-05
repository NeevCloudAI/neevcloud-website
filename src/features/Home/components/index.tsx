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
