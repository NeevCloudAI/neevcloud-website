import FooterComponent from "@/shared/components/footer";
import FaqSection from "@/shared/components/faq/faq-section";
import { Text, LinkComponent } from "@/shared/ui-lib";
import Container from "@/shared/components/container";
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
      <section className="relative bg-black py-8 md:py-16 2xl:py-40 overflow-hidden">
        <Image
          src={"/images/webp/independence-day.webp"}
          alt="Gradient Background"
          fill
          className="object-cover blur-[6px]"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <Container className="relative flex flex-col items-center justify-center">
          <Text
            as="small"
            textColor="saffron"
            className="bg-primary-90/6 p-1 rounded-md border border-primary-90"
          >
            {OFFERS_HERO.badgeText}
          </Text>

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

          <Text
            as="h6"
            className="mt-2.5 max-w-3xl"
            align="center"
            textColor="white"
          >
            {OFFERS_HERO.description}
          </Text>

          <div className="w-full z-10 mt-4 flex gap-4 flex-wrap items-center justify-center md:mt-7.5">
            <LinkComponent
              href={OFFERS_HERO.primaryCtaRoute}
              target={OFFERS_HERO.primaryCtaTarget}
              spacing="lg"
              className="w-full md:w-auto"
            >
              {OFFERS_HERO.primaryCta}
            </LinkComponent>
          </div>

          <div className="mt-4 md:mt-12.5"></div>
        </Container>
      </section>
      <OffersAiSection />
      <CpuArchitectureSection />
      <CpuTransparentPricingSection />
      <CpuPricingDeploymentSection />
      <FaqSection items={CPU_PRICING_FAQ_ITEMS} />
    </>
  );
};

export default OffersPage;
