import type { OfficeLocation } from "../types/offices-section.types";

export const OFFICES_SECTION = {
  titlePrefix: "Our",
  titleHighlight: "Offices",
} as const;

export const OFFICE_LOCATIONS: readonly OfficeLocation[] = [
  {
    id: "bengaluru",
    label: "OFFICE LOCATIONS",
    title: "Bengaluru",
    number: "01",
    description:
      "NeevAI Supercloud Pvt. Ltd. WeWork India Management Limited Salarpuria Symbiosis, Bannerghatta Rd Bengaluru, KA 560076",
  },
  {
    id: "mumbai",
    label: "BUSINESS & PARTNERSHIPS",
    title: "Mumbai",
    number: "02",
    description:
      "NeevAI Supercloud Pvt. Ltd. 203, 2nd Floor, Ackruti Star MIDC Central Rd, Andheri East Mumbai, MH 400069",
  },
  {
    id: "indore",
    label: "OPERATIONS & CUSTOMER SUCCESS",
    title: "Indore",
    number: "03",
    description:
      "NeevAI Supercloud Pvt. Ltd. Unit No. 401, Plot No. 12/A/A Astra Building, Scheme No. 74C, Vijay Nagar Indore, MP 452010",
  },
] as const;
