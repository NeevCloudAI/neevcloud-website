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
      <FooterComponent {...CONTACT_NEEVCLOUD_FOOTER} />
    </>
  );
};

export default ContactNeevcloudPage;
