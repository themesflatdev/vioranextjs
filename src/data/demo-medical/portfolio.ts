export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  // Isotope filter token (matches the tf-filters buttons' data-filter). Item
  // 6 ("Back to Strength") had class "Body Surgery" (literal space, 2 broken
  // tokens) in the original HTML instead of "bodySurgery" like item 1 — a
  // genuine typo that made it silently vanish from the "Body Surgery" filter.
  // Fixed here to the intended camelCase token per user agreement.
  filterClass: "bodySurgery" | "dentalCare" | "cardiology";
  image: string;
};

// All 6 items share the exact same description in the original HTML (cut
// off mid-sentence, no closing period) — a real content bug, preserved
// verbatim per CLAUDE.md rule 4.
export const portfolioDescription =
  "Medical services are an essential part of our lives, offering care and treatment for various health ";

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "caring-for-kids",
    title: "Caring for Kids",
    category: "Body Surgery",
    filterClass: "bodySurgery",
    image: "/assets/images/demo-medical/portfolio-item-1.jpg",
  },
  {
    slug: "pediatric-success-stories",
    title: "Pediatric Success Stories",
    category: "Cardiology",
    filterClass: "cardiology",
    image: "/assets/images/demo-medical/portfolio-item-2.jpg",
  },
  {
    slug: "thriving-young-patients",
    title: "Thriving Young Patients",
    category: "Dental Care",
    filterClass: "dentalCare",
    image: "/assets/images/demo-medical/portfolio-item-3.jpg",
  },
  {
    // Original title is cut off ("Protecting Your Child’s.") — a theme typo,
    // kept verbatim since the intended full title is unknown.
    slug: "protecting-your-childs",
    title: "Protecting Your Child’s.",
    category: "Dental Care",
    filterClass: "dentalCare",
    image: "/assets/images/demo-medical/portfolio-item-4.jpg",
  },
  {
    slug: "diabetes-controlled",
    title: "Diabetes Controlled",
    category: "Cardiology",
    filterClass: "cardiology",
    image: "/assets/images/demo-medical/portfolio-item-5.jpg",
  },
  {
    slug: "back-to-strength",
    title: "Back to Strength",
    category: "Body Surgery",
    filterClass: "bodySurgery",
    image: "/assets/images/demo-medical/portfolio-item-6.jpg",
  },
];

export const portfolioFilters: { label: string; filter: string }[] = [
  { label: "View All", filter: "*" },
  { label: "Body Surgery", filter: ".bodySurgery" },
  { label: "Dental Care", filter: ".dentalCare" },
  { label: "Cardiology", filter: ".cardiology" },
];
