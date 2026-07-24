import Image from "next/image";
import { Text, LinkComponent } from "@/shared/ui-lib";
import Container from "@/shared/components/container";
import { CircleCheck } from "@/shared/icons/lucide-icon-map";

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
  primaryCtaTarget,
  secondaryCta,
  secondaryCtaRoute,
  secondaryCtaTarget,
  badgeText,
  image,
  badgeIcon,
  className,
  trustBadges = trustBadgesData,
}: {
  title: React.ReactNode;
  description: string;
  primaryCta?: string;
  primaryCtaRoute?: string;
  primaryCtaTarget?: "_blank" | "_self" | "_parent" | "_top";
  secondaryCta?: string;
  secondaryCtaRoute?: string;
  secondaryCtaTarget?: "_blank" | "_self" | "_parent" | "_top";
  badgeText: string;
  image?: string;
  badgeIcon?: boolean;
  className?: string;
  trustBadges?: readonly string[];
}) => {
  return (
    <section
      className={`relative bg-black pt-8 md:pt-16 2xl:pt-25 ${className}`}
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-90"
          className="bg-primary-90/6 p-1 rounded-md border border-primary-90"
        >
          {badgeText}
        </Text>

        {title}

        <Text
          as="h6"
          className="mt-2.5 max-w-3xl"
          align="center"
          textColor="white"
        >
          {description}
        </Text>

        {primaryCta || secondaryCta ? (
          <div className="w-full z-10 mt-4 flex gap-4 flex-wrap items-center justify-center md:mt-7.5">
            {primaryCta ? (
              <LinkComponent
                href={primaryCtaRoute ?? ""}
                target={primaryCtaTarget}
                spacing="lg"
                className="w-full md:w-auto"
              >
                {primaryCta}
              </LinkComponent>
            ) : null}
            {secondaryCta ? (
              <LinkComponent
                href={secondaryCtaRoute ?? ""}
                variant="outline"
                target={secondaryCtaTarget}
                spacing="lg"
                className="w-full md:w-auto bg-white"
              >
                {secondaryCta}
              </LinkComponent>
            ) : null}
          </div>
        ) : null}

        {trustBadges.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 md:mt-12.5 w-full">
            {trustBadges.map((badge, index) => (
              <div key={badge} className="flex items-center gap-3">
                {badgeIcon && <CircleCheck size={16} />}
                <span className="text-white text-sm whitespace-nowrap">
                  {badge}
                </span>
                {!badgeIcon && index < trustBadges.length - 1 && (
                  <span className="text-white text-sm">•</span>
                )}
              </div>
            ))}
          </div>
        ) : null}

        {image ? (
          <div className="w-full min-h-50 md:min-h-[80vh] mt-4 md:mt-12.5 rounded-2xl overflow-hidden relative">
            <Image
              src={image}
              alt="Gradient Background"
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : primaryCta || secondaryCta || trustBadges.length > 0 ? (
          <div className="mt-4 md:mt-12.5"></div>
        ) : null}
      </Container>
    </section>
  );
};

export default HeroSection;
