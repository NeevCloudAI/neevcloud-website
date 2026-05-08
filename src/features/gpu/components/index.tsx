import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import OSImageSection from "./OSImageSection";
import PrivateNetworkSection from "./PrivateNetworkSection";

const GpuComponent = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <OSImageSection />
      <PrivateNetworkSection />
    </>
  );
};

export default GpuComponent;
