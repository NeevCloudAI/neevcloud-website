import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import MediaHeroSection from "./MediaHeroSection";
import MediaAmbitionSection from "./MediaAmbitionSection";
import MediaApplicationSection from "./MediaApplicationSection";
import { MEDIA_FAQ_ITEMS } from "../data/faq-section.data";
import { MEDIA_FOOTER } from "../data/media-page.data";
import RenderingSection from "./RenderingSection";
import PerformanceSection from "./PerformanceSection";
import ThreeStepSection from "./ThreeStepSection";
import OSImageSection from "./os-image/OSImageSection";

const MediaPage = () => {
  return (
    <>
      <MediaHeroSection />
      <MediaAmbitionSection />
      <ThreeStepSection />
      <OSImageSection />
      <MediaApplicationSection />
      <PerformanceSection />
      <RenderingSection />
      <FaqSection items={MEDIA_FAQ_ITEMS} />
      <FooterComponent {...MEDIA_FOOTER} />
    </>
  );
};

export default MediaPage;
