import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import PublicSectorHeroSection from "./PublicSectorHeroSection";
import AmbitionSection from "./AmbitionSection";
import ContributeSection from "./ContributeSection";
import GovernmentSection from "./GovernmentSection";
import { PUBLIC_SECTOR_FOOTER } from "../constants/public-sector-page.constants";
import GovernmentApplicationSection from "./GovernmentApplicationSection";

const PublicSectorPage = () => {
  return (
    <>
      <PublicSectorHeroSection />
      <AmbitionSection />
      <ContributeSection />
      <GovernmentApplicationSection />
      <GovernmentSection />
      <FaqSection
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={PUBLIC_SECTOR_FOOTER.title}
        description={PUBLIC_SECTOR_FOOTER.description}
        primaryCta={PUBLIC_SECTOR_FOOTER.primaryCta}
        secondaryCta={PUBLIC_SECTOR_FOOTER.secondaryCta}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default PublicSectorPage;
