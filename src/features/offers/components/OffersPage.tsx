import HeroSection from "@/shared/components/HeroSection";
import FooterComponent from "@/shared/components/footer";
import FaqSection from "@/shared/components/faq/faq-section";
import { Text } from "@/shared/ui-lib";
import OffersAiSection from "./OffersAiSection";
import CpuArchitectureSection from "@/features/cpu-pricing/components/CpuArchitectureSection";
import CpuTransparentPricingSection from "@/features/cpu-pricing/components/CpuTransparentPricingSection";
import CpuPricingDeploymentSection from "@/features/cpu-pricing/components/CpuPricingDeploymentSection";
import { CPU_PRICING_FAQ_ITEMS } from "@/features/cpu-pricing/data/cpu-pricing-faq-section.data";
import { OFFERS_HERO } from "../data/offers-page.data";
import Image from "next/image";

const OffersPage = () => {
  return (
    <>
      <HeroSection
        title={
          <>
            <Text
              as="h1"
              align="center"
              className="max-w-4xl mt-4 md:mt-6"
              textColor={"white"}
            >
              Compute Without Limits,
            </Text>
            <Text
              as="h1"
              align="center"
              className="max-w-4xl"
              textColor={"primary"}
            >
              Innovate Without Waiting
            </Text>
          </>
        }
        {...OFFERS_HERO}
      />
      <div className="w-full min-h-130 mt-4 md:mt-12.5 rounded-2xl overflow-hidden relative">
        <Image
          src={"/images/webp/independence-day.webp"}
          alt="Gradient Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <OffersAiSection />
      <CpuArchitectureSection />
      <CpuTransparentPricingSection />
      <CpuPricingDeploymentSection />
      <FaqSection items={CPU_PRICING_FAQ_ITEMS} />
    </>
  );
};

export default OffersPage;
