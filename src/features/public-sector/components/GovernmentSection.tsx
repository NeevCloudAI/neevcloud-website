import ServiceListSection from "@/shared/components/Servicelistsection";
import { GOVERNMENT_SERVICES } from "../data/government-section.data";

const GovernmentSection = () => (
  <ServiceListSection
    sectionId="public-sector-government-section-heading"
    heading="Complete AI Platform "
    headingHighlight="for government."
    description="A single sovereign stack, compute, inference, storage, and orchestration, built for public sector workloads."
    services={GOVERNMENT_SERVICES}
    ariaLabel="Government AI platform services"
  />
);

export default GovernmentSection;
