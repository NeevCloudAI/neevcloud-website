import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import Image from "next/image";
import type { DeployInstanceSectionProps } from "@/shared/types/deploy-instance-section.types";

const DeployInstanceSection = ({
  title,
  description1,
  description2,
  description3,
  image,
  buttonText1,
  buttonText2,
}: DeployInstanceSectionProps) => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full  md:w-[30%] h-[55%] top-20 right-[-5%] opacity-40 md:opacity-100"></div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl"></div>
      <Container className="flex flex-col items-center justify-center">
        {title}
        <Text
          textColor="gray-10"
          align="center"
          className="mt-2 block md:hidden"
        >
          {description1} {description2} {description3}
        </Text>

        <Text
          textColor="gray-10"
          align="center"
          className="mt-2 md:mt-4 hidden md:block"
        >
          {description1}
        </Text>
        <Text textColor="gray-10" align="center" className="hidden md:block">
          {description2}
        </Text>
        <Text textColor="gray-10" align="center" className="hidden md:block">
          {description3}
        </Text>

        <div className="bg-transparent backdrop-blur-sm border border-white-10 p-2 rounded-md mt-4 md:mt-8">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1000}
            height={image.height ?? 1000}
          />
        </div>

        <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4 md:mt-16 mb-2 md:mb-8">
          <Button weight="semibold">{buttonText1}</Button>
          {buttonText2 && (
            <Button weight="semibold" variant="white" textColor="black">
              {buttonText2}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default DeployInstanceSection;
