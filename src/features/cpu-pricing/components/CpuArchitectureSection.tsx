import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { CpuIcon } from "lucide-react";
import Image from "next/image";

type CpuArchitectureItem = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  size: "small" | "large";
  title: string;
  description: string;
};

const CPU_ARCHITECTURE_SECTION_ITEMS = [
  {
    id: "data-preprocessing",
    iconSrc: "/icons/pipeline.svg",
    iconAlt: "Data preprocessing pipeline",
    size: "small",
    title: "Data Preprocessing Pipeline",
    description:
      "Separate preprocessing from training. CPU instances clean and tokenize data, keeping GPU resources focused solely on model training.",
  },
  {
    id: "inference-serving",
    iconSrc: "/icons/inferencing.svg",
    iconAlt: "Inference serving",
    size: "small",
    title: "Inference Serving",
    description:
      "Serve smaller or latency-tolerant models on CPU to save costs, scaling horizontally while reserving GPU inference for high-demand workloads.",
  },
  {
    id: "api-application-layer",
    iconSrc: "/icons/application.svg",
    iconAlt: "API and application layer",
    size: "small",
    title: "API and Application Layer",
    description:
      "Run AI service frontends on CPU — APIs, auth, logging, business logic while connecting seamlessly to GPU inference and training backends.",
  },
  {
    id: "database-state-management",
    iconSrc: "/icons/database.svg",
    iconAlt: "Database and state management",
    size: "small",
    title: "Database and State Management",
    description:
      "Store training metadata, logs, model versions, and application data on CPU instances using standard databases without GPU overhead.",
  },
] as const;

type CpuArchitectureItemProps = {
  item: CpuArchitectureItem;
};

const CpuArchitectureItem = ({ item }: CpuArchitectureItemProps) => {
  return (
    <article className="flex h-full flex-col rounded-md bg-white p-4 md:p-10">
      <div className="p-3.5 bg-primary-25 rounded-md w-fit">
        <Image src={item.iconSrc} alt={item.iconAlt} width={22} height={22} />
      </div>
      <Text as="h3" weight="semibold" className="mt-5">
        {item.title}
      </Text>
      <Text as="h6" textColor="black-5" className="mt-5">
        {item.description}
      </Text>
    </article>
  );
};

const CpuArchitectureSection = () => {
  return (
    <section
      className="relative bg-gray-10 pb-8 md:pb-16 2xl:pb-25"
      aria-labelledby="cpu-architecture-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <div className=" bg-primary-20 p-1 rounded-md border border-primary-160 shadow-sm px-2.5 py-1.5 flex items-center gap-2">
          <CpuIcon className="size-3.5 text-primary-70" />
          <Text as="small" textColor="primary-70" className="">
            Architecture Guide
          </Text>
        </div>
        <Text
          as="h2"
          id="cpu-architecture-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl mt-5"
        >
          How CPU and
          <Text as="span" variant="h2" textColor="primary">
            GPU Work Together
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          {`A balanced compute strategy that maximises performance while minimising cost each processor doing what it does best.`}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 mt-4 md:grid-cols-2 md:mt-12.5">
          {CPU_ARCHITECTURE_SECTION_ITEMS.map((item) => (
            <li key={item.id}>
              <CpuArchitectureItem item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CpuArchitectureSection;
