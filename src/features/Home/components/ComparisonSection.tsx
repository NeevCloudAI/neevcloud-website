import ComparisonSectionClient from "./ComparisonSectionClient";

export default function ComparisonSection() {
  return (
    <section aria-labelledby="comparison-section-heading">
      <h2 id="comparison-section-heading" className="sr-only">
        NeevCloud comparison
      </h2>
      <ComparisonSectionClient />
    </section>
  );
}
