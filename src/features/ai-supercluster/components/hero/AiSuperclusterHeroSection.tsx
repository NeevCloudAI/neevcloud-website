import Container from "@/shared/components/container";
import { LinkComponent, Text } from "@/shared/ui-lib";
import {
  AI_SUPERCLUSTER_CALENDLY_URL,
  AI_SUPERCLUSTER_HERO_STATS,
} from "../../constants/ai-supercluster-page.constants";
import AiSuperclusterConfiguratorClient from "./AiSuperclusterConfiguratorClient";

const AiSuperclusterHeroSection = () => {
  return (
    <section className="relative bg-black py-8 md:py-16 2xl:py-25">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col justify-center">
          <Text
            as="small"
            textColor="primary-90"
            className="bg-primary-90/6 p-1 rounded-md border border-primary-90/12 w-fit"
          >
            AI Supercluster · Build-to-Suit
          </Text>

          <Text
            as="h1"
            textColor="white"
            weight="medium"
            className="max-w-2xl mt-2.5"
          >
            AI Supercluster.
            <Text variant="h1" as="span" textColor="primary" weight="medium">
              Built to Suit.
            </Text>
          </Text>

          <Text as="h6" className="mt-2.5 max-w-xl" textColor="gray-01">
            1,000 to 16,000-GPU AI Supercluster, deployed at NeevCloud&apos;s
            AI Gigacampus in Raipur, Central India. Build-to-suit configurations
            across GB300 NVL72, GB200 NVL72, B300, B200, H200, and H100. Reserve
            now.
          </Text>

          <div className="mt-4 md:mt-7.5 flex flex-wrap gap-2.5">
            <LinkComponent href="#gpu-lineup" spacing="lg">
              Explore Clusters →
            </LinkComponent>
            <LinkComponent
              href={AI_SUPERCLUSTER_CALENDLY_URL}
              target="_blank"
              variant="white-outline"
              backgroundColor="transparent"
              spacing="lg"
            >
              Schedule a Call
            </LinkComponent>
          </div>

          <div className="mt-6 md:mt-10 flex flex-wrap gap-6 pt-4 border-t border-white/12">
            {AI_SUPERCLUSTER_HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <Text as="h5" weight="semibold" textColor="white">
                  {stat.value}
                </Text>
                <Text as="small" textColor="gray-80">
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <AiSuperclusterConfiguratorClient />
      </Container>
    </section>
  );
};

export default AiSuperclusterHeroSection;
