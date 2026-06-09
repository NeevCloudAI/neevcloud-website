import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import DefenceHeroSection from "./DefenceHeroSection";
import DefenceAmbitionSection from "./DefenceAmbitionSection";
import DefenceApplicationSection from "./DefenceApplicationSection";
import { DEFENCE_FAQ_ITEMS } from "../data/faq-section.data";
import { DEFENCE_FOOTER } from "../data/defence-page.data";
import DefenceSovereignSection from "./DefenceSovereignSection";

const DefencePage = () => {
  return (
    <>
      <DefenceHeroSection />
      <DefenceAmbitionSection />
      <DefenceApplicationSection />
      <DefenceSovereignSection />
      <FaqSection items={DEFENCE_FAQ_ITEMS} />
      <FooterComponent {...DEFENCE_FOOTER} className="pt-0 md:pt-0 2xl:pt-0" />
    </>
  );
};

export default DefencePage;
