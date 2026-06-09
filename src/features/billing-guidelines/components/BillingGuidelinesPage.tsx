import FooterComponent from "@/shared/components/footer";
import BillingGuidelinesHeroSection from "./BillingGuidelinesHeroSection";
import { BILLING_GUIDELINES_FOOTER } from "../constants/billing-guidelines-page.constants";

const BillingGuidelinesPage = () => {
  return (
    <>
      <BillingGuidelinesHeroSection />
      <FooterComponent {...BILLING_GUIDELINES_FOOTER} />
    </>
  );
};

export default BillingGuidelinesPage;
