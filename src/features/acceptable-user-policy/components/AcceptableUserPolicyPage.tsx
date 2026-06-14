import FooterComponent from "@/shared/components/footer";
import AcceptableUserPolicyHeroSection from "./AcceptableUserPolicyHeroSection";
import { ACCEPTABLE_USER_POLICY_FOOTER } from "../constants/acceptable-user-policy-page.constants";
import AcceptableUserPolicyContentSection from "./AcceptableUserPolicyContentSection";

const AcceptableUserPolicyPage = () => {
  return (
    <>
      <AcceptableUserPolicyHeroSection />
      <AcceptableUserPolicyContentSection />
      <FooterComponent {...ACCEPTABLE_USER_POLICY_FOOTER} />
    </>
  );
};

export default AcceptableUserPolicyPage;
