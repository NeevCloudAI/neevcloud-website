import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import AmbitionSection from "@/features/public-sector/components/AmbitionSection";
import ContributeSection from "@/features/public-sector/components/ContributeSection";
import GovernmentSection from "@/features/public-sector/components/GovernmentSection";
import PublicSectorHeroSection from "@/features/public-sector/components/PublicSectorHeroSection";
import { PUBLIC_SECTOR_FOOTER } from "@/features/public-sector/constants/public-sector-page.constants";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import { Divider } from "@/shared/ui-lib";

const PublicSectorPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <PublicSectorHeroSection />
      <AmbitionSection />
      <ContributeSection />
      <GovernmentSection />
      <FaqSection
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={PUBLIC_SECTOR_FOOTER.title}
        description={PUBLIC_SECTOR_FOOTER.description}
        button1Text={PUBLIC_SECTOR_FOOTER.button1Text}
        button2Text={PUBLIC_SECTOR_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default PublicSectorPage;
