import Image from "next/image";
import { Button, Text } from "@/shared/ui-lib";
import Container from "@/shared/components/container";

const trustBadges = [
  "Data residency in India",
  "DPDP Act compliant",
  "ISO 27001",
  "DDoS protection included",
  "99.9% uptime SLA",
];

const HeroSection = ({
  title,
  description1,
  description2,
  description3,
  button1Text,
  button2Text,
  badgeText,
  image,
}: {
  title: React.ReactNode;
  description1: string;
  description2: string;
  description3?: string;
  button1Text: string;
  button2Text: string;
  badgeText: string;
  image: string;
}) => {
  return (
    <Container className="flex flex-col items-center justify-center pt-[3vh] md:pt-[10vh]">
      <Text
        as="small"
        textColor="primary"
        className="bg-primary-20 px-3 py-1 rounded-md border border-primary-30"
      >
        {badgeText}
      </Text>

      {title}

      <Text as="h6" className="mt-4 block md:hidden" align="center">
        {description1} {description2} {description3}
      </Text>

      <Text as="h6" className="mt-4 hidden md:block">
        {description1}
      </Text>
      <Text as="h6" className="hidden md:block">
        {description2}
      </Text>
      {description3 && (
        <Text as="h6" className="hidden md:block">
          {description3}
        </Text>
      )}

      <div className="flex gap-4 mt-4 md:mt-8 z-10">
        <Button>{button1Text}</Button>
        <Button variant="outline" textColor="black">
          {button2Text}
        </Button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-4 md:mt-12 w-full">
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

      <div className="w-full min-h-50 md:min-h-dvh mt-6 rounded-2xl overflow-hidden relative">
        <Image
          src={image}
          alt="Gradient Background"
          fill
          className="object-contain object-center"
          priority
        />
      </div>
    </Container>
  );
};

export default HeroSection;
