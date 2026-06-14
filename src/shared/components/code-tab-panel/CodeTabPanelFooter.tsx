import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import { Divider, LinkComponent } from "@/shared/ui-lib";

const CodeTabPanelFooter = () => {
  return (
    <>
      <Divider orientation="horizontal" className="mb-4 bg-white/12" />
      <div className="flex items-center justify-end pb-4 pr-4">
        <LinkComponent
          href={EXTERNAL_LINKS.documentation}
          target="_blank"
          variant="ghost"
          textColor="primary"
          fontFamily="spaceMono"
          className="underline"
        >
          View Complete Documentation
        </LinkComponent>
      </div>
    </>
  );
};

export default CodeTabPanelFooter;
