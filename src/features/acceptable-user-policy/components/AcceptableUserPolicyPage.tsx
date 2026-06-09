import FooterComponent from "@/shared/components/footer";
import AcceptableUserPolicyHeroSection from "./AcceptableUserPolicyHeroSection";
import { ACCEPTABLE_USER_POLICY_FOOTER } from "../constants/acceptable-user-policy-page.constants";

const AcceptableUserPolicyPage = () => {
  return (
    <>
      <AcceptableUserPolicyHeroSection />
      <FooterComponent {...ACCEPTABLE_USER_POLICY_FOOTER} />
    </>
  );
};

export default AcceptableUserPolicyPage;
