import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

type CpuPricingDeploymentItem = {
  id: number;
  stepNumber: string;
  stepLabel: string;
  title: string;
  description: string;
  listItems?: readonly string[];
  codeSnippet?: {
    code: string;
    textColor: string;
  }[];
};

const CPU_PRICING_DEPLOYMENT_SECTION_ITEMS: CpuPricingDeploymentItem[] = [
  {
    id: 1,
    stepNumber: "01",
    stepLabel: "STEP 01",
    title: "Create Account",
    description:
      "Register at my.neevcloud.com, complete KYC verification, and create a project.",
    codeSnippet: [
      {
        code: "my.neevcloud.com",
        textColor: "black",
      },
    ],
  },
  {
    id: 2,
    stepNumber: "02",
    stepLabel: "STEP 02",
    title: "Launch Instance",
    description: "Choose flavor, OS, volume type, network, and SSH key.",
    listItems: [
      "Select instance type",
      "Choose operating system",
      "Configure network",
      "Add SSH key",
      "Configure storage",
      "Review and launch",
    ],
  },
  {
    id: 3,
    stepNumber: "03",
    stepLabel: "STEP 03",
    title: "Connect via SSH",
    description:
      "Access your instance using the public IP and SSH key. Windows instances support RDP.",
    codeSnippet: [
      {
        code: "# connect to your instance",
        textColor: "black",
      },
      {
        code: "$ ssh -i your-key.pem ubuntu@<ip>",
        textColor: "primary",
      },
    ],
  },
] as const;

type CpuPricingDeploymentItemProps = {
  item: CpuPricingDeploymentItem;
};

const CpuPricingDeploymentItem = ({ item }: CpuPricingDeploymentItemProps) => {
  return (
    <article className="flex h-full flex-col rounded-md bg-white p-4 md:p-9 border border-primary-130">
      <div className="flex items-center justify-between">
        <div>
          <Text as="small" textColor="primary" fontFamily="spaceMono">
            {item.stepLabel}
          </Text>
          <Text as="h3" className="mt-2.5" weight="semibold">
            {item.title}
          </Text>
        </div>
        <Text
          as="h1"
          className="text-[3rem] md:text-[7rem]"
          fontFamily="spaceMono"
          textColor="primary-85"
          weight="normal"
        >
          {item.stepNumber}
        </Text>
      </div>
      <Text
        as="h6"
        textColor="gray-66"
        className="mt-5 md:mt-11.5"
        weight="regular"
      >
        {item.description}
      </Text>
      {item.listItems ? (
        <ul className="mt-5 md:mt-8.75 flex flex-col gap-3">
          {item.listItems?.map((item) => (
            <li key={item} className="flex gap-2.5 rounded-md">
              <Text as="h6" textColor="primary" className="shrink-0">
                •
              </Text>
              <Text as="h6" textColor="gray-66">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      ) : (
        <pre className="mt-5 md:mt-8.75 flex gap-1 flex-col p-4 md:px-4.25 md:py-3 border border-primary rounded-md bg-primary-40">
          {item.codeSnippet?.map((item) => (
            <code key={item.code} className={`text-${item.textColor} text-xs`}>
              {item.code}
            </code>
          ))}
        </pre>
      )}
    </article>
  );
};

const CpuPricingDeploymentSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-25"
      aria-labelledby="cpu-pricing-deployment-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="cpu-pricing-deployment-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Deployment
          <Text as="span" variant="h2" textColor="primary">
            Modes Comparision
          </Text>
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 md:gap-7.5 mt-4 md:grid-cols-3 md:mt-27.5">
          {CPU_PRICING_DEPLOYMENT_SECTION_ITEMS.map((item) => (
            <li key={item.id}>
              <CpuPricingDeploymentItem item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CpuPricingDeploymentSection;
