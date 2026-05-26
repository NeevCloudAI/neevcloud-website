import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import ApplicationSection from "@/features/bfsi/components/ApplicationSection";
import BfsiAmbitionSection from "@/features/bfsi/components/BfsiAmbitionSection";
import BfsiHeroSection from "@/features/bfsi/components/BfsiHeroSection";
import EnterpriseSection from "@/features/bfsi/components/EnterpriseSection";
import PerformanceSection from "@/features/bfsi/components/PerformanceSection";
import { BFSI_FOOTER } from "@/features/bfsi/constants/bfsi-page.constants";
import { BFSI_FAQ_ITEMS } from "@/features/bfsi/data/faq-section.data";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";

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
