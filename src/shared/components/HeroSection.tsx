import Image from "next/image";
import { Button, Text } from "@/shared/ui-lib";
import Container from "@/shared/components/container";
import { CircleCheck } from "@/shared/icons/lucide-icon-map";
import LinkComponent from "@/shared/ui-lib/link";

const trustBadgesData = [
  "Data residency in India",
  "DPDP Act compliant",
  "ISO 27001",
  "DDoS protection included",
  "99.9% uptime SLA",
];

const HeroSection = ({
  title,
  description,
  primaryCta,
  primaryCtaRoute,
  secondaryCta,
  secondaryCtaRoute,
  badgeText,
  image,
  badgeIcon,
  trustBadges = trustBadgesData,
}: {
  title: React.ReactNode;
  description: string;
  primaryCta: string;
  primaryCtaRoute?: string;
  secondaryCta: string;
  secondaryCtaRoute?: string;
  badgeText: string;
  image?: string;
  badgeIcon?: boolean;
  trustBadges?: string[];
}) => {
  return (
    <section className="relative bg-white pt-8 md:pt-16 2xl:pt-25">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-70"
          className="bg-primary-20 p-1 rounded-md border border-primary-30"
        >
          {badgeText}
        </Text>

        {title}

        <Text as="h6" className="mt-2.5 max-w-4xl" align="center">
          {description}
        </Text>

        <div className="flex gap-4 mt-4 md:mt-7.5 z-10">
          <LinkComponent href={primaryCtaRoute ?? ""}>
            {primaryCta}
          </LinkComponent>
          <LinkComponent href={secondaryCtaRoute ?? ""} variant="outline">
            {secondaryCta}
          </LinkComponent>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 md:mt-12.5 w-full">
          {trustBadges.map((badge, index) => (
            <div key={badge} className="flex items-center gap-3">
              {badgeIcon && <CircleCheck size={16} />}
              <span className="text-foreground text-sm whitespace-nowrap">
                {badge}
              </span>
              {!badgeIcon && index < trustBadges.length - 1 && (
                <span className="text-foreground text-sm">•</span>
              )}
            </div>
          ))}
        </div>

        {image ? (
          <div className="w-full min-h-50 md:min-h-[80vh] mt-4 md:mt-12.5 rounded-2xl overflow-hidden relative">
            <Image
              src={image}
              alt="Gradient Background"
              fill
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <div className="mt-4 md:mt-12.5"></div>
        )}
      </Container>
    </section>
  );
};

export default HeroSection;
