import React from "react";
import Container from "@/shared/components/container";
import { Button, Text } from "@/shared/ui-lib";
import Image from "next/image";

type ButtonProps = {
  label: string;
  variant?: "white" | "default";
  textColor?:
    | "default"
    | "secondary"
    | "outline"
    | "black"
    | "ghost"
    | "primary"
    | "destructive"
    | "blue"
    | "gray";
};

type PricingSectionProps = {
  headingLine1: string;
  headingLine2Primary: string;
  headingLine2White?: string;
  headingInline?: boolean;
  subText?: string | string[];
  imageSrc: string;
  imageAlt?: string;
  buttons?: ButtonProps[];
};

const PricingSection = ({
  headingLine1,
  headingLine2Primary,
  headingLine2White,
  headingInline = false,
  subText,
  imageSrc,
  imageAlt = "",
  buttons = [],
}: PricingSectionProps) => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div className="absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[55%] top-20 right-[-5%] opacity-40 md:opacity-100" />
      <div className="absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl" />

      <Container className="flex flex-col items-center justify-center">
        {headingInline ? (
          <Text as="h2" textColor="white" weight="semibold" lineHeight="xxxl">
            {headingLine1}{" "}
            <Text as="span" variant="h2" textColor="primary" weight="semibold">
              {headingLine2Primary}
            </Text>
          </Text>
        ) : (
          <>
            <Text as="h2" textColor="white" weight="semibold" lineHeight="xxxl">
              {headingLine1}
            </Text>
            <Text as="h2" weight="semibold" textColor="primary">
              {headingLine2Primary}
              {headingLine2White && (
                <Text
                  as="span"
                  variant="h2"
                  textColor="white"
                  weight="semibold"
                >
                  {headingLine2White}
                </Text>
              )}
            </Text>
          </>
        )}

        {subText &&
          (Array.isArray(subText) ? (
            subText.map((line, i) => (
              <Text key={i} textColor="gray-10" align="center" className="mt-2">
                {line}
              </Text>
            ))
          ) : (
            <Text textColor="gray-10" align="center" className="mt-2">
              {subText}
            </Text>
          ))}

        <div className="bg-transparent backdrop-blur-xs border border-white-10 p-2 rounded-md mt-4 md:mt-8">
          <Image src={imageSrc} alt={imageAlt} width={1000} height={1000} />
        </div>

        {buttons.length > 0 && (
          <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-4 md:mt-16 mb-2 md:mb-8">
            {buttons.map((btn, i) => (
              <Button
                key={i}
                variant={btn.variant}
                textColor={btn.textColor}
                weight="semibold"
              >
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default PricingSection;
