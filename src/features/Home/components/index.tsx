import HeroSection from "./HeroSection";
import StackSection from "./StackSection";
import WhyNeevcloudSection from "./WhyNeevcloudSection";
import ForDevelopersSection from "./ForDevelopersSection";
import LeverageSection from "./LeverageSection";
import InfraBentoSection from "./InfraBentoSection";
import FaqSection from "@/shared/components/faq/faq-section";
import Footer from "@/shared/components/footer";
import { FAQ_ITEMS } from "../data/faq.data";

const HomeComponent = () => {
  return (
    <div>
      <HeroSection />
      <StackSection />
      <WhyNeevcloudSection />
      <ForDevelopersSection />
      <LeverageSection />
      <InfraBentoSection />
      {/* <BlogSection /> */}
      <FaqSection items={FAQ_ITEMS} />
      <Footer />
    </div>
  );
};

export default HomeComponent;
