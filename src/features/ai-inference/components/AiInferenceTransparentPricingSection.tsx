import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import AiInferenceTransparentPricingPanel from "./AiInferenceTransparentPricingPanel";
import { Check } from "@/shared/icons/lucide-icon-map";

const AiInferenceTransparentPricingSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="ai-inference-transparent-pricing-section-heading"
      id="ai-inference-transparent-pricing-section"
    >
      <div
        className="pointer-events-none absolute inset-0 top-20 right-[-5%] h-[60%] w-full bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat opacity-40 md:w-[30%] md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="ai-inference-transparent-pricing-section-heading"
          align="center"
          textColor="primary"
          className="max-w-4xl"
        >
          Transparent
          <Text as="span" variant="h2" textColor="white">
            CPU Pricing
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="gray-75"
          align="center"
          className="mt-2.5 max-w-3xl"
        >
          All instances billed per hour. No hidden fees. Pay only for what you
          use.
        </Text>

        <div
          className="mt-4 w-full rounded-lg border border-white-10 bg-white-5 font-mono shadow-sm backdrop-blur-md md:mt-12.5"
          role="region"
          aria-label="Transparent inference pricing terminal"
        >
          <AiInferenceTransparentPricingPanel />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 md:mt-7.5">
          <div className="bg-black-80 border border-black-30 rounded-md p-4 md:px-5">
            <Text as="small" textColor="gray-80">
              FREE TIER
            </Text>
            <ul className="mt-2.5 flex flex-col gap-2.5">
              <li className="flex items-center gap-2">
                <Check size={12} className="text-primary" />
                <Text as="small" textColor="white">
                  2,00,000 tokens per day
                </Text>
              </li>
              <li className="flex items-center gap-2">
                <Check size={12} className="text-primary" />
                <Text as="small" textColor="white">
                  All models available
                </Text>
              </li>
              <li className="flex items-center gap-2">
                <Check size={12} className="text-primary" />
                <Text as="small" textColor="white">
                  10 requests per minute
                </Text>
              </li>
              <li className="flex items-center gap-2">
                <Check size={12} className="text-primary" />
                <Text as="small" textColor="white">
                  No credit card required
                </Text>
              </li>
            </ul>
          </div>
          <div className="bg-black-80 border border-black-30 rounded-md p-4 md:px-5">
            <Text as="small" textColor="gray-80">
              VOLUME DISCOUNTS
            </Text>
            <ul className="mt-2.5 flex flex-col gap-2.5">
              <li className="flex items-center gap-2">
                <Check size={12} className="text-primary" />
                <Text as="small" textColor="white">
                  Automatic discounts above 10M tokens/month
                </Text>
              </li>
              <li className="flex items-center gap-2">
                <Check size={12} className="text-primary" />
                <Text as="small" textColor="white">
                  Enterprise plans with reserved capacity
                </Text>
              </li>
              <li className="flex items-center gap-2">
                <Check size={12} className="text-primary" />
                <Text as="small" textColor="white">
                  Custom pricing for large-scale deployments
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AiInferenceTransparentPricingSection;
