import AnnouncementSection from "@/shared/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import DefenceHeroSection from "./DefenceHeroSection";
import DefenceAmbitionSection from "./DefenceAmbitionSection";
import DefenceApplicationSection from "./DefenceApplicationSection";
import { DEFENCE_FAQ_ITEMS } from "../data/faq-section.data";
import { DEFENCE_FOOTER } from "../data/defence-page.data";

const DefencePage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <DefenceHeroSection />
      <DefenceAmbitionSection />
      <DefenceApplicationSection />
      <FaqSection items={DEFENCE_FAQ_ITEMS} />
      <FooterComponent
        title={DEFENCE_FOOTER.title}
        description={DEFENCE_FOOTER.description}
        button1Text={DEFENCE_FOOTER.button1Text}
        button2Text={DEFENCE_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default DefencePage;
