import FooterComponent from "@/shared/components/footer";
import ContactNeevcloudHeroSection from "./ContactNeevcloudHeroSection";
import ConversationSection from "./ConversationSection";
import OfficesSection from "./OfficesSection";
import { CONTACT_NEEVCLOUD_FOOTER } from "../data/contact-neevcloud-page.data";

const ContactNeevcloudPage = () => {
  return (
    <>
      <ContactNeevcloudHeroSection />
      <ConversationSection />
      <OfficesSection />
      <FooterComponent
        title={CONTACT_NEEVCLOUD_FOOTER.title}
        description={CONTACT_NEEVCLOUD_FOOTER.description}
        primaryCta={CONTACT_NEEVCLOUD_FOOTER.primaryCta}
        secondaryCta={CONTACT_NEEVCLOUD_FOOTER.secondaryCta}
      />
    </>
  );
};

export default ContactNeevcloudPage;
