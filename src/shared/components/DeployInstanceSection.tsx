import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import Image from "next/image";
import type { DeployInstanceSectionProps } from "@/shared/types/deploy-instance-section.types";

const DeployInstanceSection = ({
  title,
  showBorder = true,
  description,
  image,
  buttonText1,
  buttonText2,
  showBGImage = true,
  showLogo = true,
  showBlur = true,
}: DeployInstanceSectionProps) => {
  return (
    <section
      className={`relative ${showBGImage ? 'bg-[url("/images/bg-home.png")] bg-cover bg-center bg-no-repeat bg-black' : "bg-gray-10"} py-[3vh] md:py-[7vh]`}
    >
      {showLogo && (
        <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-full top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"></div>
      )}
      {showBlur && (
        <div className="pointer-events-none absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl"></div>
      )}
      <Container className="flex flex-col items-center justify-center">
        {title}
        <Text
          textColor={showBGImage ? "gray-10" : "black-5"}
          align="center"
          className="max-w-2xl"
        >
          {description}
        </Text>

        <div
          className={`bg-transparent backdrop-blur-sm ${showBorder ? "border border-white-10" : ""} p-2 rounded-md mt-4 md:mt-8`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1000}
            height={image.height ?? 1000}
          />
        </div>

        {(buttonText1 || buttonText2) && (
          <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4 md:mt-16 mb-2 md:mb-8">
            {buttonText1 && <Button weight="semibold">{buttonText1}</Button>}
            {buttonText2 && (
              <Button weight="semibold" variant="white" textColor="black">
                {buttonText2}
              </Button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default DeployInstanceSection;
