type HubSpotFormOptions = {
  portalId: string;
  formId: string;
  region: string;
  target: string;
  cssClass?: string;
};

interface Window {
  hbspt?: {
    forms: {
      create: (options: HubSpotFormOptions) => void;
    };
  };
}
