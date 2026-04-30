import { Divider } from "@/shared/ui-lib";
import AnnouncementSection from "./AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "./HeroSection";
import NeevcloudSection from "./NeevcloudSection";
import ComparisonSection from "./ComparisonSection";

const HomeComponent = () => {
  return (
    <div>
      <div className="flex flex-col bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat min-h-screen ">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection />
      </div>
      {/* <StackSection /> */}
      <NeevcloudSection />
      {/* <ModuleSection /> */}
      <ComparisonSection />
      {/* <NounSection /> */}
    </div>
  );
};

export default HomeComponent;
