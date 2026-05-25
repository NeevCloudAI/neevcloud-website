import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import { Divider, Text } from "@/shared/ui-lib";
import HeroSection from "@/shared/components/HeroSection";
import FooterComponent from "@/shared/components/footer";
import BFSIAmbitionSection from "./BFSIAmbitionSection";
import EnterpriseSection from "./EnterpriseSection";
import BFSIApplicationsSection from "./ApplicationSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { BFSI_FAQ_ITEMS } from "../data/bsfi-faq-section-data";
import PerformanceSection from "./PerformanceSection";

const BFSIComponent = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <HeroSection
        title={
          <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
            AI Infrastructure Built for
            <Text as="span" variant="h1" textColor="primary">
              Financial Services
            </Text>
          </Text>
        }
        description="From fraud detection to risk modeling, BFSI workloads demand infrastructure that's secure, compliant, and performant. NeevCloud provides GPU compute and AI infrastructure designed to meet the requirements of banking, fintech, and insurance."
        button1Text="Talk to Sales"
        button2Text="View Compliance"
        badgeText="AI Infrastructure for BFSI"
        image="/images/bfsi.png"
        trustBadges={[
          "SOC 2 Type II certified",
          "Data sovereignty",
          "Low-latency compute",
          "99.9% uptime SLA",
          "Enterprise support",
        ]}
      />
      <BFSIAmbitionSection />
      <EnterpriseSection />
      <BFSIApplicationsSection />
      <PerformanceSection />
      <FaqSection items={BFSI_FAQ_ITEMS} className="pt-0 md:pt-0 2xl:pt-0" />
      <FooterComponent
        title="Ready to Run Your First Inference?"
        description="Secure, compliant infrastructure for fraud detection, risk modeling, and financial analytics. SOC 2 certified with data sovereignty guarantees."
        button1Text="Get Free API Key"
        button2Text="Read the Docs"
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default BFSIComponent;
