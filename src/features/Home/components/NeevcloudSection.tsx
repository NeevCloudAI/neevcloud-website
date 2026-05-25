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
    <div className="relative border border-gray-10 rounded-md px-6 py-12 gap-4 flex items-center overflow-hidden">
      <div className="h-20 w-20 bg-gray-50 shrink-0"></div>
      <div className="pr-8">
        <Text as="h3" weight="semibold">
          {title}
        </Text>
        <Text as="h6" textColor="black-5">
          {description}
        </Text>
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

const NeevcloudSection: React.FC = () => {
  return (
    <Container className="flex flex-col items-center justify-between gap-12 py-8 md:py-16 2xl:py-25">
      <div>
        <Text as="h2" className="max-w-4xl" align="center">
          Why the
          <Text as="span" variant="h2" textColor="primary">
            world
          </Text>
          Needs NeevCloud?
        </Text>
        <Text as="h6" align="center" textColor="black-5" className="max-w-3xl">
          Legacy cloud providers and expensive &quot;neoclouds&quot; often force
          a choice between performance and price. We believe you should have
          both. NeevCloud is India’s first AI Supercloud, built from the ground
          up to make intelligence accessible to everyone.
        </Text>
      </div>
      <div className="flex justify-center lg:flex-row flex-col w-full gap-4">
        <div className="relative flex-1">
          <Image
            src="/images/cloud-comparision.png"
            alt="NeevCloud Section"
            className="flex-1 w-full h-full object-cover rounded-md"
            width={1000}
            height={1000}
          />
          <div className="absolute top-3 md:top-5 left-[7%] md:left-[15%] flex flex-col items-center">
            <Text as="h5" weight="semibold">
              Legacy Cloud
            </Text>
            <Text as="small" align="center" className="mt-2.5">
              High Cost. Low Flexibility.
            </Text>
            <Text as="small" align="center">
              Hidden Limitations.
            </Text>
          </div>

          <div className="absolute top-3 md:top-5 right-[7%] md:right-[5%] flex flex-col items-center">
            <Text as="h5" weight="semibold" textColor="primary">
              NeevCloud
            </Text>
            <Text as="small" align="center" className="hidden md:block mt-2.5">
              High Performance. Transparent Pricing.
            </Text>
            <Text as="small" align="center" className="block md:hidden mt-2.5">
              High Performance.
            </Text>
            <Text as="small" align="center" className="block md:hidden">
              Transparent Pricing.
            </Text>
            <Text as="small" align="center">
              Sovereign & Secure.
            </Text>
          </div>

          <div className="absolute bottom-5 left-[2%] flex flex-col gap-1 md:gap-4 items-start">
            <div className="flex items-center gap-2">
              <div className="w-4 md:w-6 h-4 md:h-6 bg-black rounded-full"></div>
              <Text as="small">Vendor Lock-in</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 md:w-6 h-4 md:h-6 bg-black rounded-full"></div>
              <Text as="small">Hidden Fees</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 md:w-6 h-4 md:h-6 bg-black rounded-full"></div>
              <Text as="small">Complexity</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 md:w-6 h-4 md:h-6 bg-black rounded-full"></div>
              <Text as="small">Data Risks</Text>
            </div>
          </div>

          <div className="absolute bottom-5 right-[2%] flex flex-col gap-1 md:gap-4 items-end">
            <div className="flex items-center gap-2">
              <Text as="small" textColor="primary">
                Freedom
              </Text>
              <div className="w-4 md:w-6 h-4 md:h-6 bg-primary rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <Text as="small" textColor="primary">
                Transparency
              </Text>
              <div className="w-4 md:w-6 h-4 md:h-6 bg-primary rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <Text as="small" textColor="primary">
                High Performance
              </Text>
              <div className="w-4 md:w-6 h-4 md:h-6 bg-primary rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <Text as="small" textColor="primary">
                Security
              </Text>
              <div className="w-4 md:w-6 h-4 md:h-6 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between gap-3">
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
      <div className="relative bg-primary-10 w-full rounded-md p-4 md:p-8 flex items-center gap-2 md:gap-8">
        <div className="bg-white w-fit py-2.5 px-3.5 md:py-5 md:px-6.5 rounded-full border border-primary">
          <Image
            src="/icons/india-map.svg"
            alt="India Map"
            width={70}
            height={70}
          />
        </div>
        <div>
          <Text as="h3" weight="semibold">
            India&apos;s First
            <Text as="span" variant="h3" weight="semibold" textColor="primary">
              AI Supercloud
            </Text>
          </Text>
          <Text as="h6" textColor="black-5" className="mt-0.5">
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
