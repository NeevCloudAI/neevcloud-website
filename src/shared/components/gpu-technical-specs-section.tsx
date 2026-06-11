import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import GpuTechnicalSpecsBarChart from "@/shared/components/gpu-technical-specs-bar-chart";
import GpuTechnicalSpecsTable from "@/shared/components/gpu-technical-specs-table";
import {
  GPU_TECHNICAL_SPECS_TITLE_HIGHLIGHT,
  GPU_TECHNICAL_SPECS_TITLE_PREFIX,
} from "@/shared/constants/gpu-technical-specs-section.constants";
import type { GpuTechnicalSpecsSectionProps } from "@/shared/types/gpu-technical-specs-section.types";
import { Text } from "@/shared/ui-lib";
import LinkComponent from "../ui-lib/link";

const GpuTechnicalSpecsSection = ({
  rows,
  charts,
  buttonCta,
  buttonLink,
  buttonTarget,
  className,
}: GpuTechnicalSpecsSectionProps) => {
  const hasCharts = Boolean(charts?.length);

  return (
    <section
      className={cn("relative bg-primary-5 py-8 md:py-16 2xl:py-25", className)}
      aria-labelledby="gpu-technical-specs-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-technical-specs-section-heading"
          align="center"
          className="max-w-5xl"
        >
          {GPU_TECHNICAL_SPECS_TITLE_PREFIX}
          <Text as="span" variant="h2" textColor="primary">
            {GPU_TECHNICAL_SPECS_TITLE_HIGHLIGHT}
          </Text>
        </Text>

        <div
          className={cn(
            "mt-4 w-full md:mt-12.5",
            hasCharts
              ? "grid grid-cols-1 items-start gap-2.5 lg:grid-cols-[1.15fr_0.85fr]"
              : "max-w-4xl"
          )}
        >
          <GpuTechnicalSpecsTable rows={rows} />

          {hasCharts ? (
            <div className="flex flex-col gap-10 lg:gap-12">
              {charts?.map((chart) => (
                <GpuTechnicalSpecsBarChart key={chart.id} chart={chart} />
              ))}
            </div>
          ) : null}
        </div>

        <LinkComponent
          href={buttonLink}
          target={buttonTarget}
          spacing="lg"
          className="mt-8 md:mt-12.5"
        >
          {buttonCta}
        </LinkComponent>

        {/* <Button spacing="lg" className="mt-8 md:mt-12.5">
          {buttonText}
        </Button> */}
      </Container>
    </section>
  );
};

export default GpuTechnicalSpecsSection;
