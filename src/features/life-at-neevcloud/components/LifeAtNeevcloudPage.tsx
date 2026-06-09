import FooterComponent from "@/shared/components/footer";
import CelebrateSection from "./CelebrateSection";
import LifeAtNeevcloudHeroSection from "./LifeAtNeevcloudHeroSection";
import WorkplaceSection from "./WorkplaceSection";
import { LIFE_AT_NEEVCLOUD_FOOTER } from "../data/life-at-neevcloud-page.data";

const LifeAtNeevcloudPage = () => {
  return (
    <>
      <LifeAtNeevcloudHeroSection />
      <WorkplaceSection />
      <CelebrateSection />
      <FooterComponent {...LIFE_AT_NEEVCLOUD_FOOTER} />
    </>
  );
};

export default LifeAtNeevcloudPage;
