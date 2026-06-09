import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import DevelopersCommunitySection from "./DevelopersCommunitySection";
import DevelopersDocumentationSection from "./DevelopersDocumentationSection";
import DevelopersHeroSection from "./DevelopersHeroSection";
import DevelopersStartBuildingSection from "./DevelopersStartBuildingSection";
import DevelopersTutorialsSection from "./DevelopersTutorialsSection";
import { DEVELOPERS_FAQ_ITEMS } from "../data/faq-section-data";
import { DEVELOPERS_FOOTER } from "../constants/developers-page.constants";

const DevelopersPage = () => {
  return (
    <>
      <DevelopersHeroSection />
      <DevelopersStartBuildingSection />
      <DevelopersDocumentationSection />
      <DevelopersTutorialsSection />
      <DevelopersCommunitySection />
      <FaqSection
        items={DEVELOPERS_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        {...DEVELOPERS_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default DevelopersPage;
