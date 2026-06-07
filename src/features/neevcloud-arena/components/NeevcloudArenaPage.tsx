import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import { NEEVCLOUD_ARENA_FAQ_ITEMS } from "../data/faq-section.data";
import { NEEVCLOUD_ARENA_FOOTER } from "../data/neevcloud-arena-page.data";
import ArenaByNumbersSection from "./ArenaByNumbersSection";
import ArenaDifferentSection from "./ArenaDifferentSection";
import NeevcloudArenaHeroSection from "./NeevcloudArenaHeroSection";
import ExperienceSection from "./ExperienceSection";
import ThreePathsSection from "./ThreePathsSection";

const NeevcloudArenaPage = () => {
  return (
    <>
      <NeevcloudArenaHeroSection />
      <ExperienceSection />
      <ThreePathsSection />
      <ArenaDifferentSection />
      <ArenaByNumbersSection />
      <FaqSection
        items={NEEVCLOUD_ARENA_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={NEEVCLOUD_ARENA_FOOTER.title}
        description={NEEVCLOUD_ARENA_FOOTER.description}
        button1Text={NEEVCLOUD_ARENA_FOOTER.button1Text}
        button2Text={NEEVCLOUD_ARENA_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default NeevcloudArenaPage;
