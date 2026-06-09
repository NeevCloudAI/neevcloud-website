import Container from "@/shared/components/container";
import {
  GPU_FOOTER_SECTION_CERTIFICATION_ALT,
  GPU_FOOTER_SECTION_CERTIFICATION_IMAGE,
  GPU_FOOTER_SECTION_COPYRIGHT,
} from "@/shared/constants/gpu-footer-section.constants";
import type { GpuFooterSectionContent } from "@/shared/types/gpu-footer-section.types";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import LinkComponent from "../ui-lib/link";

const GpuFooterSection = ({
  buttonCta,
  buttonLink,
  buttonTarget,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description,
}: GpuFooterSectionContent) => {
  return (
    <section
      className="bg-black pb-8 md:pb-25"
      aria-labelledby="gpu-footer-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-footer-section-heading"
          align="center"
          textColor="white"
          className="max-w-6xl"
        >
          {titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {titleHighlight}
          </Text>
          {titleSuffix}
        </Text>

        <Text
          as="h6"
          align="center"
          textColor="gray-60"
          className="mt-2.5 max-w-3xl"
        >
          {description}
        </Text>

        <LinkComponent
          href={buttonLink}
          target={buttonTarget}
          spacing="lg"
          className="mt-4 w-fit md:mt-12.5"
        >
          {buttonCta}
        </LinkComponent>

        <Image
          src={GPU_FOOTER_SECTION_CERTIFICATION_IMAGE}
          alt={GPU_FOOTER_SECTION_CERTIFICATION_ALT}
          width={300}
          height={80}
          className="mt-8 h-auto w-full max-w-xs object-contain md:mt-12.5"
        />

        <Text align="center" textColor="gray-60" className="mt-6 md:mt-12.5">
          {GPU_FOOTER_SECTION_COPYRIGHT}
        </Text>
      </Container>
    </section>
  );
};

export default GpuFooterSection;
