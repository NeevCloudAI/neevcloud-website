import FooterComponent from "@/shared/components/footer";
import PrivacyPolicyHeroSection from "./PrivacyPolicyHeroSection";
import { PRIVACY_POLICY_FOOTER } from "../constants/privacy-policy-page.constants";
import PrivacyPolicyContentSection from "./PrivacyPolicyContentSection";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContentSection />
      <FooterComponent {...PRIVACY_POLICY_FOOTER} />
    </>
  );
};

export default PrivacyPolicyPage;
