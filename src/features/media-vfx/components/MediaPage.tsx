import AnnouncementSection from "@/shared/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import MediaHeroSection from "./MediaHeroSection";
import MediaAmbitionSection from "./MediaAmbitionSection";
import { MEDIA_FAQ_ITEMS } from "../data/faq-section.data";
import { MEDIA_FOOTER } from "../data/media-page.data";

const MediaPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <MediaHeroSection />
      <MediaAmbitionSection />
      <FaqSection items={MEDIA_FAQ_ITEMS} className="pt-0 md:pt-0 2xl:pt-0" />
      <FooterComponent
        title={MEDIA_FOOTER.title}
        description={MEDIA_FOOTER.description}
        button1Text={MEDIA_FOOTER.button1Text}
        button2Text={MEDIA_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default MediaPage;
