import Image from "next/image";
import { Button, Text } from "@/shared/ui-lib";
import Container from "@/shared/components/container";

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
  button1Text,
  button2Text,
  badgeText,
  image,
  trustBadges = trustBadgesData,
}: {
  title: React.ReactNode;
  description: string;
  button1Text: string;
  button2Text: string;
  badgeText: string;
  image?: string;
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

        <Text as="h6" className="mt-2.5 max-w-2xl" align="center">
          {description}
        </Text>

        <div className="flex gap-4 mt-4 md:mt-7.5 z-10">
          <Button>{button1Text}</Button>
          <Button variant="outline" textColor="black">
            {button2Text}
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 md:mt-12.5 w-full">
          {trustBadges.map((badge, index) => (
            <div key={badge} className="flex items-center gap-3">
              <span className="text-foreground text-sm whitespace-nowrap">
                {badge}
              </span>
              {index < trustBadges.length - 1 && (
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
