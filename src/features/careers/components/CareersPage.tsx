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
      <FooterComponent {...CAREERS_FOOTER} />
    </>
  );
};

export default CareersPage;
