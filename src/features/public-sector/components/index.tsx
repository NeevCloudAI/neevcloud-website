import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import { Divider, Text } from "@/shared/ui-lib";
import ContributeSection from "./ContributeSection";
import GovernmentSection from "./GovernmentSection";
import AmbitionSection from "./AmbitionSection";

const PublicSectorComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <Text
              as="h1"
              align="center"
              textColor="primary"
              className="max-w-5xl mt-4 md:mt-6"
            >
              Indigenous AI Infrastructure for
              <Text variant="h1" as="span" textColor="black">
                National Priorities
              </Text>
            </Text>
          }
          description="Public sector AI initiatives require infrastructure that respects data sovereignty, meets compliance standards, and supports strategic autonomy. NeevCloud provides Indian-built infrastructure designed for government and public sector requirements."
          button1Text="Discuss Requirements"
          button2Text="View Complaince"
          badgeText="AI Infrastructure for Public Sector"
          image="/images/public-sector.png"
          trustBadges={[
            "India-based infrastructure",
            "Data sovereignty controls",
            "Government compliance ready",
            "Strategic independence",
          ]}
        />
      </section>
      <AmbitionSection />
      <ContributeSection />
      <GovernmentSection />
      <FaqSection
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title="Start GPU Compute with NVMe"
        description="Sub-millisecond latency, 7 GB/s throughput. Keep your GPUs saturated, not waiting. 25GB is included free with every GPU instance."
        button1Text="Deploy with NVMe"
        button2Text="View Storage Pricing"
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default PublicSectorComponent;
