import FooterComponent from "@/shared/components/footer";
import TermsConditionHeroSection from "./TermsConditionHeroSection";
import { TERMS_CONDITION_FOOTER } from "../constants/terms-condition-page.constants";
import TermsConditionContentSection from "./TermsConditionContentSection";

const TermsConditionPage = () => {
  return (
    <>
      <TermsConditionHeroSection />
      <TermsConditionContentSection />
      <FooterComponent {...TERMS_CONDITION_FOOTER} />
    </>
  );
};

export default TermsConditionPage;
