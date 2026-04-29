import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import NeevCloudImage from "./NeevCloudImage";

const CloudComparisonCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative border border-gray-10 rounded-md px-4 py-8 md:py-12 gap-4 flex items-center overflow-hidden">
      <div className="h-20 w-20 bg-gray-50 shrink-0"></div>
      <div className="pr-8">
        <Text as="h3" weight="semibold">
          {title}
        </Text>
        <Text as="h6">{description}</Text>
      </div>
      <div className="absolute bottom-[-10%] right-0 opacity-80">
        <Image
          src="/icons/green-logo.svg"
          alt="Arrow Right"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

const NeevcloudSection = () => {
  return (
    <Container className="flex flex-col items-center justify-between gap-2 py-[3vh] md:py-[7vh]">
      <div className="flex justify-center gap-2">
        <Text as="h2" weight="semibold">
          Why the
        </Text>
        <Text as="h2" weight="semibold" textColor="primary">
          world
        </Text>
        <Text as="h2" weight="semibold">
          Needs NeevCloud?
        </Text>
      </div>
      <Text as="h6" align={"center"}>
        Legacy cloud providers and expensive &quot;neoclouds&quot; often force a
        choice between performance and price. We believe you should have both.
        NeevCloud is India’s first AI Supercloud, built from the ground up to
        make intelligence accessible to everyone.
      </Text>
      <div className="flex justify-center lg:flex-row flex-col w-full gap-4 mt-4 md:mt-8">
        <Image
          src="/images/cloud-comparision.png"
          alt="NeevCloud Section"
          className="flex-1"
          width={1000}
          height={1000}
        />
        <div className="flex-1 flex flex-col justify-between gap-4 md:gap-0">
          <CloudComparisonCard
            title="No Vendor Lock-in"
            description="Move your data and models freely. We believe in technology freedom, not walled gardens."
          />
          <CloudComparisonCard
            title="Transparent Pricing"
            description="What you see is what you pay. No hidden egress fees or surprise billing."
          />
          <CloudComparisonCard
            title="Sovereign & Secure"
            description="Your data stays within your control, protected by rigorous international security standards and local compliance."
          />
        </div>
      </div>
      <div className="relative bg-primary-10 w-full rounded-md p-4 md:p-6 flex items-center gap-2 md:gap-8 mt-4 md:mt-8">
        <div className="bg-white w-fit py-2.5 px-3.5 md:py-5 md:px-6.5 rounded-full border border-primary">
          <Image
            src="/icons/india-map.svg"
            alt="India Map"
            width={70}
            height={70}
          />
        </div>
        <div>
          <div className="flex gap-2">
            <Text as="h3" weight="semibold">
              India&apos;s First
            </Text>
            <Text as="h3" weight="semibold" textColor="primary">
              AI Supercloud
            </Text>
          </div>
          <Text as="h6">
            Built to Make Intelligence Accessible to Everyone.
          </Text>
        </div>
        <div className="absolute bottom-0 right-0">
          <NeevCloudImage />
        </div>
      </div>
    </Container>
  );
};

export default NeevcloudSection;
