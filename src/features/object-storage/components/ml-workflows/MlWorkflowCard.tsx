import { cn } from "@/lib/utils";
import { SquareCheck } from "@/shared/icons/lucide-icon-map";
import { LinkComponent, Text } from "@/shared/ui-lib";
import type { MlWorkflowCardData } from "../../types/ml-workflows-section.types";
import MlWorkflowCardPreview from "./MlWorkflowCardPreview";

type MlWorkflowCardProps = {
  card: MlWorkflowCardData;
};

const MlWorkflowCard = ({ card }: MlWorkflowCardProps) => {
  const {
    variant,
    title,
    description,
    linkLabel,
    linkHref,
    linkTarget,
    hover,
  } = card;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg bg-cloud-gray p-4 sm:p-10",
      )}
    >
      <MlWorkflowCardPreview variant={variant} />

      <Text as="h3" weight="semibold" className="mt-4 md:mt-7.5">
        {title}
      </Text>
      <Text as="h6" textColor="gray-04" className="mt-2.5">
        {description}
      </Text>

      <LinkComponent
        href={linkHref}
        target={linkTarget}
        variant="link"
        spacing="none"
        textColor="primary"
        className="mt-4 md:mt-7.5"
      >
        {linkLabel}
      </LinkComponent>

      <div
        className={cn(
          "absolute inset-0 flex translate-y-full flex-col bg-primary/92 p-4 backdrop-blur-md transition-transform duration-500 ease-out md:p-10",
          "group-hover:translate-y-0 group-focus-within:translate-y-0",
        )}
      >
        <Text as="h6" textColor="white/62">
          {hover.label ?? "TRY THESE TASKS"}
        </Text>

        <ul className="m-0 mt-4 flex flex-1 list-none flex-col gap-2.5 p-0">
          {hover.tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2.5">
              <SquareCheck size={18} className="text-white" strokeWidth={3} />
              <Text as="h6" textColor="white">
                {task.title}
              </Text>
            </li>
          ))}
        </ul>

        <LinkComponent
          href={hover.ctaHref}
          target={hover.ctaTarget}
          variant="black"
          weight="semibold"
          className="mt-6 w-fit"
        >
          {hover.ctaLabel}
        </LinkComponent>
      </div>
    </article>
  );
};

export default MlWorkflowCard;
