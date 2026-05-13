import Image from "next/image";
import Container from "@/shared/components/container";
import { Divider, Text } from "@/shared/ui-lib";
import { INFRASTRUCTURE_GPU_AVAILABILITY_ROWS } from "@/features/Home/constants/infrastructure-section.constants";
import GpuAvailabilityRow from "./GpuAvailabilityRow";

function InfrastructureNativeFlowDiagram() {
  return (
    <figure className="mt-6 md:mt-10 flex w-full flex-col items-center">
      <div className="flex w-full gap-8">
        <div className="w-full rounded-lg border border-black-90 bg-black-50 px-2 py-2 text-center shadow-sm">
          <Text
            as="span"
            weight="medium"
            textColor="white"
            className="text-sm sm:text-base"
          >
            Gen AI Models
          </Text>
        </div>
        <div className="w-full rounded-lg border border-black-90 bg-black-50 px-2 py-2 text-center shadow-sm">
          <Text
            as="span"
            weight="medium"
            textColor="white"
            className="text-sm sm:text-base"
          >
            Your Applications
          </Text>
        </div>
      </div>

      <svg
        className="h-14 w-full shrink-0 text-white"
        viewBox="0 0 280 56"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 70 0 L 70 22 H 210 L 210 0 M 140 22 L 140 56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="rounded-lg border border-white/20 bg-[#6b7280] px-4 md:px-8 py-2 md:py-4 text-center shadow-sm">
        <Text as="h4" weight="semibold" textColor="white">
          AI SuperCloud
        </Text>
      </div>

      <svg
        viewBox="0 0 120 120"
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="#E6E6E6"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="60" y1="95" x2="60" y2="35" />

          <polyline points="30,55 60,25 90,55" />
        </g>
      </svg>

      <div className="flex items-center justify-center gap-2 rounded-lg border border-primary-100/60 bg-primary-100/30 px-6 md:px-12 py-2 md:py-4">
        <Image
          src="/icons/logo-white.svg"
          alt="NeevCloud Logo"
          width={150}
          height={150}
        />
      </div>
    </figure>
  );
}

export default function InfrastructureSectionContent() {
  const rowCount = INFRASTRUCTURE_GPU_AVAILABILITY_ROWS.length;

  return (
    <div className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black text-white">
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl"
        aria-hidden="true"
      ></div>
      <Container className="flex flex-col py-[3vh] md:py-[7vh]">
        <div className="flex justify-center">
          <Text as="h2">
            Infrastructure That
            <Text as="span" variant="h2" textColor="primary">
              Removes Barriers
            </Text>
          </Text>
          <Text as="h2">,</Text>
        </div>

        <Text as="h2" align="center">
          Not Adds Them
        </Text>

        <div className="flex flex-col items-center my-4">
          <Text>
            We built NeevCloud to give every innovator access to world-class AI
            infrastructure without the
          </Text>
          <Text>traditional limits of cost, complexity, or control.</Text>
        </div>

        <div className="flex flex-col md:flex-row mt-2 md:mt-8 gap-4">
          <div className="flex-2 bg-black-80 rounded-md">
            <div className="p-4 md:p-8">
              <Text as="h3" weight="semibold">
                On-Demand GPU Access
              </Text>
              <Text as="h6" textColor="primary">
                Available When You Need It
              </Text>
              <Text
                as="h6"
                className="pt-4"
                weight="regular"
                textColor="gray-10"
              >
                Provision GPU resources in minutes without long wait times or
                complex procurement processes. Start training immediately and
                scale as your projects grow.
              </Text>
            </div>
            <Divider orientation="horizontal" className="bg-white-10" />
            {INFRASTRUCTURE_GPU_AVAILABILITY_ROWS.map((row, index) => (
              <GpuAvailabilityRow
                key={row.id}
                rowId={row.id}
                modelName={row.modelName}
                showDividerBelow={index < rowCount - 1}
              />
            ))}
          </div>
          <div className="flex flex-1.5 flex-col items-center text-center rounded-md p-4 md:p-8 bg-black-80">
            <Text as="h3" weight="semibold">
              AI-Native Infrastructure
            </Text>
            <Text as="h6" textColor="primary" className="md:mt-1">
              Purpose-Built for Modern AI
            </Text>
            <Text
              as="h6"
              className="mt-1 md:mt-4 max-w-md"
              weight="regular"
              textColor="gray-10"
              align="center"
            >
              Every layer of our stack is designed specifically for AI
              workloads. We engineer for performance and efficiency.
            </Text>
            <InfrastructureNativeFlowDiagram />
          </div>
        </div>

        <div className=" w-full flex flex-col md:flex-row mt-4 gap-4">
          <div className="relative flex-1 rounded-md p-4 md:p-8 bg-black-80">
            <Text as="h3" weight="semibold">
              High Memory Capacity
            </Text>
            <Text textColor="primary" className="pt-1 pb-2">
              Handle Larger Models, Faster
            </Text>
            <Text textColor="gray-10">
              Work with massive datasets and complex models without hitting
              memory bottlenecks. Our GPU configurations provide the capacity
              your most ambitious projects demand.{" "}
            </Text>
            <div className="absolute bottom-0 left-0">
              <Image
                src="/icons/fast.svg"
                alt="High Memory Capacity"
                width={300}
                height={300}
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="flex-2 rounded-md p-4 md:p-8 bg-black-80">
            <Text as="h3" weight="semibold">
              24x7 Best-in-Class Support
            </Text>
            <Text textColor="primary" className="pt-1 pb-2">
              Expert Help, Always Available
            </Text>
            <Text textColor="gray-10">
              Our team understands AI infrastructure because we built it. Get
              responsive support from engineers who know the platform inside and
              out, whenever you need it.
            </Text>
            <div className="flex justify-center">
              <Image
                src="/images/chat-screenshot.png"
                alt="24x7 Best-in-Class Support"
                width={750}
                height={750}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
