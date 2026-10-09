export type MedicalService = {
  id: string;
  slug: string;
  name: string;
};

// Single source of truth for the 7 medical services — used by the home +
// /service page tabs, the "Choose Services" dropdown (appointment/book
// appointment forms), the footer's "Our Services" column, and
// /service-detail/[slug]'s generateStaticParams.
export const medicalServices: MedicalService[] = [
  { id: "generalCheckUp", slug: "general-check-up", name: "General Check-Up" },
  { id: "pediatrics", slug: "pediatrics", name: "Pediatrics" },
  { id: "cardiology", slug: "cardiology", name: "Cardiology" },
  { id: "laboratoryTests", slug: "laboratory-tests", name: "Laboratory Tests" },
  { id: "dermatology", slug: "dermatology", name: "Dermatology" },
  { id: "emergencyCare", slug: "emergency-care", name: "Emergency Care" },
  { id: "diseaseManagement", slug: "disease-management", name: "Disease Management" },
];
