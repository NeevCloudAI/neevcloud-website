import FooterComponent from "@/shared/components/footer";
import VmServiceHeroSection from "./VmServiceHeroSection";
import WhyVmServiceSection from "./WhyVmServiceSection";
import BuiltForStackSection from "./BuiltForStackSection";
import { VM_SERVICE_FOOTER } from "../constants/vm-service-page.constants";

const VmServicePage = () => {
  return (
    <>
      <VmServiceHeroSection />
      <WhyVmServiceSection />
      <BuiltForStackSection />
      <FooterComponent
        {...VM_SERVICE_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default VmServicePage;
