import Container from "@/shared/components/container";
import { LinkComponent, Text } from "@/shared/ui-lib";
import { SquareCheck } from "@/shared/icons/lucide-icon-map";
import { AI_SUPERCLUSTER_CALENDLY_URL } from "../constants/ai-supercluster-page.constants";

const RESERVE_NOW_POINTS = [
  {
    title: "12-36 month commit",
    description: "Guaranteed allocation, fixed price",
  },
  {
    title: "Reserve GB300 NVL72 today",
    description: "Q2 2026 delivery, dedicated superpod",
  },
  {
    title: "Bring-your-own-network",
    description: "Direct connect to VPCs",
  },
  {
    title: "Engineer-on-call",
    description: "Named TAM plus 24/7 NOC support",
  },
] as const;

const ReserveNowSection = () => {
  return (
    <section className="relative bg-black py-8 md:py-16 2xl:py-25">
      <Container className="flex justify-center">
        <div className="w-full max-w-2xl rounded-md border border-white/12 bg-white/6 p-6 md:p-10 backdrop-blur-md">
          <Text as="small" textColor="primary" weight="semibold" className="uppercase tracking-wide">
            Reserve Now GPU
          </Text>
          <Text as="h2" weight="semibold" textColor="white" className="mt-2.5">
            Lock in 2026 capacity. Save up to 45%.
          </Text>

          <div className="mt-6 flex flex-col gap-4">
            {RESERVE_NOW_POINTS.map((point) => (
              <div key={point.title} className="flex items-start gap-2.5">
                <SquareCheck size={22} className="text-primary shrink-0" />
                <div>
                  <Text as="h6" weight="medium" textColor="white">
                    {point.title}
                  </Text>
                  <Text as="small" textColor="gray-01">
                    {point.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>

          <LinkComponent
            href={AI_SUPERCLUSTER_CALENDLY_URL}
            target="_blank"
            size="full"
            className="mt-6 text-center"
          >
            Reserve Capacity →
          </LinkComponent>
        </div>
      </Container>
    </section>
  );
};

export default ReserveNowSection;
