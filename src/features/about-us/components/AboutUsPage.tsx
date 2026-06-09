import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import AboutUsHeroSection from "./AboutUsHeroSection";
import InfrastructureSection from "./InfrastructureSection";
import PrinciplesSection from "./PrinciplesSection";
import { ABOUT_US_FAQ_ITEMS } from "../data/faq-section.data";
import { ABOUT_US_FOOTER } from "../data/about-us-page.data";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsHeroSection />
      <InfrastructureSection />
      <PrinciplesSection />
      <FaqSection items={ABOUT_US_FAQ_ITEMS} />
      <FooterComponent
        title={ABOUT_US_FOOTER.title}
        description={ABOUT_US_FOOTER.description}
        primaryCta={ABOUT_US_FOOTER.primaryCta}
        secondaryCta={ABOUT_US_FOOTER.secondaryCta}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default AboutUsPage;
