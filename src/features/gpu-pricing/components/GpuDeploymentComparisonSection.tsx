import Container from "@/shared/components/container";
import { Divider, Text } from "@/shared/ui-lib";
import {
  DEPLOYMENT_COMPARISON_COLUMN_HEADERS,
  DEPLOYMENT_COMPARISON_HARDWARE_NOTE,
  DEPLOYMENT_COMPARISON_SERVICE_CARDS,
  DEPLOYMENT_COMPARISON_TABLE_CATEGORIES,
} from "../data/deployment-comparison-section.data";
import DeploymentComparisonColumnHeader from "./deployment-comparison/DeploymentComparisonColumnHeader";
import DeploymentComparisonLegend from "./deployment-comparison/DeploymentComparisonLegend";
import DeploymentComparisonServiceCard from "./deployment-comparison/DeploymentComparisonServiceCard";
import DeploymentComparisonTableCategory from "./deployment-comparison/DeploymentComparisonTableCategory";

const GpuDeploymentComparisonSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="gpu-deployment-comparison-section-heading"
    >
      <Container className="flex max-w-screen-xl flex-col items-center justify-center overflow-hidden 2xl:max-w-screen-xl">
        <Text
          as="h2"
          id="gpu-deployment-comparison-section-heading"
          align="center"
          className="mt-4 max-w-4xl"
          textColor="white"
        >
          Modes Comparision
          <Text as="span" variant="h2" textColor="primary">
            Deployment
          </Text>
        </Text>
        <Text as="h6" align="center" className="mt-2.5 max-w-3xl text-white/82">
          Choose the right deployment for your GPU workload
        </Text>

        <div className="mt-4 flex w-full flex-col gap-6 md:mt-12.5 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] lg:grid-rows-[auto_auto_1fr] lg:gap-4">
          <div className="lg:col-[1/3] lg:row-1">
            <Text as="h3" textColor="white" weight="medium">
              Both run on the same GPU hardware pick
              <Text as="span" variant="h3" textColor="primary" weight="medium">
                based on how much control you need.
              </Text>
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-[3/4] lg:row-[1/3] lg:flex lg:flex-row lg:justify-between lg:gap-4">
            {DEPLOYMENT_COMPARISON_COLUMN_HEADERS.map((header) => (
              <DeploymentComparisonColumnHeader
                key={header.id}
                header={header}
              />
            ))}
          </div>

          <div className="hidden lg:block lg:col-[2/3] lg:row-2">
            <Text
              as="small"
              textColor="white"
              fontFamily="spaceMono"
              className="text-gray-10/60"
            >
              FEATURE
            </Text>
          </div>

          <aside className="flex flex-col gap-5 lg:col-[1/2] lg:row-[2/4]">
            {DEPLOYMENT_COMPARISON_SERVICE_CARDS.map((card) => (
              <DeploymentComparisonServiceCard key={card.id} card={card} />
            ))}
            <div className="flex w-full items-center gap-3 rounded-lg border border-primary/14 bg-blue-10 p-3">
              <span className="text-gray-10/25" aria-hidden="true">
                •
              </span>
              <Text as="small" className="text-gray-10/60">
                {DEPLOYMENT_COMPARISON_HARDWARE_NOTE}
              </Text>
            </div>
          </aside>

          <div className="flex flex-col gap-2.25 lg:col-[2/4] lg:row-[3/4]">
            <Text
              as="small"
              textColor="white"
              fontFamily="spaceMono"
              className="text-gray-10/60 lg:hidden"
            >
              FEATURE
            </Text>

            {DEPLOYMENT_COMPARISON_TABLE_CATEGORIES.map((category) => (
              <DeploymentComparisonTableCategory
                key={category.id}
                category={category}
              />
            ))}

            <Divider orientation="horizontal" className="bg-gray-10/10" />
            <DeploymentComparisonLegend />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GpuDeploymentComparisonSection;
