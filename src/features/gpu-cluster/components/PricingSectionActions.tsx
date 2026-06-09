import LinkComponent from "@/shared/ui-lib/link";

const PricingSectionActions = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row items-center justify-center mt-8 md:mt-25">
      <LinkComponent href="/gpu-pricing">View Complete Pricing</LinkComponent>
      <LinkComponent
        href="/contact-neevcloud"
        variant="white"
        textColor="black"
      >
        Contact for Custom Plans
      </LinkComponent>
    </div>
  );
};

export default PricingSectionActions;
