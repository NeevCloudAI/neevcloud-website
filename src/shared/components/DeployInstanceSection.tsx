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
  showLogo = true,
}: DeployInstanceSectionProps) => {
  return (
    <section className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25">
      {showLogo && (
        <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-full top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"></div>
      )}
      <Container className="flex flex-col items-center justify-center">
        {title}
        <Text as="h6" textColor="black/82" align="center" className="max-w-2xl">
          {description}
        </Text>

        <div
          className={`bg-transparent backdrop-blur-md ${showBorder ? "border border-white/12" : ""} p-2 rounded-md mt-4 md:mt-8`}
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
