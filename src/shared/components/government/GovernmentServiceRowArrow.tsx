import { ArrowRight } from "lucide-react";

const ServiceRowArrow = () => {
  return (
    <span
      className="inline-flex rounded-full border border-primary bg-transparent p-3 transition-colors group-hover:border-primary group-hover:bg-primary"
      aria-hidden="true"
    >
      <ArrowRight
        size={18}
        strokeWidth={2.5}
        className="text-primary transition-colors group-hover:text-primary-80"
      />
    </span>
  );
};

export default ServiceRowArrow;
