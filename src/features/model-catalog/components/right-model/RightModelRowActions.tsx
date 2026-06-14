import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import { LinkComponent } from "@/shared/ui-lib";

const RightModelRowActions = () => {
  return (
    <div className="flex items-center gap-1.25">
      <LinkComponent
        href={EXTERNAL_LINKS.modelApi}
        target="_blank"
        size="xs"
        fontFamily="spaceMono"
        spacing="md"
      >
        Try
      </LinkComponent>
      <LinkComponent
        href={EXTERNAL_LINKS.documentation}
        variant="white-outline"
        target="_blank"
        size="xs"
        fontFamily="spaceMono"
        textColor="gray-03"
        spacing="md"
        className="border-gray-03"
      >
        Docs
      </LinkComponent>
      <LinkComponent
        href={EXTERNAL_LINKS.aiInferenceDedicatedModel}
        variant="white-outline"
        target="_blank"
        size="xs"
        fontFamily="spaceMono"
        textColor="gray-03"
        spacing="md"
        className="border-gray-03"
      >
        Deploy
      </LinkComponent>
    </div>
  );
};

export default RightModelRowActions;
