import { DEFENCE_SOVEREIGN_SERVICES } from "@/features/media-vfx/data/rendering-section.data copy";
import ServiceListSection from "@/shared/components/Servicelistsection";

const DefenceSovereignSection = () => (
  <ServiceListSection
    sectionId="defence-sovereign-stack-section-heading"
    heading="Complete"
    headingHighlight="Sovereign Stack"
    description="Five layers, compute, storage, network, environment, deployment, each capable of running fully isolated, indigenous, and on Indian soil."
    services={DEFENCE_SOVEREIGN_SERVICES}
    ariaLabel="Defence sovereign stack services"
  />
);

export default DefenceSovereignSection;
