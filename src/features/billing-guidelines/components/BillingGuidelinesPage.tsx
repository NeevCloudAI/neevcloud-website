import FooterComponent from "@/shared/components/footer";
import BillingGuidelinesHeroSection from "./BillingGuidelinesHeroSection";
import { BILLING_GUIDELINES_FOOTER } from "../constants/billing-guidelines-page.constants";
import BillingGuidelinesContentSection from "./BillingGuidelinesContentSection";

const BillingGuidelinesPage = () => {
  return (
    <>
      <BillingGuidelinesHeroSection />
      <BillingGuidelinesContentSection />
      <FooterComponent {...BILLING_GUIDELINES_FOOTER} />
    </>
  );
};

export default BillingGuidelinesPage;
