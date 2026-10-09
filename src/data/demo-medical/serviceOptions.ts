import { medicalServices } from "./services";

// Original HTML's "Choose Services" dropdown had real-estate options
// ("Buying a Home", "Selling a Property"...) left over from another
// theme demo — a genuine content bug, fixed per user agreement to match
// medical services instead (same 7 services as the home/service tab
// sections — derived from the single source in services.ts).
export const serviceOptions = [
  { value: "", label: "Choose Services" },
  ...medicalServices.map((service) => ({ value: service.slug, label: service.name })),
  { value: "other", label: "Other" },
];
