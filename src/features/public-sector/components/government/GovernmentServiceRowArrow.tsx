import { ArrowRight } from "@/shared/icons/lucide-icon-map";

const GovernmentServiceRowArrow = () => {
  return (
    <span
      className="inline-flex rounded-full border border-primary bg-transparent p-3 transition-colors group-hover:border-primary group-hover:bg-primary"
      aria-hidden="true"
    >
      <ArrowRight
        size={18}
        strokeWidth={2.5}
        className="text-primary transition-colors group-hover:text-primary"
      />
    </span>
  );
};

export default GovernmentServiceRowArrow;
