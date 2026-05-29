import ServiceListSection from "@/shared/components/Servicelistsection";
import { RENDERING_SERVICES } from "../data/rendering-section.data";

const RenderingSection = () => (
  <ServiceListSection
    sectionId="rendering-stack-section-heading"
    heading="Complete "
    headingHighlight="rendering stack"
    description="Every layer of the production pipeline, compute, storage, network, software, orchestration — provisioned and managed."
    services={RENDERING_SERVICES}
    ariaLabel="Rendering stack services"
  />
);

export default RenderingSection;
