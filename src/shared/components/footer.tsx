import Image from "next/image";
import { Button, Text } from "../ui-lib";
import Container from "./container";

const FooterComponent = () => {
  return (
    <div className="bg-black py-4 md:py-16">
      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="relative rounded-md bg-primary-100 py-[2vh] md:py-[10vh] px-4 md:px-8 flex flex-col gap-1 overflow-hidden">
          <Text as="h2" weight={"medium"}>
            Start Building on
          </Text>
          <Text as="h2" weight={"medium"}>
            NeevCloud Today
          </Text>
          <Text className="z-2">
            Sign up in 60 seconds. $200 in compute credits, no commitment. Your
            first
          </Text>
          <Text>B200 is already warming up.</Text>
          <div className="mt-2 md:mt-6 flex gap-4 z-1">
            <Button
              variant="outline-primary"
              textColor="black"
              spacing="md"
              weight="semibold"
            >
              Get Started Free
            </Button>
            <Button variant={"black"} spacing="md">
              Talk to Our Team
            </Button>
          </div>
          <div className=" absolute w-[40%] h-full top-10 right-[-5%] bg-[url('/icons/logo-large.svg')] bg-cover bg-center bg-no-repeat"></div>
        </div>

        <div className="mb-4 md:mb-16 w-full flex flex-col md:flex-row gap-8 md:gap-16 text-white">
          <div className="flex flex-col gap-6">
            <Image
              src="/icons/logo-white.svg"
              alt="logo"
              width={150}
              height={150}
            />
            <div>
              <Text>The AI SuperCloud</Text>
              <Text>To Build and Scale Fearlessly</Text>
            </div>
            <div className="flex gap-2 md:gap-4">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
              />
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
              <Image
                src="/icons/twitter.svg"
                alt="twitter"
                width={20}
                height={20}
              />
              <Image
                src="/icons/whatsapp.svg"
                alt="whatsapp"
                width={20}
                height={20}
              />
              <Image
                src="/icons/youtube.svg"
                alt="youtube"
                width={20}
                height={20}
              />
              <Image
                src="/icons/linkedin.svg"
                alt="youtube"
                width={20}
                height={20}
              />
            </div>
            <Image
              src="/icons/iso.svg"
              alt="ISO Images"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8">
            <div>
              <Text as="h6" weight="semibold" className="mb-2 md:mb-4">
                Products
              </Text>
              <Text textColor="white-50" lineHeight="md">
                GPU AI Service
              </Text>
              <Text textColor="white-50" lineHeight="md">
                AI Inference
              </Text>
              <Text textColor="white-50" lineHeight="md">
                GPU Compute
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Storage
              </Text>
            </div>
            <div>
              <Text as="h6" weight="semibold" className="mb-2 md:mb-4">
                Solutions
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Research & Academia
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Enterprises
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Startups & Builders
              </Text>
              <Text textColor="white-50" lineHeight="md">
                AI Labs & Model Builders
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Public Sector & National AI
              </Text>
            </div>
            <div>
              <Text as="h6" weight="semibold" className="mb-2 md:mb-4">
                Pricing
              </Text>
              <Text textColor="white-50" lineHeight="md">
                GPU Pricing
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Inference Pricing
              </Text>
              <Text textColor="white-50" lineHeight="md">
                CPU Compute Pricing
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Inference Pricing
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Cost Efficiency Explained
              </Text>
            </div>
            <div>
              <Text as="h6" weight="semibold" className="mb-2 md:mb-4">
                Developers
              </Text>
              <Text textColor="white-50" lineHeight="md">
                API Reference
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Documentation
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Status Page
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Examples & Tutorials
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Quick Start Guides
              </Text>
            </div>
            <div>
              <Text as="h6" weight="semibold" className="mb-2 md:mb-4">
                Resources
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Blogs
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Case Studies
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Architecture
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Benchmarks
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Whitepapers
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Events & Webinars
              </Text>
            </div>
            <div>
              <Text as="h6" weight="semibold" className="mb-2 md:mb-4">
                Company
              </Text>
              <Text textColor="white-50" lineHeight="md">
                About NeevCloud
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Press & Media
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Careers
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Vision & Mission
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Why NeevCloud
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Leadership
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Contact Us
              </Text>
            </div>
            <div>
              <Text as="h6" weight="semibold" className="mb-2 md:mb-4">
                Legal
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Terms of Usage
              </Text>
              <Text textColor="white-50" lineHeight="md">
                Privacy Policy
              </Text>
              <Text textColor="white-50" lineHeight="md">
                AUP
              </Text>
              <Text textColor="white-50" lineHeight="md">
                SLA
              </Text>
              <Text textColor="white-50" lineHeight="md">
                MSA
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterComponent;
