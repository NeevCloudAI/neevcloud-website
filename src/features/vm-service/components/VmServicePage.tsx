import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import VmServiceHeroSection from "./VmServiceHeroSection";
import WhyVmServiceSection from "./WhyVmServiceSection";
import BuiltForStackSection from "./BuiltForStackSection";
import { VM_SERVICE_FOOTER } from "../constants/vm-service-page.constants";
import { VM_SERVICE_FAQ_ITEMS } from "../data/faq-section.data";

const VmServicePage = () => {
  return (
    <>
      <VmServiceHeroSection />
      <WhyVmServiceSection />
      <BuiltForStackSection />
      <FaqSection items={VM_SERVICE_FAQ_ITEMS} />
      <FooterComponent {...VM_SERVICE_FOOTER} />
    </>
  );
};

export default VmServicePage;
