import Image from "next/image";
import Link from "next/link";
import { Button, Text } from "@/shared/ui-lib";

const trustBadges = [
  "Data residency in India",
  "DPDP Act compliant",
  "ISO 27001",
  "DDoS protection included",
  "99.9% uptime SLA",
];

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center gap-4 pt-[8vh] md:pt-[10vh] px-4 sm:px-6 md:px-8 pb-30 w-full">
      {/* Badge */}
      <div className="z-10 px-3 py-1 text-center border border-primary/12 rounded-[4px] text-primary text-[12px] font-normal leading-[18px] tracking-[0.08px]">
        Bare GPU Compute - Billed in INR
      </div>

      {/* Headline */}
      <div className="z-10 flex flex-col items-center text-center gap-4 mt-1">
        <Text as="h1" weight="semibold">
          The Right GPU for Every
        </Text>
        <Text as="h1" textColor="primary" weight="semibold">
          AI Workload
        </Text>
      </div>

      {/* Subtitle */}
      <Text
        as="h6"
        className="z-10 max-w-[560px] md:max-w-[700px]"
        align="center"
      >
        One platform. On-demand, reserved, or spot, all on India-sovereign
        infrastructure. Every instance includes InfiniBand networking,
        NVMe-attached storage, and pre-built ML images. Live within minutes.
      </Text>

      {/* CTA Buttons */}
      <div className="flex gap-4 mt-4 z-10">
        <Link href="#">
          <Button>Configure Now</Button>
        </Link>
        <Link href="#">
          <Button variant="outline" textColor="black">
            Compare GPUs
          </Button>
        </Link>
      </div>

      {/* Trust Badges */}
      <div className="z-10 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1 max-w-[892px] w-full">
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

      {/* Dashboard — gradient bg, gpu.png floats inside with padding all around */}
      <div className="z-10 w-full max-w-[1300px] mt-6 rounded-2xl overflow-hidden relative px-6 pt-8 sm:px-10 sm:pt-20 md:px-40 md:pt-25">
        {/* Background: gradient_gpu.jpg */}
        <Image
          src="/images/gradient_gpu.jpg"
          alt="Gradient Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Foreground: gpu.png — cropped at bottom to hide Instance Pricing */}
        <div className="relative z-10">
          <div className="overflow-hidden rounded-lg shadow-lg max-h-[600px] sm:max-h-[600px] md:max-h-[588px] lg:max-h-[588px]">
            <Image
              src="/images/gpu.png"
              alt="GPU Cluster Dashboard"
              width={1024}
              height={614}
              className="w-full h-auto object-top"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
