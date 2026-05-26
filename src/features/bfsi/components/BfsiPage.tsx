import AnnouncementSection from "@/shared/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import BfsiHeroSection from "./BfsiHeroSection";
import BfsiAmbitionSection from "./BFSIAmbitionSection";
import EnterpriseSection from "./EnterpriseSection";
import ApplicationSection from "./ApplicationSection";
import PerformanceSection from "./PerformanceSection";
import { BFSI_FAQ_ITEMS } from "../data/faq-section.data";
import { BFSI_FOOTER } from "../constants/bfsi-page.constants";

const BfsiPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <BfsiHeroSection />
      <BfsiAmbitionSection />
      <EnterpriseSection />
      <ApplicationSection />
      <PerformanceSection />
      <FaqSection items={BFSI_FAQ_ITEMS} className="pt-0 md:pt-0 2xl:pt-0" />
      <FooterComponent
        title={BFSI_FOOTER.title}
        description={BFSI_FOOTER.description}
        button1Text={BFSI_FOOTER.button1Text}
        button2Text={BFSI_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default BfsiPage;
