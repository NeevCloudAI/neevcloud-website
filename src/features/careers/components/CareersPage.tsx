import FooterComponent from "@/shared/components/footer";
import CareersHeroSection from "./CareersHeroSection";
import CultureSection from "./CultureSection";
import EmployeeStoriesSection from "./EmployeeStoriesSection";
import OpenPositionsSection from "./OpenPositionsSection";
import { CAREERS_FOOTER } from "../data/careers-page.data";

const CareersPage = () => {
  return (
    <>
      <CareersHeroSection />
      <OpenPositionsSection />
      <CultureSection />
      <EmployeeStoriesSection />
      <FooterComponent
        title={CAREERS_FOOTER.title}
        description={CAREERS_FOOTER.description}
        primaryCta={CAREERS_FOOTER.primaryCta}
        secondaryCta={CAREERS_FOOTER.secondaryCta}
      />
    </>
  );
};

export default CareersPage;
