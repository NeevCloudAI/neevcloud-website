import HeroSection from "./HeroSection";
import StackSection from "./StackSection";
import WhyNeevcloudSection from "./WhyNeevcloudSection";
import ForDevelopersSection from "./ForDevelopersSection";
import LeverageSection from "./LeverageSection";
import InfraBentoSection from "./InfraBentoSection";
import FaqSection from "./FaqSection";
import Footer2026 from "@/shared/components/footer-2026";

// 2026 homepage — built section by section against the Paper design.
// TODO: Infra Bento (section 6). Footer2026 is homepage-only for now; roll it
// out to all pages (swap in every layout) once the design is approved.
const HomeComponent = () => {
  return (
    <div className="home-2026">
      <HeroSection />
      <StackSection />
      <WhyNeevcloudSection />
      <ForDevelopersSection />
      <LeverageSection />
      <InfraBentoSection />
      <FaqSection />
      <Footer2026 />
    </div>
  );
};

export default HomeComponent;
