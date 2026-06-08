import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import PublicSectorHeroSection from "./PublicSectorHeroSection";
import AmbitionSection from "./AmbitionSection";
import ContributeSection from "./ContributeSection";
import GovernmentSection from "./GovernmentSection";
import { PUBLIC_SECTOR_FOOTER } from "../constants/public-sector-page.constants";
import GovernmentApplicationSection from "./GovernmentApplicationSection";
import { GOVERNMENT_FAQ_ITEMS } from "../data/faq-section-data";

const PublicSectorPage = () => {
  return (
    <>
      <PublicSectorHeroSection />
      <AmbitionSection />
      <ContributeSection />
      <GovernmentApplicationSection />
      <GovernmentSection />
      <FaqSection
        items={GOVERNMENT_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={PUBLIC_SECTOR_FOOTER.title}
        description={PUBLIC_SECTOR_FOOTER.description}
        button1Text={PUBLIC_SECTOR_FOOTER.button1Text}
        button2Text={PUBLIC_SECTOR_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default PublicSectorPage;
