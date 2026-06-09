import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import LinkComponent from "@/shared/ui-lib/link";

const CpuWorkloadSectionActions = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-8 md:mt-25">
      <LinkComponent href={EXTERNAL_LINKS.signup} target="_blank">
        Deploy Instance
      </LinkComponent>
    </div>
  );
};

export default CpuWorkloadSectionActions;
