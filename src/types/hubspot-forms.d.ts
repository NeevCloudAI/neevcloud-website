type HubSpotFormOptions = {
  portalId: string;
  formId: string;
  region: string;
  target: string;
};

interface Window {
  hbspt?: {
    forms: {
      create: (options: HubSpotFormOptions) => void;
    };
  };
}
