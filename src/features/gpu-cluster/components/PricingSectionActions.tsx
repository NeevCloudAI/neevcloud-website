import { LinkComponent } from "@/shared/ui-lib";

const PricingSectionActions = () => {
  return (
    <div className="w-full flex gap-4 flex-col md:flex-row items-center justify-center mt-8 md:mt-25">
      <LinkComponent href="/gpu-pricing" className="w-full md:w-auto">
        View Complete Pricing
      </LinkComponent>
      <LinkComponent
        href="/contact-neevcloud"
        variant="white"
        textColor="black"
        className="w-full md:w-auto"
      >
        Contact for Custom Plans
      </LinkComponent>
    </div>
  );
};

export default PricingSectionActions;
