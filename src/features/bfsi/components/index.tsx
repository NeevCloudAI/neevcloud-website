import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import FooterComponent from "@/shared/components/footer";
import { Divider, Text } from "@/shared/ui-lib";
import FaqSection from "@/shared/components/faq/faq-section";
import { BFSI_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import HeroSection from "@/shared/components/HeroSection";
import PerformanceSection from "./PerformanceSection";
import DeployInstanceSection from "@/shared/components/DeployInstanceSection";
import BFSIApplicationsSection from "./BFSIApplicationsSection";

const BFSIComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <Text as="h1" className="mt-4 md:mt-6 max-w-4xl text-center">
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
          imageClassName="md:min-h-[120vh] 2xl:min-h-[80vh] 2xl:max-w-6xl 2xl:max-h-[80vh]"
        />
      </section>
      <BFSIApplicationsSection />
      <PerformanceSection />

      <FaqSection items={BFSI_FAQ_ITEMS} />
      <FooterComponent
        title="Launch Your First CPU Instance"
        description="Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges."
        button1Text="Configure Now"
        button2Text="Talk to Our Team"
      />
    </>
  );
};

export default BFSIComponent;
