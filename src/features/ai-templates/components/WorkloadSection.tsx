import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { LayoutList, CircleCheck } from "@/shared/icons/lucide-icon-map";
import { AI_TEMPLATES_WORKLOAD_GROUPS } from "../data/workload-section.data";

const WorkloadSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="ai-templates-workload-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="ai-templates-workload-heading"
          textColor="white"
          align="center"
        >
          Templates for
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Every AI Workload
          </Text>
        </Text>

        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {AI_TEMPLATES_WORKLOAD_GROUPS.map((group) => (
            <li key={group.title}>
              <article className="flex h-full flex-col rounded-md bg-white p-4 md:p-7.5">
                <LayoutList className="text-primary size-8.5" strokeWidth={1.5} />
                <Text as="h3" weight="semibold" className="mt-5">
                  {group.title}
                </Text>
                <ul className="mt-4 flex flex-col gap-2.5 list-none p-0 m-0">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CircleCheck
                        className="text-primary size-4 shrink-0"
                        aria-hidden
                      />
                      <Text as="h6" textColor="black">
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WorkloadSection;
