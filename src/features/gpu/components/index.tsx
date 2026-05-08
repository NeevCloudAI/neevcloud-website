import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import OSImageSection from "./os-image/OSImageSection";
import PrivateNetworkSection from "./private-network/private-network-section";
import FaqSection from "./faq/FAQ";
import FooterComponent from "@/shared/components/footer";

const GpuComponent = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <OSImageSection />
      <PrivateNetworkSection />
      <FaqSection />
      <FooterComponent />
    </>
  );
};

export default GpuComponent;
