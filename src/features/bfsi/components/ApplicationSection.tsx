import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";

type ApplicationCardProps = {
  label: string;
  title: string;
  description: string;
  icon: string;
  theme?: "light" | "dark";
  image?: string;
  className?: string;
};

const ApplicationCard = ({
  label,
  title,
  description,
  icon,
  theme = "light",
  image,
  className,
}: ApplicationCardProps) => {
  const isLight = theme === "light";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md p-4 md:p-10",
        isLight ? "bg-white" : "bg-black",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2.5">
        <div
          className={cn(
            "w-fit rounded-md p-3.75",
            isLight ? "bg-gray-10" : "bg-gray-90",
          )}
        >
          <Image src={icon} alt="" width={30} height={30} />
        </div>
        <Text
          as="h5"
          weight="semibold"
          textColor={isLight ? "black" : "white"}
          className="shrink-0 uppercase tracking-wide"
        >
          {label}
        </Text>
      </div>
      <Text
        as="h3"
        weight="semibold"
        className="mt-5"
        textColor={isLight ? "black" : "white"}
      >
        {title}
      </Text>
      <Text as="h6" className="mt-2.5" textColor={isLight ? "black" : "white"}>
        {description}
      </Text>
      {image ? (
        <div className="relative mt-6 w-full flex-1 md:mt-8">
          <Image
            src={image}
            alt=""
            width={640}
            height={360}
            className="h-auto w-full object-contain"
          />
        </div>
      ) : null}
    </article>
  );
};

const BFSIApplicationsSection = () => {
  return (
    <section className="relative bg-gray-10 py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="primary" align="center" className="max-w-4xl">
          BFSI applications
          <Text as="span" variant="h2" textColor="black">
            on NeevCloud.
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5" className="max-w-3xl">
          {`Real workloads from real institutions, fraud, risk, trading, claims, and compliance, running on GPU infrastructure with data sovereignty.`}
        </Text>
        <div className="grid w-full grid-cols-1 gap-5 pt-4 md:grid-cols-6 md:pt-12.5">
          <ApplicationCard
            className="md:col-span-3 md:row-span-2"
            label="01 - FLAGSHIP"
            title="Fraud Detection & Prevention"
            description="Real-time transaction monitoring using ML models. Detect anomalies, prevent fraud, and reduce false positives with GPU-accelerated inference."
            icon="/icons/brain.svg"
            image="/images/fraud-detection.png"
          />
          <ApplicationCard
            className="md:col-span-3"
            label="02"
            title="Credit Risk Modeling"
            description="Train credit scoring models, assess portfolio risk, and run stress tests on GPU clusters optimized for financial ML workloads."
            icon="/icons/brain.svg"
          />
          <ApplicationCard
            className="md:col-span-3"
            label="03"
            title="Algorithmic Trading & Quant"
            description="Backtesting, portfolio optimization, and high-frequency trading strategies. GPU clusters for complex quantitative models."
            icon="/icons/brain.svg"
          />
          <ApplicationCard
            className="md:col-span-2"
            label="04"
            title="Insurance Claims"
            description="Automated claims processing, risk assessment, and underwriting using AI models."
            icon="/icons/brain.svg"
          />
          <ApplicationCard
            className="md:col-span-2"
            theme="dark"
            label="05 - ENTERPRISE"
            title="Analytics & Personalization"
            description="Analyze customer behavior, predict churn, deliver personalized financial products with ML-powered segmentation."
            icon="/icons/brain.svg"
          />
          <ApplicationCard
            className="md:col-span-2"
            label="06"
            title="Regulatory Reporting"
            description="Automated compliance monitoring, transaction surveillance, audit-ready infrastructure."
            icon="/icons/brain.svg"
          />
        </div>
      </Container>
    </section>
  );
};

export default BFSIApplicationsSection;
