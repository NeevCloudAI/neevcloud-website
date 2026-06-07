import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

type HowWeLeadItem = {
  id: number;
  label: string;
  title: string;
  number: string;
  description: string;
};

const HOW_WE_LEAD_ITEMS: HowWeLeadItem[] = [
  {
    id: 1,
    label: "EXPERTISE",
    title: "Technical Depth",
    number: "01",
    description:
      "Our leadership team has built and scaled real-world infrastructure and understands distributed systems, GPU orchestration, production reliability, and infrastructure economics because we've solved these challenges firsthand.",
  },
  {
    id: 2,
    label: "USERS FIRST",
    title: "Customer Focus",
    number: "02",
    description:
      "We listen to what builders need. Our product decisions come from real conversations with teams training models, deploying inference systems, and running production workloads. Infrastructure serves users, not the other way around.",
  },
  {
    id: 3,
    label: "TRANSPARENCY",
    title: "Transparent Operations",
    number: "03",
    description:
      "We communicate openly about capabilities, limitations, and roadmap. No overpromising. No hiding behind marketing language. Clear information that respects our users' intelligence.",
  },
  {
    id: 4,
    label: "SCALE",
    title: "Long-Term Commitment",
    number: "04",
    description:
      "We're building infrastructure that lasts. Decisions optimize for reliability over years, not growth metrics over quarters. Systems designed to scale sustainably as AI demands increase.",
  },
] as const;

type HowWeLeadCardProps = {
  item: HowWeLeadItem;
};

const HowWeLeadCard = ({ item }: HowWeLeadCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-md border border-gray-05 bg-white p-4 md:p-5">
      <div className="flex items-center justify-between">
        <div>
          <Text as="small" textColor="primary" fontFamily="spaceMono">
            {item.label}
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
          aria-hidden="true"
        >
          {item.number}
        </Text>
      </div>
      <Text as="h6" textColor="gray-66" className="mt-6 md:mt-12">
        {item.description}
      </Text>
    </article>
  );
};

const LeaderHowWeLeadsSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="how-we-lead-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-70"
          className="rounded-md border border-primary-30 bg-primary-20 p-1"
        >
          Our Approach
        </Text>

        <Text
          as="h2"
          id="how-we-lead-section-heading"
          align="center"
          className="mt-4 max-w-5xl md:mt-6"
        >
          How
          <Text as="span" variant="h2" textColor="primary">
            We Lead
          </Text>
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:mt-12.5 w-full">
          {HOW_WE_LEAD_ITEMS.map((item) => (
            <HowWeLeadCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LeaderHowWeLeadsSection;
